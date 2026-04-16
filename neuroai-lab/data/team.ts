export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  affiliations: string[]
  email?: string
  scholarUrl?: string
  orcidUrl?: string
  githubUrl?: string
  researchGateUrl?: string
  imageUrl?: string
  skills: string[]
}

export const team: TeamMember[] = [
  {
    id: 'team-001',
    name: 'Lázaro Romão',
    role: 'Principal Investigator',
    bio: 'Researcher at the intersection of deep learning and computational neuroscience. Focuses on unsupervised representation learning from neuroimaging and electrophysiology data, with applications in clinical brain disorders and brain–computer interfaces.',
    affiliations: [
      'Alita Project',
      'Department of Neuroscience, University of Example',
      'Brain Imaging Center',
    ],
    email: 'lazaro@alita-project.org',
    scholarUrl: 'https://scholar.google.com/citations?user=example',
    orcidUrl: 'https://orcid.org/0000-0000-0000-0000',
    githubUrl: 'https://github.com/lazaroctt',
    researchGateUrl: 'https://www.researchgate.net/profile/example',
    skills: [
      'Python', 'PyTorch', 'TensorFlow', 'JAX',
      'fMRI Analysis', 'EEG/MEG', 'Graph Neural Networks',
      'Transformers', 'Variational Autoencoders', 'Explainable AI',
    ],
  },
  {
    id: 'team-002',
    name: 'Ribeiro, S. O.',
    role: 'PhD Student',
    bio: 'Investigating transformer architectures for real-time EEG-based motor imagery decoding. Background in electrical engineering and signal processing.',
    affiliations: [
      'Alita Project',
      'Graduate Program in Biomedical Engineering',
    ],
    githubUrl: 'https://github.com/sribeiro-example',
    skills: ['EEG', 'PyTorch', 'Signal Processing', 'BCI', 'MATLAB'],
  },
  {
    id: 'team-003',
    name: 'Costa, D. R.',
    role: 'Research Engineer',
    bio: "Maintains the lab's open-source infrastructure, data pipelines, and HPC cluster workflows. Specialises in BIDS compliance and reproducible research.",
    affiliations: ['Alita Project'],
    githubUrl: 'https://github.com/drcosta-example',
    skills: ['Python', 'Docker', 'SLURM', 'BIDS', 'Nextflow', 'PostgreSQL'],
  },
]
