import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const postsDir = path.join(process.cwd(), 'posts')

// ── Strip duplicate YAML keys before gray-matter parses ────────
function deduplicateFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return raw

  const seen = new Set()
  const cleaned = match[1]
    .split('\n')
    .filter(line => {
      const key = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*:/)
      if (key) {
        if (seen.has(key[1])) return false
        seen.add(key[1])
      }
      return true
    })
    .join('\n')

  return raw.replace(match[1], cleaned)
}

// ── Markdown → HTML ────────────────────────────────────────────
async function markdownToHtml(content) {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content)
  return result.toString()
}

// ── Slugify heading text → anchor id ──────────────────────────
function slugifyHeading(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // strip non-word chars
    .replace(/\s+/g, '-')       // spaces → hyphens
    .replace(/-+/g, '-')        // collapse multiple hyphens
}

// ── Inject id attrs into h2/h3 tags + collect TOC items ───────
// Returns { html: string, toc: Array<{level, text, id}> }
function processHeadings(html) {
  const toc = []
  const seen = {}

  const processed = html.replace(
    /<(h[1-3])([^>]*)>([\s\S]*?)<\/\1>/g,
    (_, tag, attrs, inner) => {
      let level = parseInt(tag[1])
      // Strip any inline HTML (e.g. <code>, <em>) to get plain text
      const text = inner.replace(/<[^>]+>/g, '').trim()
      const base = slugifyHeading(text)

      // Handle duplicate headings (append -1, -2, …)
      const count = seen[base] ?? 0
      seen[base] = count + 1
      const id = count === 0 ? base : `${base}-${count}`

      // remark-gfm auto-generates a footnotes heading with id="footnote-label"
      // — treat it as level 1 so it shows with the # prefix in the TOC
      const existingId = (attrs.match(/id="([^"]+)"/) || [])[1]
      if (existingId === 'footnote-label' || text.toLowerCase() === 'footnotes') {
        level = 1
      }

      toc.push({ level, text, id: existingId || id })
      return `<${tag}${attrs}>${inner}</${tag}>`
    }
  )

  return { html: processed, toc }
}

// ── Normalise tags/categories from frontmatter ─────────────────
function toArray(val) {
  if (!val) return []
  if (Array.isArray(val)) return val.map(String)
  if (typeof val === 'string') return [val]
  return []
}

// ── List all posts (frontmatter only, synchronous) ─────────────
export function getAllPosts() {
  if (!fs.existsSync(postsDir)) return []

  const files = fs
    .readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))

  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
    const { data } = matter(deduplicateFrontmatter(raw))

    return {
      slug,
      title:      data.title      || slug,
      summary:    data.summary    || '',
      date:       data.date ? new Date(data.date).toISOString() : new Date(0).toISOString(),
      categories: toArray(data.categories),
      tags:       toArray(data.tags),
    }
  })

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// ── Get all slugs (for generateStaticParams) ───────────────────
export function getAllSlugs() {
  if (!fs.existsSync(postsDir)) return []
  return fs
    .readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}

// ── Get a single post with rendered HTML + TOC ────────────────
export async function getPost(slug) {
  const filePath = path.join(postsDir, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(deduplicateFrontmatter(raw))

  const rawHtml = await markdownToHtml(content)
  const { html, toc } = processHeadings(rawHtml)

  return {
    slug,
    title:      data.title      || slug,
    summary:    data.summary    || '',
    date:       data.date ? new Date(data.date).toISOString() : new Date(0).toISOString(),
    categories: toArray(data.categories),
    tags:       toArray(data.tags),
    content:    html,
    toc,
    showToc:    data.showtoc === true,
    tocOpen:    data.tocopen === true,
  }
}
