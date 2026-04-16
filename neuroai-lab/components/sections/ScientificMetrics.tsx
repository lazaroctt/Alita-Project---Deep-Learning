// Static publication-by-year bar chart + lab metrics

const pubsByYear: { year: number; count: number; label: string }[] = [
  { year: 2019, count: 1, label: '1' },
  { year: 2020, count: 2, label: '2' },
  { year: 2021, count: 2, label: '2' },
  { year: 2022, count: 3, label: '3' },
  { year: 2023, count: 5, label: '5' },
  { year: 2024, count: 6, label: '6' },
]

const stats = [
  { value: '19+', label: 'Peer-reviewed publications' },
  { value: '6',   label: 'Open-source projects' },
  { value: '4',   label: 'Active datasets' },
  { value: '3',   label: 'International collaborations' },
]

const maxCount = Math.max(...pubsByYear.map((d) => d.count))
const chartH   = 80   // px logical height for bars
const chartW   = 400
const barW     = 36
const gap      = 24

export default function ScientificMetrics() {
  const totalW = pubsByYear.length * (barW + gap) - gap

  return (
    <section className="border-t border-white/[0.06] py-14">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Bar chart */}
          <div>
            <p className="section-label mb-5">Publication output</p>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <svg
                viewBox={`0 0 ${totalW + 20} ${chartH + 52}`}
                className="w-full overflow-visible"
                aria-label="Publications per year bar chart"
              >
                {/* Y gridlines */}
                {[0, 0.5, 1].map((frac) => {
                  const y = chartH - frac * chartH
                  return (
                    <g key={frac}>
                      <line
                        x1="0" y1={y} x2={totalW + 20} y2={y}
                        stroke="rgba(255,255,255,0.05)" strokeWidth="1"
                      />
                      <text x={totalW + 22} y={y + 4} fill="#334155" fontSize="8" textAnchor="start">
                        {Math.round(frac * maxCount)}
                      </text>
                    </g>
                  )
                })}

                {/* Bars */}
                {pubsByYear.map((d, i) => {
                  const x   = i * (barW + gap)
                  const barH = (d.count / maxCount) * chartH
                  const y   = chartH - barH

                  return (
                    <g key={d.year}>
                      {/* Background bar */}
                      <rect x={x} y={0} width={barW} height={chartH}
                        fill="rgba(255,255,255,0.02)" rx="3" />
                      {/* Value bar */}
                      <rect x={x} y={y} width={barW} height={barH}
                        fill={d.year === 2024 ? 'rgba(37,99,235,0.5)' : 'rgba(255,255,255,0.12)'}
                        rx="3"
                      />
                      {/* Count label */}
                      <text x={x + barW / 2} y={y - 5} textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">
                        {d.label}
                      </text>
                      {/* Year label */}
                      <text x={x + barW / 2} y={chartH + 18} textAnchor="middle" fill="#334155" fontSize="9">
                        {d.year}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Stats */}
          <div>
            <p className="section-label mb-5">Lab at a glance</p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                  <p className="text-3xl font-bold text-slate-100 tracking-tight">{value}</p>
                  <p className="mt-1 text-[12px] text-slate-600 leading-snug">{label}</p>
                </div>
              ))}
            </div>

            {/* Connectivity matrix mockup */}
            <div className="mt-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
              <p className="text-[11px] text-slate-600 mb-3 font-medium uppercase tracking-wider">
                Functional connectivity matrix (sample)
              </p>
              <svg viewBox="0 0 160 80" className="w-full" aria-label="Sample connectivity matrix">
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 16 }).map((_, col) => {
                    const val = Math.abs(Math.sin(row * 2.3 + col * 1.7) * Math.cos(row + col * 0.5))
                    const opacity = val * 0.7 + 0.05
                    const isAccent = val > 0.65
                    return (
                      <rect
                        key={`${row}-${col}`}
                        x={col * 10} y={row * 10}
                        width="9" height="9"
                        rx="1"
                        fill={isAccent ? `rgba(37,99,235,${opacity})` : `rgba(255,255,255,${opacity * 0.4})`}
                      />
                    )
                  })
                )}
              </svg>
              <p className="mt-2 text-[10px] text-slate-700">
                16 ROIs &times; 8 subjects &mdash; HCP resting-state fMRI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
