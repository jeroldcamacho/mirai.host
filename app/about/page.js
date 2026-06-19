import Nav from '@/components/Nav'
import Link from 'next/link'

export const metadata = {
  title: 'about | mirai.host',
}

const experience = [
  {
    company: 'VicOne',
    // duration: 'May 2024 — Present',
    current: true,
    roles: [
      {
        role: 'Sr. Auto Threat Researcher',
        period: 'Jan 2026 — Present',
        current: true,
        bullets: [
          'Conducted security research on CAN bus protocols and automotive hardware security vulnerabilities.',
          'Performed penetration testing on automotive web applications, mobile applications, and backend APIs.',
          'Conducted automotive threat intelligence analysis to identify emerging attack vectors and risks.',
        ],
      },
      {
        role: 'Auto Threat Researcher',
        period: 'May 2024 — Dec 2025',
        current: false,
        bullets: [],
      },
    ],
  },
  {
    company: 'OpenText',
    duration: 'Dec 2023 — Jan 2024',
    current: false,
    roles: [
      {
        role: 'Associate Security Assessment Engineer',
        period: 'Dec 2023 — Jan 2024',
        current: false,
        bullets: [
          'Micro Focus is acquired by OpenText.',
        ],
      },
    ],
  },
  {
    company: 'Micro Focus',
    duration: 'Jul 2022 — Dec 2023',
    current: false,
    roles: [
      {
        role: 'Web Application Security Consultant',
        period: 'Jul 2022 — Dec 2023',
        current: false,
        bullets: [
          'Conducted automated and manual vulnerability assessments on Web Applications and API (REST, SOAP and GraphQL) to identify potential risks.',
          'Validated and performed quality assurance checks on vulnerabilities reported by colleagues.',
        ],
      },
    ],
  },
]

const certs = [
  { name: 'Certified Web Exploitation Specialist', org: 'HackTheBox',      date: 'Sep 2025', href: 'https://www.credly.com/badges/2a6e0370-dac5-43f3-841e-632a049a4e82/public_url' },
  { name: 'Certified Red Team Professional',       org: 'AlteredSecurity', date: 'Oct 2023', href: 'https://www.credential.net/3ed7bc34-8e8e-437f-bdf7-2797a24a56fd' },
  { name: 'GuideM Certified Penetration Tester',   org: 'GuideM',          date: 'May 2022', href: 'https://badges.parchment.com/public/assertions/6atVtWDPRTSWc2bh9zLXng' },
]

const skills = [
  {
    label: 'Offensive Security',
    tags: ['Web Pentesting', 'Network Pentesting', 'Red Teaming', 'Active Directory', 'OSINT', 'Bug Bounty'],
  },
  {
    label: 'Automotive / Hardware',
    tags: ['Automotive Threat Research', 'CAN Bus', 'UDS / OBD-II', 'ECU Firmware', 'Hardware Hacking', 'Reverse Engineering'],
  },
  {
    label: 'Tools & Languages',
    tags: ['Burp Suite', 'Python', 'Bash', 'Nmap', 'Metasploit', 'Ghidra', 'SysReptor'],
  },
]

