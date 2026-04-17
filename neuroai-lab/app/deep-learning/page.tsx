import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'

/* ─── Types ─── */
interface Article {
  id: string
  category: string
  title: string
  authors: string
  date: string
  readTime: string
  abstract: string
  sections: { heading: string; body: string }[]
  tags: string[]
  doi?: string
}

/* ─── Content ─── */
const articles: Article[] = [
  {
    id: 'dl-neuro-overview',
    category: 'Review',
    title: 'Deep Learning as a Framework for Understanding the Brain',
    authors: 'Lázaro Romão · Alita Project',
    date: 'March 2025',
    readTime: '12 min read',
    abstract:
      'Deep neural networks have achieved superhuman performance across a wide range of tasks, from image recognition to natural language processing. A growing body of evidence suggests these models are not merely engineering tools, but may serve as computational models of biological neural systems. This review examines the bidirectional relationship between deep learning and neuroscience, exploring how each field informs the other.',
    sections: [
      {
        heading: 'The Shared Architecture Hypothesis',
        body: 'Convolutional neural networks (CNNs) trained on image classification tasks develop hierarchical representations that bear striking resemblance to the ventral visual stream in primates. Neurons in V1 respond preferentially to oriented edges and gratings — strikingly similar to the first-layer filters learned by CNNs. As depth increases, both biological and artificial systems encode progressively more abstract, invariant features. This convergence suggests that the hierarchical, feedforward processing strategy is a robust solution to sensory processing, independently discovered by biological evolution and gradient-based optimization.',
      },
      {
        heading: 'Representational Similarity Analysis',
        body: 'Representational Similarity Analysis (RSA) provides a common metric space in which the representational geometry of biological and artificial systems can be directly compared. By constructing representational dissimilarity matrices (RDMs) — where each cell encodes the difference in activation patterns evoked by a pair of stimuli — RSA allows researchers to ask whether two systems (a brain region and a model layer) organize information in similar ways. Recent work shows that intermediate layers of CNNs trained on ImageNet predict ventral stream fMRI responses better than traditional computational models, with V4 and IT cortex most closely aligned with layers 4–6.',
      },
      {
        heading: 'Beyond Feedforward Models',
        body: 'While feedforward hierarchies explain early to mid-level visual processing, the brain is fundamentally a recurrent system. Recurrent architectures, including LSTMs and modern transformer models, more naturally accommodate the temporal dynamics of neural computation — working memory, attentional gating, predictive coding, and multi-step inference. Transformers in particular offer a compelling model for top-down attention, with self-attention heads potentially mirroring the spotlight of selective attention across cortical space.',
      },
    ],
    tags: ['Review', 'Computational Neuroscience', 'Visual System', 'Representations'],
  },
  {
    id: 'transformers-fmri',
    category: 'Research',
    title: 'Attention Is All You Need — And the Brain Agrees: Transformers for fMRI Decoding',
    authors: 'Lázaro Romão · Alita Project',
    date: 'January 2025',
    readTime: '9 min read',
    abstract:
      'We propose a transformer-based architecture for decoding cognitive states from functional magnetic resonance imaging (fMRI) time series. Leveraging the self-attention mechanism to model long-range dependencies across brain regions, our model achieves state-of-the-art decoding accuracy on the Human Connectome Project dataset while learning interpretable attention patterns that align with known functional connectivity networks.',
    sections: [
      {
        heading: 'Why Transformers for Brain Data?',
        body: "fMRI data is fundamentally a multivariate time series: thousands of voxels, each encoding a BOLD signal that reflects the hemodynamic response to local neural activity. Traditional approaches treat each voxel independently or rely on pre-defined regions of interest (ROIs). The transformer self-attention mechanism naturally models pairwise interactions between all brain regions simultaneously, learning to route information dynamically — much like the brain's own flexible functional connectivity. Positional encodings can encode either temporal order or spatial coordinates, providing a unified representation of the spatiotemporal structure of neural data.",
      },
      {
        heading: 'Architecture',
        body: 'The model accepts as input a tokenized sequence of volumetric brain states, where each token corresponds to the average BOLD signal within a parcellation atlas region over a single TR (typically 720 ms). Learned linear projections map each token into a high-dimensional embedding space. Twelve layers of multi-head self-attention (8 heads, hidden dimension 512) followed by position-wise feedforward networks extract hierarchical representations. A [CLS] token at the sequence head is read out for classification. The model is trained with cross-entropy loss using AdamW and a cosine learning rate schedule with warm-up.',
      },
      {
        heading: 'Results',
        body: 'On the HCP Working Memory task, our model achieves 94.2% decoding accuracy across 22 cognitive conditions — a 6.1% improvement over the previous best SVM baseline and 4.3% over a BiLSTM baseline. Critically, learned attention weights reveal that the default mode network (DMN) and frontoparietal control network (FPCN) show consistently high mutual attention across all tasks, consistent with their known roles in executive function. During language tasks, early attention heads capture syntactic dependencies between hemispheric language regions, while later heads encode semantic content.',
      },
    ],
    tags: ['fMRI', 'Transformer', 'Decoding', 'Human Connectome Project', 'Attention'],
    doi: '10.1101/2025.01.15.neuroai',
  },
  {
    id: 'gnn-connectome',
    category: 'Research',
    title: 'Graph Neural Networks Reveal Structural-Functional Coupling in the Human Connectome',
    authors: 'Lázaro Romão · Alita Project',
    date: 'November 2024',
    readTime: '10 min read',
    abstract:
      'The human connectome — the complete map of structural connections between brain regions — provides the anatomical substrate for all neural communication. We apply graph neural networks (GNNs) to the white matter tractography connectome to predict individual differences in cognitive performance and to identify the structural motifs most predictive of brain function, revealing previously overlooked long-range connector hubs.',
    sections: [
      {
        heading: 'The Brain as a Graph',
        body: 'Graph-theoretic analyses of brain connectivity have a rich history, from small-world network characterization to the identification of rich-club organization. However, classical graph measures are hand-crafted and unable to capture the full complexity of multi-scale structural organization. GNNs offer an end-to-end differentiable alternative: given the adjacency matrix (fiber density between parcels) and node features (regional cortical thickness, curvature, myelination), a series of message-passing operations propagates information across the graph, learning representations that encode both local topology and global network motifs.',
      },
      {
        heading: 'Message Passing Architecture',
        body: 'We employ a GraphSAGE architecture with mean aggregation over K=3 hop neighborhoods, trained to predict fluid intelligence scores (g-factor) from structural connectivity. Each node representation h_v^{(k)} at layer k is computed as: h_v^{(k)} = sigma(W^{(k)} · CONCAT(h_v^{(k-1)}, MEAN_{u in N(v)} h_u^{(k-1)})). The final graph-level embedding is obtained via a differentiable pooling (DiffPool) operation that hierarchically clusters nodes into a soft assignment matrix, enabling the model to learn a coarsened representation of the connectome at multiple scales. A linear readout predicts the target cognitive score.',
      },
      {
        heading: 'Connector Hubs and Cognitive Prediction',
        body: 'Gradient-weighted GNN explanation (Grad-CAM adapted for graphs) identifies the nodes and edges most influential for predictions. Our model achieves r=0.58 correlation with g-factor (p<0.001, n=1,040) — matching previous deep learning approaches while providing mechanistic interpretability. Saliency analysis reveals that the lateral prefrontal cortex, angular gyrus, and superior temporal sulcus — regions classically associated with higher cognition — contribute most to predictions. Crucially, long-range edges connecting frontal and posterior parietal cortex are consistently highlighted, suggesting that fronto-parietal structural connectivity is a key determinant of individual differences in fluid intelligence.',
      },
    ],
    tags: ['Connectome', 'Graph Neural Network', 'Structural MRI', 'Cognition', 'GNN'],
    doi: '10.1101/2024.11.03.neuroai',
  },
  {
    id: 'vae-eeg',
    category: 'Methods',
    title: 'Variational Autoencoders for Unsupervised Discovery of EEG Microstates and BCI Decoding',
    authors: 'Lázaro Romão · Alita Project',
    date: 'August 2024',
    readTime: '11 min read',
    abstract:
      'EEG microstate analysis — the segmentation of continuous EEG into short-duration, quasi-stable topographic maps — has yielded insights into resting-state network dynamics and their disruption in psychiatric disorders. We introduce a convolutional variational autoencoder (CVAE) that learns a low-dimensional latent space of EEG topographies without supervision, rediscovering canonical microstates while revealing a richer, continuous manifold structure that classical k-means clustering obscures.',
    sections: [
      {
        heading: 'Limitations of Classical Microstate Analysis',
        body: 'The dominant approach to EEG microstate analysis applies k-means or modified atomize-and-agglomerate hierarchical clustering (AAHC) to global field power (GFP) peaks, yielding 4–7 prototype maps (classes A–F). While reproducible across datasets, this approach assumes that the EEG topographic space is well-represented by a small set of discrete prototypes. In reality, EEG dynamics are continuous, high-dimensional, and shaped by ongoing cognitive and behavioral states. The rigid cluster assignment ignores gradient transitions between states and fails to capture subject-level or condition-level variability in a principled probabilistic framework.',
      },
      {
        heading: 'CVAE Architecture and Training',
        body: 'The encoder processes 64-channel EEG epochs (500 ms windows) through four convolutional blocks (32 to 64 to 128 to 256 filters), followed by dense layers that parameterize the mean mu and log-variance log(sigma^2) of an 8-dimensional Gaussian posterior q(z|x). The decoder mirrors the encoder, using transposed convolutions to reconstruct the input topography. Training minimizes the ELBO: L = E_q[log p(x|z)] - beta·KL(q(z|x) || p(z)), with beta annealed from 0 to 1 over 50 epochs to prevent posterior collapse. An auxiliary classification head trained on labeled segments encourages the latent space to organize along cognitively meaningful axes.',
      },
      {
        heading: 'Latent Space Structure and BCI Application',
        body: 'UMAP visualization of the latent space reveals a smooth manifold with four principal lobes corresponding to the canonical microstate classes A–D, but also rich intra-class structure that correlates with task engagement and vigilance. For motor imagery BCI decoding (left vs. right hand), a linear SVM trained on the 8-dimensional latent code achieves 81.3% accuracy (vs. 76.8% for raw EEG features), demonstrating that the CVAE captures task-relevant information. Latent trajectories during motor imagery show systematic displacement along a dimension that we interpret as the sensorimotor lateralization axis, providing a real-time neural state readout for BCI control.',
      },
    ],
    tags: ['EEG', 'VAE', 'BCI', 'Microstates', 'Unsupervised Learning', 'Latent Space'],
    doi: '10.1101/2024.08.22.neuroai',
  },
  {
    id: 'lstm-bci',
    category: 'Methods',
    title: 'Long Short-Term Memory Networks for Real-Time Neural Decoding in Brain-Computer Interfaces',
    authors: 'Lázaro Romão · Alita Project',
    date: 'May 2024',
    readTime: '8 min read',
    abstract:
      'Brain-computer interfaces (BCIs) enable direct communication between neural signals and external devices, with applications in motor rehabilitation, communication prosthetics, and neurofeedback. We present an LSTM-based neural decoder optimized for real-time operation, achieving sub-100 ms decoding latency on intracortical spike trains while maintaining >90% decoding accuracy across 8-DoF prosthetic arm control.',
    sections: [
      {
        heading: 'Temporal Structure in Neural Spiking',
        body: 'Population coding in motor cortex is inherently temporal. The firing rate trajectories of M1 neurons during movement preparation and execution carry rich information about intended kinematic parameters — not just in instantaneous population vectors, but across extended temporal windows (50–500 ms). Classical decoders (population vector algorithm, optimal linear estimator) integrate over fixed windows and discard trial-to-trial variability in the timing of neural events. LSTMs, by contrast, maintain a dynamically updated cell state that integrates information over variable-length histories, enabling them to capture the autocorrelation structure of neural dynamics and exploit preparatory activity for early, accurate decoding.',
      },
      {
        heading: 'Real-Time Architecture Constraints',
        body: 'Deployment on closed-loop BCI hardware (Blackrock Microsystems NSP, running on embedded ARM processors) imposes strict latency and memory constraints. Our LSTM decoder uses 2 layers of 256 hidden units, processing 10 ms binned firing rates from 96 Utah Array electrodes. Weights are quantized to INT8 precision using post-training quantization, reducing model size from 4.2 MB to 1.1 MB with less than 1% accuracy degradation. Causal processing (no look-ahead) ensures that each output is available within one 10 ms bin. On a Jetson Orin embedded GPU, inference latency is 3.2 ms per time step — well within the 10 ms budget.',
      },
      {
        heading: 'Clinical Translation',
        body: "In a pilot study with a tetraplegic participant (IRB #2024-NEU-017), the LSTM decoder enabled continuous 8-DoF prosthetic hand control with a mean endpoint error of 12.3 mm on a standardized reach-and-grasp task — a 34% improvement over the participant's prior PVA decoder. Importantly, the LSTM decoded fine finger movements (precision grip vs. power grip vs. pinch) with 87% accuracy, a capability not achievable with linear methods. Closed-loop operation with proprioceptive feedback further improved performance, suggesting that the LSTM successfully integrates the temporal consequences of motor commands into its internal state.",
      },
    ],
    tags: ['LSTM', 'BCI', 'Motor Cortex', 'Neural Decoding', 'Prosthetics', 'Real-Time'],
  },
]

