'use client'

import { useState } from 'react'
import Link from 'next/link'

const PER_PAGE = 10

function fmt(iso) {
  if (!iso || new Date(iso).getFullYear() < 2001) return ''
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

export default function BlogList({ posts }) {
  const [page, setPage] = useState(1)

  if (!posts || posts.length === 0) {
    return <p className="text-muted font-mono text-sm">No posts yet.</p>
  }

  const totalPages = Math.ceil(posts.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const visible = posts.slice(start, start + PER_PAGE)

  function goTo(p) {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Post list */}
      <div className="flex flex-col">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-6 border-b border-border hover:border-border-hi transition-colors duration-150"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex-1 min-w-0">
                {/* categories */}
                {post.categories.length > 0 && (
                  <div className="flex gap-2 mb-2">
                    {post.categories.map(c => (
                      <span
                        key={c}
                        className="font-mono text-[10px] uppercase tracking-widest text-accent/70"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-[1.05rem] font-semibold text-muted group-hover:text-text transition-colors leading-snug mb-2">
                  {post.title}
                </p>

                {post.summary && post.summary !== 'test' && (
                  <p className="text-sm text-dim leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                )}

                {/* tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
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

              <div className="flex-shrink-0 sm:text-right sm:pl-8">
                <p className="font-mono text-[11px] text-dim">{fmt(post.date)}</p>
                <p className="font-mono text-xs text-accent/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  read →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            className="font-mono text-xs text-muted hover:text-text disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ← prev
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`font-mono text-xs w-7 h-7 rounded transition-colors ${
                  p === page
                    ? 'bg-accent text-bg'
                    : 'text-dim hover:text-text'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            className="font-mono text-xs text-muted hover:text-text disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            next →
          </button>
        </div>
      )}
    </>
  )
}
