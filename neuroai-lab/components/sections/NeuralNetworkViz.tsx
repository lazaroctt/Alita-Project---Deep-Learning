'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

type Mode = 'autoencoder' | 'feedforward'

const LAYERS: readonly number[] = [6, 4, 3, 2, 3, 4, 6]

const LAYER_LABELS_AE: readonly string[] = [
  'Input', 'Encoder', '', 'Latent', '', 'Decoder', 'Output',
]

const LAYER_LABELS_FF: readonly string[] = [
  'Input', 'Hidden 1', 'Hidden 2', 'Hidden 3', 'Hidden 4', 'Hidden 5', 'Output',
]

const STEP_DESCRIPTIONS: Record<string, string> = {
  '-1': 'Press "Propagate" to animate the signal layer by layer.',
  '0':  'Input layer: raw data (e.g. fMRI voxel intensities) is fed into the network.',
  '1':  'First hidden layer: low-level features are extracted from the input.',
  '2':  'Second hidden layer: more abstract representations begin to emerge.',
  '3':  'Latent layer (bottleneck): compressed code - the internal representation of the autoencoder.',
  '4':  'First decoder layer: the signal starts to be reconstructed from the code.',
  '5':  'Second decoder layer: fine-grained details are progressively recovered.',
  '6':  'Output layer: reconstruction of the original input. Reconstruction error drives training.',
}

const COLORS = {
  inactive: '#0f172a',
  active:   '#2563eb',
  latent:   '#1d4ed8',
  output:   '#1e3a8a',
} as const

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

interface NodePos { x: number; y: number }

function drawNetwork(
  ctx: CanvasRenderingContext2D,
  w: number, h: number,
  layer: number, prog: number,
  mode: Mode,
): void {
  ctx.clearRect(0, 0, w, h)

  const numLayers = LAYERS.length
  const xStep = w / (numLayers + 1)
  const positions: NodePos[][] = []

  for (let l = 0; l < numLayers; l++) {
    const n = LAYERS[l] ?? 1
    const x = xStep * (l + 1)
    const yStep = h / (n + 1)
    const nodes: NodePos[] = []
    for (let i = 0; i < n; i++) nodes.push({ x, y: yStep * (i + 1) })
    positions.push(nodes)
  }

  // Edges
  for (let l = 0; l < numLayers - 1; l++) {
    const src = positions[l]
    const dst = positions[l + 1]
    if (!src || !dst) continue
    for (const s of src) {
      for (const d of dst) {
        const activated = l < layer || (l === layer && prog > 0)
        const alpha = activated ? (l < layer ? 0.25 : prog * 0.25) : 0.04
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(d.x, d.y)
        ctx.strokeStyle = activated
          ? `rgba(37,99,235,${alpha})`
          : 'rgba(255,255,255,0.04)'
        ctx.lineWidth = 0.7
        ctx.stroke()
      }
    }
  }

  // Nodes
  for (let l = 0; l < numLayers; l++) {
    const layerNodes = positions[l]
    if (!layerNodes) continue
    for (const { x, y } of layerNodes) {
      const isLatent = mode === 'autoencoder' && l === 3
      const isOutput = l === numLayers - 1
      let color: string = COLORS.inactive
      let glow = 0

      if (l < layer) {
        color = isLatent ? COLORS.latent : isOutput ? COLORS.output : COLORS.active
        glow = 6
      } else if (l === layer) {
        const baseR = 15;  const baseG = 23;  const baseB = 42
        const tgtR = isLatent ? 29  : isOutput ? 30  : 37
        const tgtG = isLatent ? 78  : isOutput ? 58  : 99
        const tgtB = isLatent ? 216 : isOutput ? 138 : 235
        const r = Math.round(lerp(baseR, tgtR, prog))
        const g = Math.round(lerp(baseG, tgtG, prog))
        const b = Math.round(lerp(baseB, tgtB, prog))
        color = `rgb(${r},${g},${b})`
        glow = prog * 8
      }

      ctx.shadowBlur  = glow > 0 ? glow : 0
      ctx.shadowColor = glow > 0 ? color : 'transparent'

      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'
      ctx.lineWidth = 0.8
      ctx.stroke()
      ctx.shadowBlur = 0
    }
  }

  // Labels
  const labels = mode === 'autoencoder' ? LAYER_LABELS_AE : LAYER_LABELS_FF
  ctx.font = '9px Inter, sans-serif'
  ctx.textAlign = 'center'
  for (let l = 0; l < numLayers; l++) {
    ctx.fillStyle = l <= layer ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.12)'
    ctx.fillText(labels[l] ?? '', xStep * (l + 1), h - 5)
  }
}

