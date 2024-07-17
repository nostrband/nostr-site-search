import { html, TemplateResult } from 'lit'
import { Data } from '../../types/types'

export function highlightSearch(text: string, search: string): TemplateResult {
  if (!search.trim()) return html`${text}`
  const regex = new RegExp(`(${search.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return html`${parts.map((part) => (part.toLowerCase() === search.toLowerCase() ? html`<b>${part}</b>` : part))}`
}

export async function getData(): Promise<Data> {
  // @ts-ignore
  const store = window.nostrSite.store
  if (!store) throw new Error('No window.nostrSite')

  const posts = (
    await store.list({
      type: 'posts',
      limit: 1000,
    })
  ).posts
  const tags = (
    await store.list({
      type: 'tags',
      limit: 100,
    })
  ).tags
  const authors = (
    await store.list({
      type: 'authors',
      limit: 100,
    })
  ).authors
  console.log('search res', { posts, tags, authors })
  const data = {
    posts: posts.map((p) => ({ id: p.id, title: p.title || '', description: p.excerpt || '', markdown: p.markdown || "", url: p.url })),
    tags: tags.map((t) => ({ id: t.id, name: t.name || '', url: t.url })),
    authors: authors.map((a) => ({ id: a.id, name: a.name || '', image: a.profile_image || '', url: a.url })),
  }
  console.log('search data', data)
  return data
}
