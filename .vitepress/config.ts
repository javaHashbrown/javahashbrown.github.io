import { defineConfig } from 'vitepress'
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

// --------------- auto-generate sidebar from src/ ---------------

interface ArticleMeta {
  text: string
  link: string
  date: string
}

function getArticlesByYear(): Record<string, ArticleMeta[]> {
  const srcDir = path.resolve(__dirname, '../src')
  const byYear: Record<string, ArticleMeta[]> = {}

  for (const entry of fs.readdirSync(srcDir)) {
    const yearDir = path.join(srcDir, entry)
    if (!fs.statSync(yearDir).isDirectory()) continue
    // skip non-year directories (like images/)
    if (!/^\d{4}$/.test(entry)) continue

    const articles: ArticleMeta[] = []
    for (const file of fs.readdirSync(yearDir)) {
      if (!file.endsWith('.md')) continue
      const raw = fs.readFileSync(path.join(yearDir, file), 'utf-8')
      const { data } = matter(raw)
      const slug = file.replace(/\.md$/, '')
      articles.push({
        text: data.title || slug,
        link: `/${entry}/${slug}`,
        date: data.date || '',
      })
    }
    // sort by date descending (newest first within each year)
    articles.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
    byYear[entry] = articles
  }

  return byYear
}

function sidebarBlog() {
  const byYear = getArticlesByYear()
  // years descending
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a))
  return years.map(year => ({
    text: year,
    collapsed: year !== years[0], // latest year expanded, others collapsed
    items: byYear[year].map(a => {
      // format: "03-11 入坑TypeScript" (year is already the group header)
      const shortDate = a.date ? String(a.date).replace(/^\d{4}-/, '') : ''
      const label = shortDate ? `${shortDate} ${a.text}` : a.text
      return { text: label, link: a.link }
    }),
  }))
}

// --------------- config ---------------

// write article data to JSON so blog.md can import it
fs.writeFileSync(
  path.resolve(__dirname, '../src/articles.json'),
  JSON.stringify(getArticlesByYear())
)

export default defineConfig({
  title: "Alex's Midway",
  description: "Welcome to Alex's Midway",

  srcDir: 'src',
  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: [{ text: 'Blog', link: '/', activeMatch: '^/$|^/\\d{4}/' }],

    sidebar: sidebarBlog(),

    editLink: {
      pattern:
        'https://github.com/javaHashbrown/javahashbrown.github.io/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/javaHashbrown/javahashbrown.github.io',
      },
    ],
  },
})
