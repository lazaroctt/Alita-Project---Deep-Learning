import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDir = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  tags: string[]
  readingTime: string
  author: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(postsDir, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const rt = readingTime(content)

      return {
        slug,
        title: data.title ?? 'Sem título',
        date: data.date ?? new Date().toISOString(),
        excerpt: data.excerpt ?? '',
        category: data.category ?? 'Geral',
        tags: data.tags ?? [],
        readingTime: rt.text,
        author: data.author ?? 'Lazaro C. T.',
      } satisfies PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    title: data.title ?? 'Sem título',
    date: data.date ?? new Date().toISOString(),
    excerpt: data.excerpt ?? '',
    category: data.category ?? 'Geral',
    tags: data.tags ?? [],
    readingTime: rt.text,
    author: data.author ?? 'Lazaro C. T.',
    content,
  }
}
