import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Technical articles on deep learning and computational neuroscience.',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-wide">
          <div className="mb-10">
            <p className="section-label mb-2">Research notes</p>
            <h1 className="text-4xl font-bold text-slate-100">Notes</h1>
            <p className="mt-3 text-slate-500 max-w-lg text-sm leading-relaxed">
              Technical articles, tutorials, and reflections on AI and computational neuroscience.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-slate-700 py-16 text-center text-sm">No posts published yet.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="group block bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.10] hover:bg-white/[0.04] transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default">{post.category}</Badge>
                    <span className="text-[11px] text-slate-700">{post.readingTime}</span>
                  </div>
                  <h2 className="text-[15px] font-semibold text-slate-200 leading-snug mb-2 group-hover:text-white transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-700">
                    <span>{post.author}</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
