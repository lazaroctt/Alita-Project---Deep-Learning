import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const areas = [
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="18" cy="16" r="11" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="18" cy="16" r="5"  stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <path d="M18 5 v2 M18 27 v2 M7 16 h-2 M29 16 h2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round" />
        <circle cx="18" cy="16" r="2" fill="rgba(37,99,235,0.5)" />
        <line x1="18" y1="27" x2="18" y2="32" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round" />
        <line x1="12" y1="32" x2="24" y2="32" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: 'Neuroimaging with AI',
    description:
      'Analysis of fMRI and sMRI volumes with 3D convolutional and variational autoencoder architectures for lesion detection, anatomical segmentation, and biomarker extraction.',
    stack: ['3D-CNN', 'VAE', 'U-Net', 'BIDS'],
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="10" cy="10" r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <circle cx="26" cy="10" r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <circle cx="18" cy="26" r="3" stroke="rgba(37,99,235,0.5)" strokeWidth="0.8" />
        <circle cx="6"  cy="24" r="2" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <circle cx="30" cy="24" r="2" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <line x1="10" y1="10" x2="26" y2="10" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <line x1="10" y1="10" x2="18" y2="26" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <line x1="26" y1="10" x2="18" y2="26" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <line x1="10" y1="10" x2="6"  y2="24" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
        <line x1="26" y1="10" x2="30" y2="24" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
        <line x1="18" y1="26" x2="6"  y2="24" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
        <line x1="18" y1="26" x2="30" y2="24" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      </svg>
    ),
    title: 'Connectome Analysis',
    description:
      'Modelling functional and structural connectivity with Graph Neural Networks over correlation matrices derived from resting-state fMRI and diffusion tractography.',
    stack: ['GNN', 'PyG', 'NetworkX', 'HCP'],
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" aria-hidden="true">
        <path
          d="M4 22 Q7 14 10 22 Q13 30 16 18 Q19 6 22 18 Q25 30 28 22"
          stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" fill="none" strokeLinecap="round"
        />
        <circle cx="28" cy="22" r="3" stroke="rgba(37,99,235,0.5)" strokeWidth="0.8" />
        <line x1="31" y1="18" x2="34" y2="14" stroke="rgba(37,99,235,0.3)" strokeWidth="1" strokeLinecap="round" />
        <line x1="31" y1="26" x2="34" y2="30" stroke="rgba(37,99,235,0.3)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: 'EEG Signals & BCI',
    description:
      'Decoding motor imagery and cognitive states from high-density EEG using Transformer and temporal convolutional architectures for real-time brain-computer interfaces.',
    stack: ['Transformer', 'TCN', 'MNE', 'LSL'],
  },
]

export default function ResearchAreas() {
  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="section-label mb-3">Research lines</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Research Areas</h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            Three interconnected lines of investigation linking modern AI architectures to real neural data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {areas.map((area) => (
            <Card key={area.title} as="article" className="flex flex-col gap-5">
              <div className="text-slate-500">{area.icon}</div>
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-slate-200 mb-2">{area.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{area.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
                {area.stack.map((t) => (
                  <Badge key={t} variant="muted">{t}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
