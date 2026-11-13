#!/usr/bin/env node
// Builds _data/guides.json from knowledge/guides/*.md
// Run after syncing articles: npm run build:data
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://wildgpt.plus'
const DIR = path.join(root, 'knowledge/guides')

const TOPIC_LABELS = {
  recharge: '充值与付款',
  plans: '套餐选择',
  help: '使用与排查',
  codex: 'Codex',
  news: '产品动态'
}

export function parseFrontMatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return {data: {}, body: markdown}
  return {data: parseSimpleYaml(match[1]), body: match[2]}
}

function parseSimpleYaml(src) {
  const data = {}
  const lines = src.split(/\r?\n/)
  let key = null
  for (const line of lines) {
    // Source articles often use flush lists ("tags:\n- item") as well as
    // indented lists. Require no leading whitespace was a bug: those tags
    // and summary points were dropped.
    if (!line.trim()) continue
    const listItem = key && line.match(/^[ \t]*-\s+(.*)$/)
    if (listItem) {
      if (!Array.isArray(data[key])) data[key] = []
      data[key].push(unwrap(listItem[1]))
      continue
    }
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/)
    if (kv) {
      key = kv[1]
      const raw = kv[2]
      if (raw === '' || raw === '|' || raw === '>') {
        data[key] = []
      } else if (raw.startsWith('[') && raw.endsWith(']')) {
        data[key] = raw
          .slice(1, -1)
          .split(',')
          .map((item) => unwrap(item))
          .filter(Boolean)
      } else if (raw === 'true' || raw === 'false') {
        data[key] = raw === 'true'
      } else {
        data[key] = unwrap(raw)
      }
    } else {
      key = null
    }
  }
  return data
}

function unwrap(value) {
  const text = String(value).trim()
  if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) {
    return text.slice(1, -1)
  }
  return text
}

function firstParagraph(body) {
  return body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith('#') && !block.startsWith('##') && !block.startsWith('-') && !block.startsWith('[')) || ''
}

function pointsFrom(body) {
  const section = body.split(/^## 要点\s*$/m)[1]
  if (!section) return []
  return section
    .trim()
    .split('\n\n')[0]
    .split('\n')
    .filter((line) => line.startsWith('- '))
    .map((line) => line.slice(2).trim())
}

export function parseGuide(slug, markdown) {
  const {data, body} = parseFrontMatter(markdown)
  const title = data.title || (body.match(/^# (.+)$/m) || ['', ''])[1].trim()
  const date = String(data.updated || data.date || data.updatedAt || data.publishedAt || '')
  const published = String(data.date || data.publishedAt || date)
  const tags = Array.isArray(data.tags) ? data.tags : []
  const topic = data.topic || ''
  const category = data.category || TOPIC_LABELS[topic] || '指南'
  const source = data.source_url || data.canonical || `${SITE}/zh/guides/${slug}/`
  const summary = (data.description || firstParagraph(body))
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return {
    slug,
    title,
    date,
    published,
    summary,
    points: pointsFrom(body),
    tags,
    keywords: Array.isArray(data.keywords) ? data.keywords : tags,
    topic,
    category,
    source_url: source,
    canonical: data.canonical || source,
    cta_url: `${source}${source.includes('?') ? '&' : '?'}utm_source=githubpages&utm_medium=guide&utm_campaign=knowledge_summary`
  }
}

export function collectGuides() {
  if (!fs.existsSync(DIR)) return []
  return fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = path.basename(file, '.md')
      return parseGuide(slug, fs.readFileSync(path.join(DIR, file), 'utf8'))
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const guides = collectGuides()
  const target = path.join(root, '_data/guides.json')
  fs.mkdirSync(path.dirname(target), {recursive: true})
  fs.writeFileSync(target, `${JSON.stringify(guides, null, 2)}\n`)
  console.log(`Wrote ${guides.length} guides to _data/guides.json`)
}