/* ─── Small diagram SVGs ─── */
function TransformerDiagram() {
  return (
    <svg viewBox="0 0 320 120" fill="none" className="w-full max-h-28" aria-hidden="true">
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(96,165,250,0.6)" />
        </marker>
      </defs>
      {[0,1,2,3].map(i => (
        <rect key={i} x={12 + i*22} y={80} width={16} height={24} rx="3" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.4)" strokeWidth="0.8" />
      ))}
      {[0,1,2,3].map(i => [0,1,2,3].map(j => (
        <line key={`${i}-${j}`} x1={20+i*22} y1={80} x2={20+j*22} y2={38}
          stroke={`rgba(96,165,250,${i===j?0.5:0.12})`} strokeWidth={i===j?1.2:0.5} />
      )))}
      {[0,1,2,3].map(i => (
        <rect key={i} x={12 + i*22} y={14} width={16} height={24} rx="3" fill="rgba(96,165,250,0.25)" stroke="rgba(96,165,250,0.6)" strokeWidth="0.8" />
      ))}
      <text x="130" y="96" fontSize="8" fill="rgba(148,163,184,0.7)" fontFamily="monospace">Input tokens</text>
      <text x="130" y="30" fontSize="8" fill="rgba(148,163,184,0.7)" fontFamily="monospace">Output (decoded state)</text>
      <text x="130" y="55" fontSize="8" fill="rgba(96,165,250,0.8)" fontFamily="monospace">Self-Attention</text>
    </svg>
  )
}

