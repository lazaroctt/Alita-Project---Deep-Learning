export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  status: 'active' | 'completed' | 'paused'
  tags: string[]
  collaborators: string[]
  githubUrl?: string
  demoUrl?: string
  startYear: number
  endYear?: number
  imageUrl?: string
}

export const projects: Project[] = [
  {
    id: 'proj-001',
    title: 'NeuroFormer — EEG Transformer BCI',
    description:
      'A Vision-Transformer architecture adapted for multichannel EEG decoding of motor-imagery commands in real-time brain–computer interfaces.',
    longDescription:
      'NeuroFormer is an open-source framework that applies the self-attention mechanism to temporal EEG sequences. It supports 64-channel and high-density 256-channel montages and can be fine-tuned on individual participant data in under two minutes on a single GPU.',
    status: 'active',
    tags: ['Transformer', 'EEG', 'BCI', 'PyTorch', 'Real-time'],
    collaborators: ['Lazaro C. T.', 'Ribeiro, S. O.', 'Lima, M. C.'],
    githubUrl: 'https://github.com/neuroai-lab/neuroformer',
    startYear: 2023,
  },
  {
    id: 'proj-002',
    title: 'ConnectomeGNN — Graph Learning on Functional Connectivity',
    description:
      'Graph neural network pipeline for classifying psychiatric and neurological disorders using resting-state fMRI functional connectivity matrices as graph edges.',
    longDescription:
      'ConnectomeGNN wraps the HCP, ABIDE, and ADHD-200 datasets into a unified graph format, supporting both static and dynamic connectivity windows. The model achieves 84% accuracy on hold-out ABIDE autism classification.',
    status: 'active',
    tags: ['GNN', 'fMRI', 'Connectome', 'Psychiatry', 'PyTorch Geometric'],
    collaborators: ['Lazaro C. T.', 'Costa, D. R.', 'Martins, L. F.'],
    githubUrl: 'https://github.com/neuroai-lab/connectome-gnn',
    startYear: 2023,
  },
  {
    id: 'proj-003',
    title: 'LatentBrain — fMRI Autoencoder Toolkit',
    description:
      'Convolutional and variational autoencoder toolkit for learning compact latent representations of whole-brain fMRI volumes.',
    longDescription:
      'LatentBrain provides modular encoder and decoder blocks for 3D fMRI volumes, with utilities for latent-space interpolation, disentanglement metrics, and downstream linear probing. Compatible with BIDS-formatted datasets.',
    status: 'completed',
    tags: ['Autoencoder', 'VAE', 'fMRI', 'Latent Space', 'BIDS'],
    collaborators: ['Lazaro C. T.', 'Silva, R. M.', 'Fernandes, A. P.'],
    githubUrl: 'https://github.com/neuroai-lab/fmri-autoencoder',
    startYear: 2022,
    endYear: 2024,
  },
  {
    id: 'proj-004',
    title: 'NeuroXAI — Explainability for Neural Data Models',
    description:
      'Explainability and interpretability toolkit combining Grad-CAM, SHAP, and integrated gradients for deep learning models trained on neural imaging data.',
    longDescription:
      'NeuroXAI generates voxel-wise and electrode-wise saliency maps that can be overlaid on MNI-space brain atlases. It integrates with LatentBrain and ConnectomeGNN and exports reports in HTML/PDF format.',
    status: 'paused',
    tags: ['XAI', 'Grad-CAM', 'SHAP', 'MRI', 'Interpretability'],
    collaborators: ['Lazaro C. T.', 'Gomes, F. P.'],
    githubUrl: 'https://github.com/neuroai-lab/neuro-xai',
    startYear: 2023,
  },
]