export default function NeuralNetworkViz() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const animRef    = useRef<number | null>(null)
  const [mode, setMode]               = useState<Mode>('autoencoder')
  const [speed, setSpeed]             = useState<number>(1)
  const [activeLayer, setActiveLayer] = useState<number>(-1)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [progress, setProgress]       = useState<number>(0)

  const stopAnimation = useCallback(() => {
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current)
      animRef.current = null
    }
    setIsAnimating(false)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const dpr = window.devicePixelRatio || 1
    const w   = canvas.clientWidth
    const h   = canvas.clientHeight
    canvas.width  = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)
    drawNetwork(ctx, w, h, activeLayer, progress, mode)
  }, [activeLayer, progress, mode])

  const handlePropagate = useCallback(() => {
    if (isAnimating) {
      stopAnimation()
      setActiveLayer(-1)
      setProgress(0)
      return
    }
    setActiveLayer(0)
    setProgress(0)
    setIsAnimating(true)

    const duration = 600 / speed
    let currentLayer = 0
    let startTime: number | null = null

    const step = (ts: number): void => {
      if (startTime === null) startTime = ts
      const t = Math.min((ts - startTime) / duration, 1)
      setProgress(t)
      if (t >= 1) {
        currentLayer += 1
        if (currentLayer >= LAYERS.length) {
          setActiveLayer(LAYERS.length - 1)
          setProgress(1)
          setIsAnimating(false)
          animRef.current = null
          return
        }
        setActiveLayer(currentLayer)
        setProgress(0)
        startTime = ts
      }
      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
  }, [isAnimating, speed, stopAnimation])

  useEffect(() => () => { stopAnimation() }, [stopAnimation])

  const description = STEP_DESCRIPTIONS[String(activeLayer)] ?? STEP_DESCRIPTIONS['-1'] ?? ''
  const modeOptions: Mode[] = ['autoencoder', 'feedforward']

  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="section-label mb-3">Interactive visualisation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Signal propagation
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            Observe how a neural signal flows through an autoencoder or feedforward network in real time.
          </p>
        </div>

        <div className="max-w-4xl">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            {/* Mode */}
            <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] rounded-lg p-0.5">
              {modeOptions.map((m) => (
                <button key={m} type="button"
                  onClick={() => { setMode(m); setActiveLayer(-1); setProgress(0); stopAnimation() }}
                  className={`px-3 py-1.5 rounded-md text-[12px] font-medium transition-all ${
                    mode === m ? 'bg-white/[0.08] text-slate-100' : 'text-slate-600 hover:text-slate-300'
                  }`}
                >
                  {m === 'autoencoder' ? 'Autoencoder' : 'Feedforward'}
                </button>
              ))}
            </div>

            {/* Speed */}
            <div className="flex items-center gap-2 text-slate-600 text-[12px]">
              <span>Speed</span>
              <input type="range" min={0.5} max={3} step={0.5} value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-24 accent-blue-600"
              />
              <span className="w-8 text-slate-500">{speed}x</span>
            </div>

            {/* Propagate */}
            <button type="button" onClick={handlePropagate}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                isAnimating
                  ? 'bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-slate-200'
                  : 'bg-blue-600 text-white hover:bg-blue-500'
              }`}
            >
              {isAnimating ? (
                <><span className="w-2 h-2 rounded-sm bg-slate-400 inline-block" /> Stop</>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Propagate
                </>
              )}
            </button>
          </div>

          {/* Canvas */}
          <div className="bg-[#06080e] border border-white/[0.06] rounded-2xl overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-60 md:h-72" style={{ display: 'block' }} />
          </div>

          {/* Description */}
          <div className="mt-3 px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-xl min-h-[52px]">
            <p className="text-[13px] text-slate-500 leading-relaxed">
              {activeLayer >= 0 && (
                <span className="text-blue-500 font-medium mr-1">
                  Layer {activeLayer + 1}/{LAYERS.length} &mdash;
                </span>
              )}
              {description}
            </p>
          </div>

          {/* Legend */}
          <div className="mt-3 flex flex-wrap gap-4 text-[11px] text-slate-700">
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />Active neuron</div>
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-800 inline-block" />Latent space</div>
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-800 inline-block border border-white/[0.08]" />Inactive</div>
          </div>
        </div>
      </div>
    </section>
  )
}
