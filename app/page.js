import Link from 'next/link'
import Nav from '@/components/Nav'
import { getAllPosts } from '@/lib/posts'

// ── Reusable small bento card ─────────────────────────────────
function Card({ category, children, href, span = 1, className = '' }) {
  const base = `bg-card border border-border rounded-lg p-5 dot-grid relative overflow-hidden
    hover:border-border-hi transition-colors duration-200 h-full flex flex-col
    ${span === 2 ? 'col-span-2' : span === 3 ? 'col-span-3 md:col-span-3' : 'col-span-1'} ${className}`

  const inner = (
    <>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim mb-3">
        {category}
      </p>
      {children}
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {inner}
      </a>
    )
  }
  return <div className={base}>{inner}</div>
}

// ── Home page ─────────────────────────────────────────────────
export default async function Home() {
  const posts = getAllPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="hero-pattern min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-10 lg:px-16 pt-24 pb-20">
        {/* fade to bg at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
        {/* fade on right */}
        <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-bg/70 to-transparent pointer-events-none hidden lg:block" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* label */}
          {/* <p className="font-mono text-xs text-accent uppercase tracking-[0.22em] mb-4">
            Security Researcher &amp; Pentester
          </p> */}

          {/* name */}
          <h1
            className="font-display font-bold text-text leading-[0.95] mb-10 select-none"
            style={{ fontSize: 'clamp(62px, 10vw, 115px)' }}
          >
            mirai<span className="text-accent">.</span>
          </h1>

          {/* bio + role row */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-0">
            <div className="lg:w-[46%]">
              <p className="text-[15px] text-muted leading-relaxed max-w-sm mb-8">
                Primarily focused on pentesting, mostly in web and network security,
                but currently interested in <b>automotive</b> and <b>hardware security</b>.
              </p>
              {/* <div className="flex gap-3 flex-wrap">
                <Link
                  href="/about"
                  className="font-mono text-sm border border-border-hi px-5 py-2 text-text hover:border-accent hover:text-accent transition-colors"
                >
                  about
                </Link>
                <Link
                  href="/blog"
                  className="font-mono text-sm border border-border-hi px-5 py-2 text-text hover:border-accent hover:text-accent transition-colors"
                >
                  blog
                </Link>
              </div> */}
            </div>

            <div className="lg:w-[54%] lg:text-right font-mono text-sm">
              <p className="text-[11px] text-dim uppercase tracking-widest mb-1">
                Pentest &amp; Threat Research
              </p>
              <p className="text-[11px] text-muted mb-1">
                Web Security · Automotive Security
              </p>
              <p className="text-[13px] text-text font-semibold mb-1">VicOne</p>
              {/* <p className="text-[11px] text-dim">Ex-Micro Focus · Ex-OpenText</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID ── */}
      <section className="px-6 md:px-10 lg:px-16 pb-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">

          {/* Row 1 ── HackTheBox | SPIRITCYBER (2) | CWES */}
          <Card
            category="LABS"
            href="https://mirai.host/htb"
          >
            <p className="text-text font-bold text-base mb-1">HackTheBox</p>
            <p className="text-muted text-sm leading-relaxed">
              web, network &amp; other challenges.
            </p>
          </Card>

          {/* SPIRITCYBER – 2-col wide */}
          <div className="col-span-2 bg-card border border-border rounded-lg p-5 dot-grid relative overflow-hidden hover:border-border-hi transition-colors duration-200">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim mb-3">
              Hackathon
            </p>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-text font-bold text-lg leading-tight mb-2">SPIRITCYBER-24</p>
                <p className="text-muted text-sm leading-relaxed">
                  IoT &amp; OT security research at Singapore International Cyber Week.
                  Identified critical vulns in smart city &amp; industrial devices.
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-display font-bold text-accent leading-none" style={{ fontSize: '2.6rem' }}>3rd</p>
                <p className="font-mono text-[10px] text-dim mt-0.5">Overall</p>
              </div>
            </div>
            <div className="flex gap-5 mt-4 pt-4 border-t border-border">
              {[['$10.5K', 'Elim.'], ['+$4.2K', 'Finals'], ['$14.7K', 'Total']].map(([v, l]) => (
                <div key={l}>
                  <p className={`font-bold text-lg leading-none ${l === 'Total' ? 'text-accent' : 'text-text'}`}>{v}</p>
                  <p className="font-mono text-[10px] text-dim mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CWES */}
          {/* <Card
            category="Certification"
            href="https://www.credly.com/badges/2a6e0370-dac5-43f3-841e-632a049a4e82/public_url"
          >
            <p className="font-display font-bold text-accent leading-none mb-1.5" style={{ fontSize: '2rem' }}>CWES</p>
            <p className="font-mono text-[11px] text-muted">HackTheBox</p>
          </Card> */}

          {/* Row 2 ── HackerOne | CRTP | Bugcrowd | TryHackMe */}
          {/* <Card category="Bug Bounty" href="https://mirai.host/h1">
            <p className="text-text font-bold text-base mb-1">HackerOne</p>
            <p className="text-muted text-sm">Active bug bounty hunter.</p>
          </Card>

          <Card
            category="Certification"
            href="https://www.credential.net/3ed7bc34-8e8e-437f-bdf7-2797a24a56fd"
          >
            <p className="font-display font-bold text-accent leading-none mb-1.5" style={{ fontSize: '2rem' }}>CRTP</p>
            <p className="font-mono text-[11px] text-muted">AlteredSecurity</p>
          </Card>

          <Card category="Bug Bounty" href="https://mirai.host/bc">
            <p className="text-text font-bold text-base mb-1">Bugcrowd</p>
            <p className="text-muted text-sm">Active on Bugcrowd programs.</p>
          </Card> */}

          <Card category="Labs" href="https://mirai.host/thm">
            <p className="font-display font-bold text-text leading-none mb-1.5" style={{ fontSize: '1.75rem' }}>Top 2%</p>
            <p className="font-mono text-[11px] text-muted">TryHackMe</p>
          </Card>

          {/* Row 3 ── GCPT | Automotive (3-col) */}
          {/* <Card
            category="Certification"
            href="https://badges.parchment.com/public/assertions/6atVtWDPRTSWc2bh9zLXng"
          >
            <p className="font-display font-bold text-accent leading-none mb-1.5" style={{ fontSize: '2rem' }}>GCPT</p>
            <p className="font-mono text-[11px] text-muted">GuideM</p>
          </Card> */}

          {/* Automotive – 3-col wide */}
          {/* <div className="col-span-1 md:col-span-3 bg-card border border-border rounded-lg p-5 dot-grid relative overflow-hidden hover:border-border-hi transition-colors duration-200">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim mb-3">
              Automotive Security
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-text font-bold text-xl leading-tight mb-1">
                  Sr. Auto Threat Researcher
                </p>
                <p className="text-muted text-sm">
                  test - test 2
                </p>
              </div>
              <p className="font-mono text-sm text-accent font-semibold flex-shrink-0">
                VicOne
              </p>
            </div>
          </div> */}

        </div>

        {/* ── CURRENTLY ── */}
        <div className="mt-2.5 dashed-card p-8 dot-grid relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
            <div className="flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mb-3">
                Currently
              </p>
              <p className="font-display font-bold text-[1.9rem] text-text leading-none mb-2">
                VicOne
              </p>
              <p className="text-text text-[15px]">Sr. Auto Threat Researcher</p>
              <p className="text-muted text-sm mt-1">
                Automotive Threat Research — smart vehicles &amp; embedded systems
              </p>
            </div>
            <Link
              href="/about"
              className="font-mono text-sm border border-border-hi px-5 py-3 text-text hover:border-accent hover:text-accent transition-colors flex items-center gap-2 w-fit flex-shrink-0"
            >
              About me <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── RECENT POSTS ── */}
      {recentPosts.length > 0 && (
        <section className="px-6 md:px-10 lg:px-16 py-12 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
              Recent Posts
            </p>
            <Link href="/blog" className="font-mono text-xs text-muted hover:text-accent transition-colors">
              all posts →
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {recentPosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 border-b border-border hover:border-border-hi transition-colors"
              >
                <p className="text-[15px] text-muted group-hover:text-text transition-colors">
                  {post.title}
                </p>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {post.categories[0] && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-dim">
                      {post.categories[0]}
                    </span>
                  )}
                  <span className="font-mono text-[11px] text-dim">
                    {new Date(post.date).getFullYear() > 2000
                      ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
                      : ''}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── FOOTER ── */}
      <footer className="px-6 md:px-10 lg:px-16 py-8 max-w-6xl mx-auto flex items-center justify-between border-t border-border mt-4">
        <p className="font-mono text-xs text-dim">mirai</p>
        <div className="flex gap-5 md:gap-7">
          {[
            ['github',   '/github'],
            ['linkedin', '/linkedin'],
            ['x',        '/x'],
            ['email',    'mailto:root@mirai.host'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-text transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
