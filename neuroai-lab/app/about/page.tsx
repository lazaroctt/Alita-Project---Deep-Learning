import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import { team } from '@/data/team'
// team[0] is the PI — no other members displayed

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the Alita Project and our research mission.',
}

const academicLinks = [
  {
    label: 'Google Scholar',
    href:  'https://scholar.google.com/citations?user=example',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5h3.5V24h4.75v-8.5h7.5V24h4.75V9.5H24Z" />
      </svg>
    ),
  },
  {
    label: 'ORCID',
    href:  'https://orcid.org/0000-0000-0000-0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.282 5.978a1.152 1.152 0 1 1 0 2.304 1.152 1.152 0 0 1 0-2.304zm-1.152 4.04h2.304v9.994H7.13V10.018zm4.52 0h4.29c4.083 0 5.745 2.927 5.745 4.997 0 2.56-1.993 4.997-5.745 4.997h-4.29V10.018zm2.304 2.07v5.858h1.776c2.3 0 3.63-1.327 3.63-2.929 0-1.602-1.33-2.929-3.63-2.929h-1.776z" />
      </svg>
    ),
  },
  {
    label: 'ResearchGate',
    href:  'https://www.researchgate.net/profile/example',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M19.586 0H4.414C1.978 0 0 1.978 0 4.414v15.172C0 22.022 1.978 24 4.414 24h15.172C22.022 24 24 22.022 24 19.586V4.414C24 1.978 22.022 0 19.586 0zM11.485 6.625c.63 0 1.168.145 1.614.436.448.29.77.71.97 1.26h-1.16c-.14-.27-.327-.474-.563-.61a1.62 1.62 0 0 0-.837-.208c-.497 0-.9.18-1.21.54-.307.36-.46.862-.46 1.507 0 .65.153 1.157.46 1.522.31.364.714.546 1.21.546.3 0 .565-.065.794-.196.23-.13.415-.327.553-.59h1.16c-.194.558-.516.98-.967 1.265-.452.286-.99.428-1.616.428-.5 0-.947-.108-1.342-.324a2.34 2.34 0 0 1-.913-.924c-.217-.4-.325-.866-.325-1.398 0-.53.108-.996.325-1.397.217-.4.526-.71.927-.927.4-.217.85-.325 1.35-.325zm5.574.08h1.08v4.572h2.577v.944H17.06V6.704zm-8.49 5.35v1.085H5.854v4.43h1.146v-4.43h1.186v-1.085H5.854v-.938c0-.447.107-.676.322-.676h2.01v-1.086H5.854c-.69 0-1.034.478-1.034 1.434v1.266H4.18v1.085h.64v4.43h1.036v-4.43h2.713z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href:  'https://github.com/lazaroctt',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

const pi = team[0]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="container-wide max-w-4xl">

          {/* PI section */}
          <div className="flex flex-col md:flex-row gap-10 items-start mb-20">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl font-bold text-slate-400 font-mono">
                {pi?.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
              </div>
            </div>

            <div className="flex-1">
              <p className="section-label mb-2">Principal Investigator</p>
              <h1 className="text-3xl font-bold text-slate-100 mb-0.5">{pi?.name}</h1>
              <p className="text-blue-400 text-sm font-medium mb-5">{pi?.role}</p>

              <p className="text-slate-500 leading-relaxed mb-4 text-[15px]">{pi?.bio}</p>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                The Alita Project investigates the bidirectional relationship between artificial and
                biological intelligence. By studying how the brain solves computationally hard problems,
                we extract principles that improve AI architectures. Conversely, optimised deep networks
                generate testable predictions about neural activity, advancing our understanding of
                brain function. Our work bridges computational modelling, high-throughput
                neurophysiology, functional neuroimaging, behavioural psychophysics, and large-scale
                data analysis.
              </p>

              {/* Academic links */}
              <div className="flex items-center gap-2 mt-6">
                {academicLinks.map(({ label, href, icon }) => (
                  <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.07] text-slate-600 hover:text-slate-300 hover:border-white/[0.12] transition-all"
                    aria-label={label}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Research mission */}
          <section className="mb-20">
            <p className="section-label mb-5">Research Mission</p>
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
              <div className="bg-[#06080e] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-3">
                  Brain &rarr; AI
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Studying how the brain solves computational challenges &mdash; perception,
                  memory consolidation, sensorimotor integration &mdash; teaches us to build
                  better AI algorithms. Biological circuits are efficient, robust, and adaptive
                  in ways current artificial systems are not. Reverse-engineering those properties
                  through computational modelling and in vivo recordings is a central aim of the lab.
                </p>
              </div>
              <div className="bg-[#0b0f19] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-900 mb-3">
                  AI &rarr; Brain
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Improving AI algorithms reveals better models of how the brain actually
                  works. When a deep network trained on naturalistic stimuli predicts cortical
                  responses better than classical models, that alignment is scientifically
                  informative: it constrains theories of neural computation and generates
                  hypotheses that can be tested with experiments.
                </p>
              </div>
            </div>
          </section>

          {/* Methods */}
          <section className="mb-20">
            <p className="section-label mb-5">Methodological Approaches</p>
            <div className="space-y-3">
              {[
                {
                  method: 'Computational Modeling',
                  detail: 'Mechanistic and normative models of neural circuits, including recurrent networks, attractor dynamics, and predictive coding frameworks.',
                },
                {
                  method: 'High-Throughput Neurophysiology',
                  detail: 'Large-scale multi-electrode array recordings in awake, behaving animals to characterise population-level coding at millisecond resolution.',
                },
                {
                  method: 'Functional Neuroimaging',
                  detail: 'Analysis of fMRI and EEG datasets from open repositories (HCP, ABIDE, ADHD-200) using BIDS-compliant pipelines and deep learning decoders.',
                },
                {
                  method: 'Behavioral Psychophysics',
                  detail: 'Controlled psychophysical experiments quantifying human and animal perception and decision-making under parametric stimulus manipulations.',
                },
                {
                  method: 'Large-scale Data Analysis',
                  detail: 'Scalable deep learning pipelines running on HPC clusters, processing terabyte-scale neural datasets with reproducibility standards (DVC, Snakemake).',
                },
              ].map(({ method, detail }) => (
                <div key={method} className="flex gap-4 items-start py-4 border-b border-white/[0.05] last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600/60 mt-2 shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-slate-200">{method}</p>
                    <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliations */}
          <section className="mb-20">
            <p className="section-label mb-5">Institutional Affiliations</p>
            <ul className="space-y-2">
              {pi?.affiliations.map((aff) => (
                <li key={aff} className="flex items-center gap-3 text-slate-400 text-sm">
                  <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                  {aff}
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-20">
            <p className="section-label mb-5">Technical Skills</p>
            <div className="flex flex-wrap gap-2">
              {pi?.skills.map((s) => (
                <Badge key={s} variant="default">{s}</Badge>
              ))}
            </div>
          </section>


        </div>
      </main>
      <Footer />
    </>
  )
}
