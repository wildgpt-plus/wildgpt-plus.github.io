#!/usr/bin/env node
// Sync guide summaries from a local WildGPT content checkout.
//
// Usage:
//   node scripts/sync-from-wildgpt.mjs --source /path/to/wildgpt
//   node scripts/sync-from-wildgpt.mjs --source /path/to/wildgpt --slugs slug-a,slug-b
//
// The --source directory should contain content/articles/<slug>.md
// (the published WildGPT article sources). This script writes
// knowledge/guides/*.md, knowledge/README.md, and _data/guides.json.
// Review the diff, commit, and push to main so GitHub Pages can rebuild.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {parseFrontMatter, collectGuides} from './build-guides-data.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://wildgpt.plus'
const TOPIC_LABELS = {
  recharge: '充值与付款',
  plans: '套餐选择',
  help: '使用与排查',
  codex: 'Codex',
  news: '产品动态'
}

function argValue(name) {
  const index = process.argv.indexOf(name)
  if (index === -1) return ''
  return process.argv[index + 1] || ''
}

function shanghaiDate() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(new Date())
  const values = Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]))
  return `${values.year}-${values.month}-${values.day}`
}

function yamlQuote(value) {
  return JSON.stringify(String(value ?? ''))
}

function yamlList(items) {
  return items.map((item) => `  - ${yamlQuote(item)}`).join('\n')
}

