import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const topics = [
  'Deep Learning', 'fMRI', 'EEG / BCI',
  'Graph Neural Networks', 'Autoencoders', 'Connectomics',
]

// Pre-defined nodes for the neural network (layered left-to-right)
const nodes = [
  // Layer 0 — input
  { id: 0,  x: 68,  y: 148, delay: '0s',    dur: '2.2s' },
  { id: 1,  x: 68,  y: 218, delay: '0.6s',  dur: '2.8s' },
  { id: 2,  x: 68,  y: 288, delay: '1.1s',  dur: '2.5s' },
  // Layer 1
  { id: 3,  x: 168, y: 118, delay: '0.3s',  dur: '2.6s' },
  { id: 4,  x: 168, y: 183, delay: '0.9s',  dur: '2.2s' },
  { id: 5,  x: 168, y: 248, delay: '1.4s',  dur: '2.9s' },
  { id: 6,  x: 168, y: 313, delay: '0.5s',  dur: '2.4s' },
  // Layer 2 — centre
  { id: 7,  x: 268, y: 98,  delay: '0.7s',  dur: '2.3s' },
  { id: 8,  x: 268, y: 160, delay: '1.2s',  dur: '2.7s' },
  { id: 9,  x: 268, y: 222, delay: '0.2s',  dur: '3.0s' },
  { id: 10, x: 268, y: 284, delay: '1.6s',  dur: '2.1s' },
  { id: 11, x: 268, y: 346, delay: '0.8s',  dur: '2.5s' },
  // Layer 3
  { id: 12, x: 368, y: 128, delay: '0.4s',  dur: '2.8s' },
  { id: 13, x: 368, y: 196, delay: '1.0s',  dur: '2.3s' },
  { id: 14, x: 368, y: 264, delay: '1.5s',  dur: '2.6s' },
  { id: 15, x: 368, y: 332, delay: '0.6s',  dur: '2.2s' },
  // Layer 4 — output
  { id: 16, x: 462, y: 162, delay: '1.3s',  dur: '2.4s' },
  { id: 17, x: 462, y: 234, delay: '0.5s',  dur: '2.9s' },
  { id: 18, x: 462, y: 306, delay: '1.7s',  dur: '2.1s' },
]

// Edges between adjacent layers
const edges: [number, number][] = [
  // 0→1
  [0,3],[0,4],[0,5],
  [1,3],[1,4],[1,5],[1,6],
  [2,4],[2,5],[2,6],
  // 1→2
  [3,7],[3,8],[3,9],
  [4,7],[4,8],[4,9],[4,10],
  [5,8],[5,9],[5,10],[5,11],
  [6,9],[6,10],[6,11],
  // 2→3
  [7,12],[7,13],
  [8,12],[8,13],[8,14],
  [9,12],[9,13],[9,14],
  [10,13],[10,14],[10,15],
  [11,14],[11,15],
  // 3→4
  [12,16],[12,17],
  [13,16],[13,17],[13,18],
  [14,16],[14,17],[14,18],
  [15,17],[15,18],
]

