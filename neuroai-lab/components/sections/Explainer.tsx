export default function Explainer() {
  return (
    <section className="section-padding border-t border-white/[0.06]">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Text */}
          <div>
            <p className="section-label mb-4">Background</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight mb-8">
              Deep learning<br />meets neuroscience
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-[15px] font-semibold text-slate-200 mb-2">
                  The brain as inspiration
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Artificial neural networks are mathematical abstractions of the biological neuron.
                  Each node receives weighted inputs, applies a non-linear activation, and propagates
                  a signal forward &mdash; analogous to the action potential along an axon. This
                  biological inspiration allowed modern models to learn hierarchical feature
                  representations directly from data, without hand-crafted feature engineering.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-slate-200 mb-2">
                  Autoencoders and latent representations
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Autoencoders learn to compress data into a low-dimensional latent space and
                  reconstruct it with minimal error. Applied to fMRI volumes and EEG, they surface
                  structures of resting-state networks that linear analysis would miss. The latent
                  space acts as a compressed map of brain activity &mdash; ideal for comparing
                  cognitive states, identifying biomarkers, and generating synthetic neural data.
                </p>
              </div>
            </div>
          </div>

          {/* SVG: biological neuron vs artificial neuron */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 lg:p-8">
            <p className="text-[11px] text-slate-600 text-center uppercase tracking-wider font-medium mb-6">
              Biological neuron vs. artificial neuron
            </p>
            <svg
              viewBox="0 0 480 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              aria-label="Comparison of biological and artificial neuron"
            >
              {/* ── Left: Biological ── */}
              <text x="110" y="22" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600" letterSpacing="2">BIOLOGICAL</text>

              {/* Dendrites */}
              <line x1="55" y1="75"  x2="100" y2="118" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="72" y1="55"  x2="104" y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="40" y1="112" x2="94"  y2="128" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="52"  cy="75"  r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="none" />
              <circle cx="69"  cy="53"  r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="none" />
              <circle cx="37"  cy="115" r="3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="none" />
              <text x="52" y="168" textAnchor="middle" fill="#334155" fontSize="9">Dendrites</text>

              {/* Soma */}
              <circle cx="115" cy="128" r="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
              <circle cx="115" cy="128" r="7"  stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="none" />
              <text x="115" y="132" textAnchor="middle" fill="#475569" fontSize="9">Soma</text>

              {/* Axon */}
              <line x1="139" y1="128" x2="190" y2="128" stroke="rgba(37,99,235,0.35)" strokeWidth="1.5" strokeLinecap="round" />
              <text x="164" y="146" textAnchor="middle" fill="#334155" fontSize="9">Axon</text>

              {/* Terminal */}
              <circle cx="194" cy="128" r="4" stroke="rgba(37,99,235,0.5)" strokeWidth="0.8" fill="none" />
              <line x1="198" y1="123" x2="216" y2="103" stroke="rgba(37,99,235,0.25)" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="198" y1="128" x2="216" y2="128" stroke="rgba(37,99,235,0.25)" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="198" y1="133" x2="216" y2="153" stroke="rgba(37,99,235,0.25)" strokeWidth="1" strokeDasharray="3 2" />
              <text x="162" y="182" textAnchor="middle" fill="#334155" fontSize="9">Synaptic terminals</text>

              {/* Divider */}
              <line x1="240" y1="36" x2="240" y2="290" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5 4" />

              {/* ── Right: Artificial ── */}
              <text x="370" y="22" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600" letterSpacing="2">ARTIFICIAL</text>

              {/* Input nodes */}
              {[75, 115, 155, 195].map((y, i) => (
                <g key={i}>
                  <circle cx="275" cy={y} r="5" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="none" />
                  <text x="263" y={y + 4} textAnchor="middle" fill="#334155" fontSize="9">x{i + 1}</text>
                  <line x1="280" y1={y} x2="332" y2="143" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
                  <text x="300" y={y - 5} textAnchor="middle" fill="#1e293b" fontSize="8">w{i + 1}</text>
                </g>
              ))}

              {/* Body */}
              <circle cx="355" cy="143" r="28" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
              <text x="355" y="139" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="500">&#x3A3;</text>
              <text x="355" y="153" textAnchor="middle" fill="#334155" fontSize="9">f(x)</text>

              {/* Output */}
              <line x1="383" y1="143" x2="428" y2="143" stroke="rgba(37,99,235,0.4)" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="432" cy="143" r="4" stroke="rgba(37,99,235,0.5)" strokeWidth="0.8" fill="none" />
              <text x="445" y="147" fill="#475569" fontSize="10">y&#x302;</text>
              <text x="406" y="162" textAnchor="middle" fill="#334155" fontSize="9">output</text>

              {/* Footnotes */}
              <text x="115" y="305" textAnchor="middle" fill="#1e293b" fontSize="9">Action potential &rarr; firing</text>
              <text x="370" y="305" textAnchor="middle" fill="#1e293b" fontSize="9">Weighted sum + non-linearity</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
