import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-wide max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] text-slate-700 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-400 transition-colors">Notes</Link>
            <span>/</span>
            <span className="text-slate-500 truncate">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="default">{post.category}</Badge>
              <span className="text-[11px] text-slate-700">{post.readingTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight mb-4">{post.title}</h1>
            <p className="text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-3 text-[12px] text-slate-700">
              <span>{post.author}</span>
              <span>&middot;</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((t) => <Badge key={t} variant="muted">{t}</Badge>)}
              </div>
            )}
          </header>

          <hr className="border-white/[0.06] mb-10" />

          <article className="prose prose-invert prose-sm max-w-none
            prose-headings:font-bold prose-headings:text-slate-100 prose-headings:tracking-tight
            prose-p:text-slate-400 prose-p:leading-relaxed
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-200
            prose-code:text-blue-300 prose-code:bg-white/[0.05] prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:text-[13px]
            prose-pre:bg-[#0b0f19] prose-pre:border prose-pre:border-white/[0.07] prose-pre:rounded-2xl
            prose-blockquote:border-blue-600/40 prose-blockquote:text-slate-500
            prose-table:text-[13px] prose-th:text-slate-300 prose-td:text-slate-500
            prose-hr:border-white/[0.06]
            prose-img:rounded-xl
          ">
            <MDXRemote source={post.content} />
          </article>

          <hr className="border-white/[0.06] mt-12 mb-8" />

          <Link href="/blog"
            className="inline-flex items-center gap-2 text-[13px] text-slate-600 hover:text-slate-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Notes
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
