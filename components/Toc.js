'use client'

import { useState } from 'react'

const INDENT = {
  1: '0',
  2: '1.25rem',
  3: '2.5rem',
}

const PREFIX = {
  1: <span className="text-dim mr-2">#</span>,
  2: <span className="text-dim mr-2">§</span>,
  3: <span className="text-dim mr-2">›</span>,
}

export default function Toc({ items, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  if (!items || items.length === 0) return null

  return (
    <div className="mb-10 border border-border rounded-lg overflow-hidden">
      {/* Toggle header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-3 bg-card hover:bg-surface transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
          Table of Contents
        </span>
        <span className="font-mono text-xs text-dim select-none">
          {open ? '−' : '+'}
        </span>
      </button>

      {/* TOC list */}
      {open && (
        <nav className="px-5 pt-3 pb-4 border-t border-border">
          <ol className="space-y-1.5">
            {items.map((item, i) => (
              <li
                key={`${item.id}-${i}`}
                style={{ paddingLeft: INDENT[item.level] ?? '0' }}
              >
                <a
                  href={`#${item.id}`}
                  className="font-mono text-[12px] text-muted hover:text-accent transition-colors leading-snug block"
                >
                  {PREFIX[item.level]}
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  )
}
