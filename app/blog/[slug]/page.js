import Nav from '@/components/Nav'
import Toc from '@/components/Toc'
import Link from 'next/link'
import { getAllSlugs, getPost } from '@/lib/posts'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  return {
    title: `${post.title} | mirai.host`,
    description: post.summary || undefined,
  }
}

function fmt(iso) {
  if (!iso || new Date(iso).getFullYear() < 2001) return ''
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <>
      <Nav />
      <main className="px-6 md:px-10 lg:px-16 pt-28 pb-24 max-w-[72rem] mx-auto">

        {/* Back */}
        <Link
          href="/blog"
          className="font-mono text-xs text-muted hover:text-accent transition-colors inline-flex items-center gap-1.5 mb-10 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          back to blog
        </Link>

        {/* Header */}
        <header className="mb-10 pb-8 border-b border-border">
          {post.categories.length > 0 && (
            <div className="flex gap-3 mb-4">
              {post.categories.map(c => (
                <span key={c} className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent/80">
                  {c}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display font-bold text-[1.75rem] md:text-[2rem] text-text leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            {fmt(post.date) && (
              <span className="font-mono text-[11px] text-dim">{fmt(post.date)}</span>
            )}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map(t => (
                  <span
                    key={t}
                    className="font-mono text-[9px] uppercase tracking-wider text-dim border border-border px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Table of Contents — only rendered when showtoc: true */}
        {post.showToc && post.toc.length > 0 && (
          <Toc items={post.toc} defaultOpen={post.tocOpen} />
        )}

        {/* Content */}
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer nav */}
        <div className="mt-14 pt-8 border-t border-border flex items-center justify-between">
          <Link href="/blog" className="font-mono text-xs text-muted hover:text-accent transition-colors">
            ← all posts
          </Link>
          <Link href="/" className="font-mono text-xs text-muted hover:text-accent transition-colors">
            ~/mirai
          </Link>
        </div>
      </main>
    </>
  )
}
