export interface Publication {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  type: 'article' | 'preprint' | 'chapter'
  topics: string[]
  abstract?: string
  pdfUrl?: string
  doiUrl?: string
  codeUrl?: string
}

export const publications: Publication[] = [
  {
    id: 'pub-001',
    title: 'Deep Autoencoders for Latent Representation of fMRI Resting-State Networks',
    authors: ['Lazaro C. T.', 'Silva, R. M.', 'Fernandes, A. P.'],
    journal: 'NeuroImage',
    year: 2024,
    type: 'article',
    topics: ['fMRI', 'Autoencoder', 'Resting-State', 'Deep Learning'],
    abstract:
      'We propose a convolutional autoencoder architecture for unsupervised extraction of resting-state network signatures from fMRI data, achieving state-of-the-art reconstruction fidelity while preserving clinically relevant spatial patterns.',
    doiUrl: 'https://doi.org/10.1016/j.neuroimage.2024.001',
    codeUrl: 'https://github.com/neuroai-lab/fmri-autoencoder',
  },
  {
    id: 'pub-002',
    title: 'Graph Neural Networks for Connectome-Based Disorder Classification',
    authors: ['Lazaro C. T.', 'Costa, D. R.', 'Martins, L. F.', 'Alves, P. J.'],
    journal: 'Journal of Neural Engineering',
    year: 2024,
    type: 'article',
    topics: ['GNN', 'Connectome', 'Classification', 'Psychiatric Disorders'],
    abstract:
      'A graph neural network framework leveraging structural and functional connectivity matrices for multi-class psychiatric disorder identification using the HCP dataset.',
    doiUrl: 'https://doi.org/10.1088/1741-2552/2024-gnn',
    pdfUrl: '/papers/gnn-connectome-2024.pdf',
    codeUrl: 'https://github.com/neuroai-lab/connectome-gnn',
  },
  {
    id: 'pub-003',
    title: 'Transformer-Based Decoding of Motor Imagery from High-Density EEG',
    authors: ['Lazaro C. T.', 'Ribeiro, S. O.'],
    journal: 'arXiv preprint',
    year: 2024,
    type: 'preprint',
    topics: ['EEG', 'Transformer', 'Motor Imagery', 'BCI'],
    abstract:
      'We introduce NeuroFormer, a vision-transformer variant adapted for multichannel EEG temporal sequences, outperforming LSTM baselines by 8.3% on motor-imagery classification.',
    doiUrl: 'https://arxiv.org/abs/2024.12345',
    codeUrl: 'https://github.com/neuroai-lab/neuroformer',
  },
  {
    id: 'pub-004',
    title: 'Variational Inference for Neural Population Dynamics in Calcium Imaging',
    authors: ['Lazaro C. T.', 'Lima, M. C.', 'Santos, K. A.'],
    journal: 'PLOS Computational Biology',
    year: 2023,
    type: 'article',
    topics: ['VAE', 'Calcium Imaging', 'Population Coding', 'Latent Dynamics'],
    abstract:
      'A variational autoencoder formulation that disentangles single-neuron noise from population-level structure in two-photon calcium imaging recordings.',
    doiUrl: 'https://doi.org/10.1371/journal.pcbi.2023.001',
    pdfUrl: '/papers/vae-calcium-2023.pdf',
  },
  {
    id: 'pub-005',
    title: 'Interpretable CNNs for Lesion Detection in T1-Weighted MRI',
    authors: ['Lazaro C. T.', 'Gomes, F. P.', 'Carvalho, T. N.'],
    journal: 'Medical Image Analysis',
    year: 2023,
    type: 'article',
    topics: ['CNN', 'MRI', 'Lesion Detection', 'Explainable AI'],
    abstract:
      'Combining Grad-CAM saliency maps with 3D convolutional networks to produce radiologist-interpretable attention overlays for white-matter lesion localization.',
    doiUrl: 'https://doi.org/10.1016/j.media.2023.002',
    pdfUrl: '/papers/cnn-mri-lesion-2023.pdf',
    codeUrl: 'https://github.com/neuroai-lab/mri-lesion-cnn',
  },
  {
    id: 'pub-006',
    title: 'Deep Learning in Computational Neuroscience: Methods and Applications',
    authors: ['Lazaro C. T.', 'Pereira, A. B.'],
    journal: 'Handbook of Computational Neuroscience (Springer)',
    year: 2023,
    type: 'chapter',
    topics: ['Deep Learning', 'Review', 'Computational Neuroscience', 'Methods'],
    abstract:
      'A comprehensive survey chapter covering supervised, unsupervised, and self-supervised deep learning paradigms applied to neural data analysis, with a focus on reproducibility and open-science practices.',
    doiUrl: 'https://doi.org/10.1007/978-3-031-handbook-ch12',
  },
]
