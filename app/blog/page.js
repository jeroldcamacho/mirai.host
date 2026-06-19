import Nav from '@/components/Nav'
import Link from 'next/link'
import BlogList from '@/components/BlogList'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'blog | mirai.host',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main className="px-6 md:px-10 lg:px-16 pt-28 pb-24 max-w-[72rem] mx-auto">

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim mb-2">
          cybersecurity notes & writeups
        </p>
        <h1 className="font-display font-bold text-[2.4rem] text-text leading-tight mb-1">
          blog<span className="text-accent">.</span>
        </h1>
        <p className="font-mono text-sm text-muted mb-12">
          {posts.length} post{posts.length !== 1 ? 's' : ''}
        </p>

        <BlogList posts={posts} />

      </main>

      <footer className="px-6 md:px-10 lg:px-16 py-8 max-w-[72rem] mx-auto flex items-center justify-between border-t border-border">
        <Link href="/" className="font-mono text-xs text-dim hover:text-muted transition-colors">
          ~/mirai
        </Link>
        <div className="flex gap-5">
          {[['github','/github'],['linkedin','/linkedin'],['x','/x']].map(([l,h]) => (
            <a key={l} href={h} target="_blank" rel="noopener" className="font-mono text-xs text-muted hover:text-text transition-colors">{l}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
