'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { projects, Project } from '@/data/projects'

type StatusFilter = Project['status'] | 'all'

const statusConfig: Record<Project['status'], { label: string; dotColor: string; textColor: string }> = {
  active:    { label: 'Active',    dotColor: 'bg-blue-500',   textColor: 'text-blue-400' },
  completed: { label: 'Completed', dotColor: 'bg-slate-500',  textColor: 'text-slate-500' },
  paused:    { label: 'Paused',    dotColor: 'bg-slate-600',  textColor: 'text-slate-600' },
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ')[0]?.slice(0, 2).toUpperCase() ?? ''
  return (
    <div className="w-7 h-7 rounded-md bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[10px] font-mono font-bold text-slate-500" title={name}>
      {initials}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status]
  return (
    <Card as="article" className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-semibold text-slate-200 leading-snug flex-1">{project.title}</h3>
        <div className={`flex items-center gap-1.5 shrink-0 text-[11px] font-medium ${status.textColor}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dotColor}`} />
          {status.label}
        </div>
      </div>

      <p className="text-[13px] text-slate-500 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => <Badge key={t} variant="muted">{t}</Badge>)}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {project.collaborators.slice(0, 3).map((c) => <Avatar key={c} name={c} />)}
            {project.collaborators.length > 3 && (
              <div className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[10px] text-slate-600">
                +{project.collaborators.length - 3}
              </div>
            )}
          </div>
          <span className="text-[11px] text-slate-700">
            {project.startYear}{project.endYear ? `\u2013${project.endYear}` : '\u2013present'}
          </span>
        </div>
        {project.githubUrl && (
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-[12px] text-slate-600 hover:text-slate-300 transition-colors">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </Link>
        )}
      </div>
    </Card>
  )
}

export default function ProjectsPage() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const filtered = useMemo(
    () => statusFilter === 'all' ? projects : projects.filter((p) => p.status === statusFilter),
    [statusFilter]
  )
  const counts = useMemo(() => ({
    all:       projects.length,
    active:    projects.filter((p) => p.status === 'active').length,
    completed: projects.filter((p) => p.status === 'completed').length,
    paused:    projects.filter((p) => p.status === 'paused').length,
  }), [])

  const filters: { value: StatusFilter; label: string }[] = [
    { value: 'all',       label: `All (${counts.all})` },
    { value: 'active',    label: `Active (${counts.active})` },
    { value: 'completed', label: `Completed (${counts.completed})` },
    { value: 'paused',    label: `Paused (${counts.paused})` },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-wide">
          <div className="mb-10">
            <p className="section-label mb-2">Open source & research</p>
            <h1 className="text-4xl font-bold text-slate-100">Research Projects</h1>
            <p className="mt-3 text-slate-500 max-w-lg text-sm leading-relaxed">
              Open-source frameworks and research initiatives applying AI to neural data.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {filters.map(({ value, label }) => (
              <button key={value} type="button" onClick={() => setStatusFilter(value)}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-medium border transition-colors ${
                  statusFilter === value
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-white/[0.03] border-white/[0.07] text-slate-600 hover:text-slate-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