function extractLead(markdown) {
  const {body} = parseFrontMatter(markdown)
  return (body.split(/^## 要点\s*$/m)[0] || '').trim()
}

function loadExistingLeads() {
  const dir = path.join(root, 'knowledge/guides')
  const leads = {}
  if (!fs.existsSync(dir)) return leads
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.md'))) {
    const lead = extractLead(fs.readFileSync(path.join(dir, file), 'utf8'))
    if (lead) leads[path.basename(file, '.md')] = lead
  }
  return leads
}

function renderGuide(article, existingLeads = {}) {
  const source = `${SITE}/zh/guides/${article.slug}/`
  const cta = `${source}?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base`
  const tags = article.tags || []
  // Prefer a hand-written lead already in this repo. For new slugs, use dek
  // (a short Chinese sentence) instead of the dense githubSummary fact dump.
  const summary = existingLeads[article.slug] || article.dek || article.metaDescription || article.githubSummary || ''
  const points = (article.summary || []).map((point) => {
    if (point === '路径：设置 → 安全 → 高级安全；Codex 网络不受影响。') {
      return '在设置里的「安全」「高级安全」中打开；Codex 的网络不受影响。'
    }
    if (point === '基准不提供完整套餐权限表，不能据此保证Pro账号复现相同配置和结果。') {
      return '基准不是完整的套餐权限表，不能据此认定 Pro 账号就能复现同样的配置和结果。'
    }
    return point
  })
  const date = article.updatedAt || article.publishedAt
  const front = [
    '---',
    `title: ${yamlQuote(article.title)}`,
    `description: ${yamlQuote(article.dek || article.metaDescription || summary)}`,
    `date: ${yamlQuote(article.publishedAt)}`,
    `updated: ${yamlQuote(date)}`,
    `topic: ${yamlQuote(article.topic)}`,
    `category: ${yamlQuote(article.category || TOPIC_LABELS[article.topic] || '指南')}`,
    'tags:',
    yamlList(tags),
    'keywords:',
    yamlList(tags),
    `slug: ${yamlQuote(article.slug)}`,
    `canonical: ${yamlQuote(source)}`,
    `source_url: ${yamlQuote(source)}`,
    'layout: guide',
    `permalink: /guides/${article.slug}/`,
    '---',
    '',
    summary.trim(),
    '',
    '## 要点',
    '',
    ...points.map((point) => `- ${point}`),
    '',
    `[阅读官网完整指南](${cta})`,
    '',
    '套餐、价格和办理入口以 WildGPT 官网当前页面为准。',
    ''
  ]
  return front.join('\n')
}

function renderCatalog(guides) {
  const lines = [
    '# WildGPT 使用指南',
    '',
    '面向 ChatGPT Plus / Pro 用户的套餐选择、使用方法和问题排查摘要。WildGPT 支持支付宝、微信付款，直充本人账户，订单进度可查。',
    '',
    '这里只收录要点摘要；完整说明、最新规则和办理入口请查看 [WildGPT 官网](https://wildgpt.plus/zh/?utm_source=github&utm_medium=referral&utm_campaign=knowledge_base)。',
    '',
    '## 文章目录',
    ''
  ]
  for (const guide of guides) {
    lines.push(`- [${guide.title}](guides/${guide.slug}.md)`)
  }
  lines.push(
    '',
    '## 内容与反馈',
    '',
    '本库只包含公开教程摘要，不收集账户登录信息、付款凭证或订单详情。订单问题请通过官网客服处理，不要在公开 Issue 中提交个人资料。',
    '',
    '订阅期内有售后质保：遇到问题可带上订单号，联系官网客服。',
    ''
  )
  return lines.join('\n')
}

function loadSourceArticles(sourceRoot, onlySlugs) {
  const directory = path.join(sourceRoot, 'content/articles')
  if (!fs.existsSync(directory)) {
    throw new Error(`Cannot find ${directory}. Pass --source pointing at a WildGPT content checkout.`)
  }
  const today = shanghaiDate()
  const wanted = onlySlugs.length ? new Set(onlySlugs) : null
  const articles = []
  const seen = new Set()
  for (const file of fs.readdirSync(directory).filter((name) => name.endsWith('.md'))) {
    const raw = fs.readFileSync(path.join(directory, file), 'utf8')
    const {data} = parseFrontMatter(raw)
    const slug = data.slug || path.basename(file, '.md')
    if (file !== `${slug}.md`) throw new Error(`Filename must match slug: ${file}`)
    if (wanted && !wanted.has(slug)) continue
    if (data.draft === true) continue
    if (data.publishedAt && data.publishedAt > today) continue
    if (seen.has(slug)) throw new Error(`duplicate slug: ${slug}`)
    seen.add(slug)
    articles.push({...data, slug, tags: Array.isArray(data.tags) ? data.tags : [], summary: Array.isArray(data.summary) ? data.summary : []})
  }
  if (wanted) {
    const missing = [...wanted].filter((slug) => !seen.has(slug))
    if (missing.length) throw new Error(`Slugs not found or not publishable: ${missing.join(', ')}`)
  }
  if (!articles.length) throw new Error('No publishable articles matched.')
  return articles.sort((a, b) => String(b.updatedAt || b.publishedAt).localeCompare(String(a.updatedAt || a.publishedAt)) || a.slug.localeCompare(b.slug))
}

function writeData(guides) {
  const target = path.join(root, '_data/guides.json')
  fs.mkdirSync(path.dirname(target), {recursive: true})
  fs.writeFileSync(target, `${JSON.stringify(guides, null, 2)}\n`)
}

const source = path.resolve(argValue('--source') || '')
if (!source) {
  console.error('Usage: node scripts/sync-from-wildgpt.mjs --source /path/to/wildgpt [--slugs slug-a,slug-b]')
  process.exit(1)
}
const onlySlugs = (argValue('--slugs') || '')
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean)

const articles = loadSourceArticles(source, onlySlugs)
const guidesDir = path.join(root, 'knowledge/guides')
fs.mkdirSync(guidesDir, {recursive: true})
const existingLeads = loadExistingLeads()

if (!onlySlugs.length) {
  for (const file of fs.readdirSync(guidesDir).filter((name) => name.endsWith('.md'))) {
    fs.unlinkSync(path.join(guidesDir, file))
  }
}

for (const article of articles) {
  fs.writeFileSync(path.join(guidesDir, `${article.slug}.md`), renderGuide(article, existingLeads))
}

const guides = collectGuides()
writeData(guides)
fs.mkdirSync(path.join(root, 'knowledge'), {recursive: true})
fs.writeFileSync(path.join(root, 'knowledge/README.md'), renderCatalog(guides))
console.log(`Synced ${articles.length} article(s); catalog now has ${guides.length} guide(s).`)
