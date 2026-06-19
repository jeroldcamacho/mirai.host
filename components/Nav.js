'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/',      label: 'home'  },
  { href: '/about', label: 'about' },
  { href: '/blog',  label: 'blog'  },
]

export default function Nav() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      if (y < 10) {
        setVisible(true)
      } else if (y > lastY.current) {
        setVisible(false) // scrolling down — hide
      } else {
        setVisible(true)  // scrolling up — show
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const active = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[72rem] mx-auto px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm text-muted hover:text-text transition-colors"
        >
          ~/mirai
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-mono text-sm transition-colors ${
                active(href)
                  ? 'text-accent'
                  : 'text-muted hover:text-text'
              }`}
            >
              {active(href) ? `> ${label}` : label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
