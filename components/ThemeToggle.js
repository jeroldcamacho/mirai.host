'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    // If .light class is present, we're in light mode
    const isLight = document.documentElement.classList.contains('light')
    setDark(!isLight)
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('light', !next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="font-mono text-sm text-muted hover:text-text transition-colors select-none"
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      {dark ? '◑' : '○'}
    </button>
  )
}