function GraphDiagram() {
  const nodePos: [number, number][] = [[40,40],[100,20],[160,40],[100,80],[60,100],[150,100]]
  const edges: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[4,0],[1,3],[0,3],[2,5],[3,5]]
  return (
    <svg viewBox="0 0 200 130" fill="none" className="w-full max-h-28" aria-hidden="true">
      {edges.map(([a,b],i) => (
        <line key={i} x1={nodePos[a][0]} y1={nodePos[a][1]} x2={nodePos[b][0]} y2={nodePos[b][1]}
          stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
      ))}
      {nodePos.map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={8} fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.6)" strokeWidth="1" />
          <circle cx={x} cy={y} r={3} fill="rgba(147,197,253,0.8)" />
        </g>
      ))}
      <text x="10" y="125" fontSize="8" fill="rgba(148,163,184,0.7)" fontFamily="monospace">Brain parcellation graph — nodes = ROIs, edges = fiber tracts</text>
    </svg>
  )
}

function VAEDiagram() {
  return (
    <svg viewBox="0 0 320 100" fill="none" className="w-full max-h-28" aria-hidden="true">
      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(96,165,250,0.5)" />
        </marker>
      </defs>
      <rect x="10" y="30" width="50" height="40" rx="4" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.4)" strokeWidth="0.8"/>
      <text x="35" y="54" textAnchor="middle" fontSize="8" fill="rgba(148,163,184,0.8)" fontFamily="monospace">EEG</text>
      <path d="M 62 50 L 95 50" stroke="rgba(96,165,250,0.5)" strokeWidth="1" markerEnd="url(#arr2)" />
      <text x="78" y="44" textAnchor="middle" fontSize="7" fill="rgba(96,165,250,0.7)" fontFamily="monospace">Enc</text>
      <ellipse cx="120" cy="50" rx="22" ry="18" fill="rgba(37,99,235,0.2)" stroke="rgba(96,165,250,0.6)" strokeWidth="1"/>
      <text x="120" y="45" textAnchor="middle" fontSize="7" fill="rgba(147,197,253,0.9)" fontFamily="monospace">mu,sigma</text>
      <text x="120" y="57" textAnchor="middle" fontSize="7" fill="rgba(148,163,184,0.7)" fontFamily="monospace">z in R^8</text>
      <path d="M 142 50 L 175 50" stroke="rgba(96,165,250,0.5)" strokeWidth="1" markerEnd="url(#arr2)" />
      <text x="158" y="44" textAnchor="middle" fontSize="7" fill="rgba(96,165,250,0.7)" fontFamily="monospace">Dec</text>
      <rect x="178" y="30" width="50" height="40" rx="4" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.5)" strokeWidth="0.8"/>
      <text x="203" y="54" textAnchor="middle" fontSize="8" fill="rgba(148,163,184,0.8)" fontFamily="monospace">x_hat</text>
      <text x="240" y="54" fontSize="8" fill="rgba(148,163,184,0.6)" fontFamily="monospace">-beta·KL + logp(x|z)</text>
    </svg>
  )
}