const social = [
  ['GitHub',    'https://mirai.host/github'],
  ['LinkedIn',  'https://mirai.host/linkedin'],
  ['X',         'https://mirai.host/x'],
  ['HackerOne', 'https://mirai.host/h1'],
  ['HackTheBox','https://mirai.host/htb'],
  ['Bugcrowd',  'https://mirai.host/bc'],
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="px-6 md:px-10 lg:px-16 pt-28 pb-24 max-w-[72rem] mx-auto">

        {/* ── Name / Hero ── */}
        <div className="mb-14 pb-10 border-b border-border">
          {/* <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent mb-4">
            Security Researcher &amp; Pentester
          </p> */}
           <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-2">
          backround & experiences
          </p>
          <h1 className="font-display font-bold text-[2.8rem] text-text leading-none mb-4">
            about<span className="text-accent">.</span>
          </h1>
          <p className="font-mono text-sm text-muted mb-4 max-w-2xl">
            {/* Sr. Auto Threat Researcher at{' '}
            <span className="text-text font-semibold">VicOne</span> */}
            Hey! I have a deep background in web application security, having participated in various responsible disclosure and bug bounty programs. My previous work mostly focused on web/API vulnerability assessments to identify potential risks. Now, I work as a Sr. Auto Threat Researcher at VicOne. My work revolves around security research, pentesting (web, mobile app, API, hardware, ECU), and conducting automotive threat intelligence.</p>
          {/* <div className="flex flex-wrap gap-2">
            {['pentester','threat researcher','automotive sec','CWES','CRTP'].map(b => (
              <span
                key={b}
                className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 border border-border-hi text-muted rounded"
              >
                {b}
              </span>
            ))}
          </div> */}
        </div>

        {/* ── Now ── */}
        {/* <section className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-4">// now</p>
          <div className="border-l-2 border-accent pl-5 py-1 space-y-3 text-[14px] text-muted leading-relaxed">
            <p>
              Currently working as <span className="text-text font-semibold">Sr. Auto Threat Researcher</span> at
              VicOne, identifying and analysing threats in automotive systems — ECU firmware,
              in-vehicle networks (CAN bus), telematics, and connected-vehicle APIs.
            </p>
            <p>
              On the side, exploring hardware security and low-level automotive protocols (UDS, OBD-II).
              Still active on HackTheBox, and tracking CVEs in web-facing automotive components.
            </p>
          </div>
        </section> */}

        {/* ── Background ── */}
        {/* <section className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-4">// background</p>
          <div className="space-y-3 text-[14px] text-muted leading-relaxed">
            <p>
              Started in web application security — assessments, auth bypasses, injection chains,
              business logic bugs. That evolved into red teaming and network pentesting, building a
              foundation for reasoning about complex attack surfaces.
            </p>
            <p>
              The jump to <span className="text-text font-semibold">automotive security</span> felt
              natural: it's fundamentally about how systems communicate, trust each other, and fail.
              The protocols differ but the adversarial mindset is the same.
            </p>
            <p>
              I write about techniques, tooling, and research on the{' '}
              <Link href="/blog" className="text-accent border-b border-accent/30 hover:border-accent transition-colors">
                blog
              </Link>.
            </p>
          </div>
        </section> */}

        {/* ── Experience ── */}
        <section className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-6">// work experience</p>
          <div className="flex flex-col gap-0">
            {experience.map(({ company, duration, current, roles }) => (
              <div key={company} className="border-b border-border pb-8 mb-8 last:border-0 last:mb-0 last:pb-0">

                {/* Company header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <p className="text-[15px] font-bold text-text">{company}</p>
                    {current && (
                      <span className="font-mono text-[9px] uppercase tracking-widest border border-accent text-accent px-1.5 py-0.5 rounded leading-none">
                        Current
                      </span>
                    )}
                  </div>
                  <p className={`font-mono text-[10px] flex-shrink-0 mt-0.5 ${current ? 'text-accent' : 'text-dim'}`}>
                    {duration}
                  </p>
                </div>

                {/* Roles */}
                <div className={`flex flex-col gap-5 ${roles.length > 1 ? 'pl-4 border-l border-border' : ''}`}>
                  {roles.map(({ role, period, current: roleCurrent, bullets }) => (
                    <div key={role}>
                      {/* Role row */}
                      <div className="flex items-start justify-between gap-4 mb-2.5">
                        <div className="flex items-center gap-2">
                          {roles.length > 1 && (
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 -ml-[1.1875rem] ${roleCurrent ? 'bg-accent' : 'bg-dim'}`} />
                          )}
                          <p className="text-[13.5px] font-semibold text-muted">{role}</p>
                        </div>
                        {roles.length > 1 && (
                          <p className="font-mono text-[10px] text-dim flex-shrink-0 mt-0.5">{period}</p>
                        )}
                      </div>
                      {/* Bullets */}
                      {bullets && bullets.length > 0 && (
                        <ul className="space-y-1.5 mt-2">
                          {bullets.map((b, i) => (
                            <li key={i} className="flex gap-2.5 text-[13px] text-muted leading-relaxed">
                              <span className="text-dim flex-shrink-0 mt-[3px]">·</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-4">// certifications</p>
          <div className="flex flex-col gap-2">
            {certs.map(({ name, org, date, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 p-4 border border-border rounded-lg bg-card dot-grid hover:border-border-hi transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="min-w-0">
                    <p className="text-[13.5px] font-semibold text-muted group-hover:text-text transition-colors">
                      {name}
                    </p>
                    <p className="font-mono text-[11px] text-dim mt-0.5">{org}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <p className="font-mono text-[11px] text-dim">{date}</p>
                  <span className="font-mono text-sm text-dim group-hover:text-accent transition-colors">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        {/* <section className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-5">// skills</p>
          <div className="flex flex-col gap-5">
            {skills.map(({ label, tags }) => (
              <div key={label}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-dim mb-2.5">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span
                      key={t}
                      className="text-[12px] text-muted border border-border px-2.5 py-1 rounded hover:border-border-hi hover:text-text transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* ── Find me ── */}
        {/* <section className="mb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-4">// find me</p>
          <div className="flex flex-wrap gap-2">
            {social.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs border border-border px-3.5 py-2 text-muted hover:border-accent hover:text-accent transition-colors rounded"
              >
                {label}
              </a>
            ))}
          </div>
        </section> */}

      </main>

      <footer className="px-6 md:px-10 lg:px-16 py-8 max-w-[72rem] mx-auto flex items-center justify-between border-t border-border">
        <Link href="/" className="font-mono text-xs text-dim hover:text-muted transition-colors">~/mirai</Link>
        <div className="flex gap-5">
          {[['github','/github'],['linkedin','/linkedin'],['x','/x']].map(([l,h]) => (
            <a key={l} href={h} target="_blank" rel="noopener" className="font-mono text-xs text-muted hover:text-text transition-colors">{l}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
