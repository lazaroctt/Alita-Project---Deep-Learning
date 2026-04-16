import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const topics = [
  'Deep Learning', 'fMRI', 'EEG / BCI',
  'Graph Neural Networks', 'Autoencoders', 'Connectomics',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 dot-grid overflow-hidden">
      {/* Very subtle radial vignette over the dot grid */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, #06080e 100%)',
        }}
      />

      <div className="container-wide relative z-10 py-28">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="section-label mb-5">Alita Project &nbsp;&middot;&nbsp; Computational Neuroscience</p>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-100 leading-[1.08] tracking-tight text-balance">
            Bridging <span className="text-blue-400">Intelligence</span><br />
            Artificial &amp; Biological
          </h1>

          {/* Sub-heading */}
          <p className="mt-6 text-slate-500 leading-relaxed max-w-xl">
            We develop deep learning methods for neural data analysis &mdash; connecting
            state-of-the-art AI architectures to fundamental questions in neuroscience
            and back again.
          </p>

          {/* Topic pills */}
          <div className="mt-7 flex flex-wrap gap-2">
            {topics.map((t) => (
              <Badge key={t} variant="default">{t}</Badge>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/projects" size="lg" variant="primary">
              View Research
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/publications" size="lg" variant="outline">
              Publications
            </Button>
          </div>
        </div>

        {/* Decorative neuron trace — right side, desktop only */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[420px] opacity-30 pointer-events-none select-none">
          <svg viewBox="0 0 420 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Soma */}
            <circle cx="210" cy="200" r="28" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <circle cx="210" cy="200" r="8"  stroke="rgba(37,99,235,0.4)"    strokeWidth="0.8" />
            {/* Axon */}
            <path d="M 238 200 Q 310 200 360 240 L 410 270" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" />
            {/* Dendrites */}
            <path d="M 182 200 Q 120 175 60 150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round" />
            <path d="M 185 190 Q 130 130 80 90"  stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round" />
            <path d="M 195 180 Q 170 110 150 50"  stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeLinecap="round" />
            <path d="M 185 210 Q 110 220 50 260"  stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round" />
            <path d="M 188 220 Q 140 280 100 340"  stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeLinecap="round" />
            {/* Synapse dots */}
            <circle cx="60"  cy="150" r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
            <circle cx="80"  cy="90"  r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
            <circle cx="150" cy="50"  r="3" stroke="rgba(37,99,235,0.4)"  strokeWidth="0.8" />
            <circle cx="50"  cy="260" r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
            <circle cx="100" cy="340" r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
            <circle cx="410" cy="270" r="4" stroke="rgba(37,99,235,0.5)"  strokeWidth="0.8" />
          </svg>
        </div>
      </div>
    </section>
  )
}