const diagrams: Record<string, React.ReactNode> = {
  'dl-neuro-overview': null,
  'transformers-fmri': <TransformerDiagram />,
  'gnn-connectome':    <GraphDiagram />,
  'vae-eeg':           <VAEDiagram />,
  'lstm-bci':          null,
}

const categoryColors: Record<string, string> = {
  'Review':   'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'Research': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Methods':  'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
}

/* ─── Page ─── */
export const metadata = {
  title: 'Deep Learning — Alita Project',
  description: 'Scientific articles on deep learning applications in neuroscience.',
}

export default function DeepLearningPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero banner */}
        <section className="dot-grid relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, var(--vignette) 100%)' }}
          />
          <div className="container-wide relative z-10 py-24 md:py-32">
            <p className="section-label mb-4">Alita Project · Scientific Library</p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl text-balance">
              Deep Learning &amp;{' '}
              <span className="text-blue-400">Neuroscience</span>
            </h1>
            <p className="mt-5 text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
              In-depth articles, method papers, and technical reviews at the
              intersection of modern artificial intelligence and the biological brain.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Review', 'Research', 'Methods'].map(cat => (
                <span
                  key={cat}
                  className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${categoryColors[cat]}`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article list */}
        <section className="container-wide py-16 md:py-20 space-y-16">
          {articles.map((article) => (
            <article
              key={article.id}
              id={article.id}
              className="card p-8 md:p-10 scroll-mt-24"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
                <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>{article.date}</span>
                <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>·</span>
                <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>{article.readTime}</span>
                {article.doi && (
                  <>
                    <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>·</span>
                    <span className="font-mono text-xs text-blue-400/70">DOI: {article.doi}</span>
                  </>
                )}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2 text-slate-100">
                {article.title}
              </h2>
              <p className="text-sm mb-6" style={{ color: 'var(--fg-muted)' }}>{article.authors}</p>

              {/* Abstract */}
              <div
                className="rounded-xl p-5 mb-8 border-l-2"
                style={{ backgroundColor: 'rgba(37,99,235,0.06)', borderColor: 'rgba(96,165,250,0.3)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-blue-400/70">Abstract</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                  {article.abstract}
                </p>
              </div>

              {/* Diagram */}
              {diagrams[article.id] && (
                <div
                  className="rounded-xl p-5 mb-8 border flex items-center justify-center"
                  style={{ backgroundColor: 'var(--bg-overlay)', borderColor: 'var(--border)' }}
                >
                  {diagrams[article.id]}
                </div>
              )}

              {/* Sections */}
              <div className="space-y-7">
                {article.sections.map((sec, si) => (
                  <div key={si}>
                    <h3 className="text-base font-semibold mb-2 text-slate-200">
                      <span className="text-blue-400 mr-2 font-mono text-sm">{String(si + 1).padStart(2, '0')}.</span>
                      {sec.heading}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                {article.tags.map(tag => (
                  <Badge key={tag} variant="default">{tag}</Badge>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Related links */}
        <section className="container-wide pb-20">
          <div className="card p-8 text-center">
            <p className="section-label mb-3">Continue exploring</p>
            <h3 className="text-xl font-bold mb-4 text-slate-100">See our active research projects</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--fg-secondary)' }}>
              Browse ongoing studies applying these methods to real neural datasets.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/projects"
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
              >
                View Research Projects
              </a>
              <a
                href="/publications"
                className="px-5 py-2.5 rounded-lg border text-sm font-medium transition-colors text-slate-300 hover:text-slate-100"
                style={{ borderColor: 'var(--border)' }}
              >
                Publications
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
