/** @type {import('next').NextConfig} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:          'rgb(var(--color-bg) / <alpha-value>)',
        surface:     'rgb(var(--color-surface) / <alpha-value>)',
        card:        'rgb(var(--color-card) / <alpha-value>)',
        border:      'rgb(var(--color-border) / <alpha-value>)',
        'border-hi': 'rgb(var(--color-border-hi) / <alpha-value>)',
        accent:      'rgb(var(--color-accent) / <alpha-value>)',
        text:        'rgb(var(--color-text) / <alpha-value>)',
        muted:       'rgb(var(--color-muted) / <alpha-value>)',
        dim:         'rgb(var(--color-dim) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      fontSize: {
        hero: 'clamp(64px, 10vw, 118px)',
      },
    },
  },
  plugins: [],
}