function BrainNeuralViz() {
  return (
    <svg
      viewBox="0 0 540 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[580px]"
      aria-hidden="true"
    >
      {/* Glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softglow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="brainGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="rgba(96,165,250,0.12)" />
          <stop offset="100%" stopColor="rgba(96,165,250,0)" />
        </radialGradient>
      </defs>

      {/* Brain silhouette — soft background glow */}
      <ellipse cx="270" cy="228" rx="230" ry="185" fill="url(#brainGrad)" className="brain-outline" />

      {/* Brain outline with gyri — simplified lateral view */}
      <path
        className="brain-outline"
        d="
          M 200 68
          C 225 52 260 46 296 52
          C 330 58 362 76 385 102
          C 408 128 418 162 415 196
          C 430 208 438 228 432 250
          C 426 272 410 284 395 288
          C 398 308 392 330 375 344
          C 358 360 334 364 315 356
          C 308 374 292 386 272 389
          C 252 392 232 384 222 370
          C 202 378 180 373 166 358
          C 150 343 148 320 158 302
          C 140 292 126 274 122 252
          C 116 230 122 206 136 188
          C 122 174 116 154 124 132
          C 132 110 152 92 176 80
          C 184 74 192 70 200 68 Z
        "
        stroke="rgba(96,165,250,0.22)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Gyri hints (secondary folds) */}
      <path d="M 290 56 C 310 62 328 72 340 88" stroke="rgba(96,165,250,0.10)" strokeWidth="1" strokeLinecap="round" className="brain-outline" />
      <path d="M 245 54 C 255 60 258 70 250 82" stroke="rgba(96,165,250,0.10)" strokeWidth="1" strokeLinecap="round" className="brain-outline" />
      <path d="M 395 200 C 405 215 408 235 400 252" stroke="rgba(96,165,250,0.10)" strokeWidth="1" strokeLinecap="round" className="brain-outline" />
      <path d="M 130 210 C 118 228 118 248 128 264" stroke="rgba(96,165,250,0.10)" strokeWidth="1" strokeLinecap="round" className="brain-outline" />

      {/* ─── Edges ─── */}
      {edges.map(([a, b], i) => {
        const na = nodes[a], nb = nodes[b]
        const delayA = parseFloat(na.delay)
        const delayB = parseFloat(nb.delay)
        const edgeDelay = `${((delayA + delayB) / 2).toFixed(2)}s`
        const edgeDur   = `${(2.5 + (i % 5) * 0.3).toFixed(1)}s`
        return (
          <line
            key={`e-${a}-${b}`}
            x1={na.x} y1={na.y}
            x2={nb.x} y2={nb.y}
            stroke="rgba(96,165,250,0.18)"
            strokeWidth="0.8"
            className="edge-animate"
            style={{ animationDelay: edgeDelay, animationDuration: edgeDur }}
          />
        )
      })}

      {/* ─── Nodes ─── */}
      {nodes.map(n => (
        <g key={`n-${n.id}`}>
          {/* Outer glow ring */}
          <circle
            cx={n.x} cy={n.y} r={9}
            fill="rgba(96,165,250,0.06)"
            className="node-animate"
            style={{ animationDelay: n.delay, animationDuration: n.dur }}
          />
          {/* Core dot */}
          <circle
            cx={n.x} cy={n.y} r={4.5}
            fill="rgba(96,165,250,0.55)"
            filter="url(#softglow)"
            className="node-animate"
            style={{ animationDelay: n.delay, animationDuration: n.dur }}
          />
          {/* Bright centre */}
          <circle
            cx={n.x} cy={n.y} r={2}
            fill="rgba(147,197,253,0.9)"
            className="node-animate"
            style={{ animationDelay: n.delay, animationDuration: n.dur }}
          />
        </g>
      ))}

      {/* Layer labels */}
      <text x="68"  y="390" textAnchor="middle" fontSize="9" fill="rgba(148,163,184,0.5)" fontFamily="var(--font-jetbrains-mono)">Input</text>
      <text x="268" y="390" textAnchor="middle" fontSize="9" fill="rgba(148,163,184,0.5)" fontFamily="var(--font-jetbrains-mono)">Hidden</text>
      <text x="462" y="390" textAnchor="middle" fontSize="9" fill="rgba(148,163,184,0.5)" fontFamily="var(--font-jetbrains-mono)">Output</text>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 dot-grid overflow-hidden">
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 30% 50%, transparent 0%, var(--vignette) 100%)',
        }}
      />

      <div className="container-wide relative z-10 py-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 xl:gap-16 items-center">

          {/* ── LEFT: text ── */}
          <div className="max-w-2xl">
            <p className="section-label mb-6">
              Alita Project &nbsp;&middot;&nbsp; Computational Neuroscience
            </p>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-extrabold leading-[1.04] tracking-tight text-balance">
              Bridging{' '}
              <span className="text-blue-400">Intelligence</span>
              <br />
              Artificial &amp;
              <br />
              Biological
            </h1>

            <p className="mt-7 text-lg leading-relaxed max-w-lg" style={{ color: 'var(--fg-secondary)' }}>
              We develop deep learning methods for neural data analysis — connecting
              state-of-the-art AI architectures to fundamental questions in neuroscience
              and back again.
            </p>

            {/* Topic pills */}
            <div className="mt-7 flex flex-wrap gap-2">
              {topics.map(t => (
                <Badge key={t} variant="default">{t}</Badge>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/projects" size="lg" variant="primary">
                View Research
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/deep-learning" size="lg" variant="outline">
                Deep Learning
              </Button>
            </div>
          </div>

          {/* ── RIGHT: brain + neural network ── */}
          <div className="hidden lg:flex items-center justify-center opacity-80">
            <BrainNeuralViz />
          </div>
        </div>
      </div>
    </section>
  )
}
