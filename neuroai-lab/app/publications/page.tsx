'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import { publications, Publication } from '@/data/publications'

type FilterType = Publication['type'] | 'all'

function PubCard({ pub }: { pub: Publication }) {
  return (
    <article className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.10] transition-colors">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <Badge variant={pub.type === 'preprint' ? 'accent' : 'default'}>
            {pub.type === 'article' ? 'Article' : pub.type === 'preprint' ? 'Preprint' : 'Book Chapter'}
          </Badge>
          <span className="text-[11px] text-slate-700">{pub.year}</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {pub.pdfUrl && (
            <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.06] hover:text-slate-200 transition-colors">
              PDF
            </a>
          )}
          {pub.doiUrl && (
            <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.06] hover:text-slate-200 transition-colors">
              DOI
            </a>
          )}
          {pub.codeUrl && (
            <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.06] hover:text-slate-200 transition-colors">
              Code
            </a>
          )}
        </div>
      </div>

      <h3 className="text-[14px] font-semibold text-slate-200 leading-snug mb-1">{pub.title}</h3>
      <p className="text-[13px] text-slate-600 mb-3">
        {pub.authors.join(', ')} &middot; <em className="not-italic text-slate-500">{pub.journal}</em>
      </p>

      {pub.abstract && (
        <p className="text-[13px] text-slate-600 leading-relaxed mb-4 line-clamp-2">{pub.abstract}</p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {pub.topics.map((t) => <Badge key={t} variant="muted">{t}</Badge>)}
      </div>
    </article>
  )
}

export default function PublicationsPage() {
  const [search,      setSearch]      = useState('')
  const [typeFilter,  setTypeFilter]  = useState<FilterType>('all')
  const [yearFilter,  setYearFilter]  = useState<number | 'all'>('all')
  const [topicFilter, setTopicFilter] = useState<string>('all')

  const years = useMemo(() => Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a), [publications])
  const allTopics = useMemo(() => Array.from(new Set(publications.flatMap((p) => p.topics))).sort(), [publications])

  const filtered = useMemo(() => publications.filter((p) => {
    const q = search.toLowerCase()
    return (
      (!q || p.title.toLowerCase().includes(q) || p.authors.some((a) => a.toLowerCase().includes(q)) || p.journal.toLowerCase().includes(q)) &&
      (typeFilter === 'all' || p.type === typeFilter) &&
      (yearFilter === 'all' || p.year === yearFilter) &&
      (topicFilter === 'all' || p.topics.includes(topicFilter))
    )
  }), [search, typeFilter, yearFilter, topicFilter])

  const inputClass = "bg-white/[0.03] border border-white/[0.07] rounded-lg px-3 py-2 text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-600/50 transition-colors"

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-wide">
          <div className="mb-10">
            <p className="section-label mb-2">Published research</p>
            <h1 className="text-4xl font-bold text-slate-100">Publications</h1>
            <p className="mt-3 text-slate-500 max-w-lg text-sm leading-relaxed">
              Peer-reviewed articles, preprints, and book chapters in deep learning and computational neuroscience.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <input type="search" placeholder="Search by title or author..." value={search}
              onChange={(e) => setSearch(e.target.value)} className={`flex-1 min-w-[200px] ${inputClass}`} />
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as FilterType)} className={inputClass}>
              <option value="all">All types</option>
              <option value="article">Article</option>
              <option value="preprint">Preprint</option>
              <option value="chapter">Book Chapter</option>
            </select>
            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))} className={inputClass}>
              <option value="all">All years</option>
              {years.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          {/* Topic filter */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {['all', ...allTopics].map((t) => (
              <button key={t} type="button" onClick={() => setTopicFilter(t)}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium border transition-colors ${
                  topicFilter === t
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-white/[0.03] border-white/[0.06] text-slate-600 hover:text-slate-300'
                }`}
              >
                {t === 'all' ? 'All topics' : t}
              </button>
            ))}
          </div>

          <p className="text-[12px] text-slate-700 mb-5">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>

          <div className="grid gap-4">
            {filtered.map((pub) => <PubCard key={pub.id} pub={pub} />)}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-slate-700 text-sm">No publications match the selected filters.</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
