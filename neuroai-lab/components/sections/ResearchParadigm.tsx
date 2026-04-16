export default function ResearchParadigm() {
  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-wide">

        {/* Section label */}
        <p className="section-label mb-4">Research Paradigm</p>

        {/* Two-column thesis */}
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-16">
          {/* H1 */}
          <div className="bg-[#06080e] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-full border border-white/[0.12] flex items-center justify-center shrink-0">
                <span className="text-[11px] font-semibold text-slate-400">01</span>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-600">
                Brain &rarr; AI
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 leading-snug mb-4">
              Studying how the brain solves computational challenges teaches us to build better AI algorithms.
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Biological neural circuits have solved problems of perception, memory, and decision-making
              over millions of years of evolution. By reverse-engineering these solutions &mdash; through
              recording, modelling, and perturbation &mdash; we extract architectural and algorithmic
              principles that translate into more efficient and robust machine learning models.
            </p>
          </div>

          {/* H2 */}
          <div className="bg-[#0b0f19] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-full border border-blue-600/30 flex items-center justify-center shrink-0">
                <span className="text-[11px] font-semibold text-blue-400">02</span>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-600">
                AI &rarr; Brain
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 leading-snug mb-4">
              Improving AI algorithms reveals better models of how the brain actually works.
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Optimised deep networks, trained on sensory data under biologically plausible constraints,
              generate testable predictions about neural activity patterns. When a model accurately
              predicts cortical responses, it becomes a falsifiable hypothesis &mdash; a tool for
              neuroscience as much as for engineering.
            </p>
          </div>
        </div>

        {/* Bidirectional diagram */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-3xl">
            <svg
              viewBox="0 0 720 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              aria-label="Bidirectional brain-AI research cycle"
            >
              {/* Brain node */}
              <g>
                <rect x="20" y="60" width="140" height="80" rx="8" fill="#0b0f19" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                {/* Minimal brain icon */}
                <path
                  d="M65 90 Q70 78 80 80 Q88 75 95 82 Q103 74 110 80 Q120 77 120 90 Q125 102 115 108 Q110 115 100 112 Q92 118 80 112 Q68 116 63 108 Q55 102 65 90Z"
                  stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none"
                />
                <path d="M90 80 Q90 100 90 112" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                <path d="M70 94 Q80 96 90 94 Q100 92 110 94" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                <text x="90" y="158" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="500">Brain</text>
                <text x="90" y="170" textAnchor="middle" fill="#334155" fontSize="9">biological system</text>
              </g>

              {/* Right node — AI */}
              <g>
                <rect x="560" y="60" width="140" height="80" rx="8" fill="#0b0f19" stroke="rgba(37,99,235,0.15)" strokeWidth="1" />
                {/* Minimal network icon */}
                {[0, 1, 2].map((i) => (
                  <g key={i}>
                    <circle cx={592} cy={85 + i * 15} r="3.5" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                    <circle cx={660} cy={85 + i * 15} r="3.5" fill="none" stroke="rgba(37,99,235,0.4)" strokeWidth="0.8" />
                    {[0, 1, 2].map((j) => (
                      <line key={j}
                        x1={596} y1={85 + i * 15} x2={656} y2={85 + j * 15}
                        stroke="rgba(255,255,255,0.05)" strokeWidth="0.6"
                      />
                    ))}
                  </g>
                ))}
                <circle cx={626} cy={92} r="3.5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                <circle cx={626} cy={108} r="3.5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                <text x="630" y="158" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="500">Artificial Intelligence</text>
                <text x="630" y="170" textAnchor="middle" fill="#334155" fontSize="9">computational model</text>
              </g>

              {/* Arrow top: Brain -> AI */}
              <g>
                <path
                  d="M 162 88 Q 360 55 558 88"
                  stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" strokeDasharray="5 3"
                />
                <polygon points="554,84 562,88 554,92" fill="rgba(255,255,255,0.18)" />
                <rect x="278" y="42" width="164" height="22" rx="4" fill="#06080e" />
                <text x="360" y="57" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="500">
                  Inspires architectures &amp; algorithms
                </text>
              </g>

              {/* Arrow bottom: AI -> Brain */}
              <g>
                <path
                  d="M 558 112 Q 360 145 162 112"
                  stroke="rgba(37,99,235,0.35)" strokeWidth="1" fill="none" strokeDasharray="5 3"
                />
                <polygon points="166,108 158,112 166,116" fill="rgba(37,99,235,0.35)" />
                <rect x="278" y="136" width="164" height="22" rx="4" fill="#06080e" />
                <text x="360" y="151" textAnchor="middle" fill="#3b5998" fontSize="10" fontWeight="500">
                  Generates testable predictions
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Research methods grid */}
        <div>
          <p className="section-label mb-6 text-center">Methods &amp; Approaches</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              {
                title: 'Computational\nModeling',
                desc: 'Mechanistic and normative models of neural circuits',
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
                    <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
                    <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
                    <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
                    <rect x="18" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="14" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="1" />
                    <line x1="9" y1="14" x2="9" y2="18" stroke="currentColor" strokeWidth="1" />
                    <line x1="23" y1="14" x2="23" y2="18" stroke="currentColor" strokeWidth="1" />
                    <line x1="14" y1="23" x2="18" y2="23" stroke="currentColor" strokeWidth="1" />
                  </svg>
                ),
              },
              {
                title: 'High-Throughput\nNeurophysiology',
                desc: 'Large-scale multi-electrode recordings in vivo',
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
                    <path d="M4 20 Q7 12 10 20 Q13 28 16 16 Q19 4 22 16 Q25 28 28 20"
                      stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                    <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1" />
                  </svg>
                ),
              },
              {
                title: 'Functional\nNeuroimaging',
                desc: 'fMRI and EEG to map large-scale brain dynamics',
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
                    <circle cx="16" cy="14" r="9" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M16 5 Q16 14 16 23" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                    <path d="M7 14 Q16 14 25 14" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                    <path d="M9 8 Q16 14 23 20" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                    <path d="M23 8 Q16 14 9 20" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                    <line x1="16" y1="23" x2="16" y2="28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="10" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: 'Behavioral\nPsychophysics',
                desc: 'Quantifying perception and decision under controlled stimuli',
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
                    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1" />
                    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
                    <line x1="16" y1="6" x2="16" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <line x1="26" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <line x1="16" y1="26" x2="16" y2="28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <line x1="6" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: 'Large-scale\nData Analysis',
                desc: 'Deep learning pipelines on open neuroimaging datasets',
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
                    <rect x="4" y="22" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <rect x="10" y="16" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <rect x="16" y="10" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <rect x="22" y="4" width="4" height="24" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 22 L12 16 L18 10 L24 4" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
                  </svg>
                ),
              },
            ].map((m) => (
              <div
                key={m.title}
                className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 flex flex-col gap-3"
              >
                <div className="text-slate-500">{m.icon}</div>
                <div>
                  <p className="text-[12px] font-semibold text-slate-300 leading-snug whitespace-pre-line">{m.title}</p>
                  <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
