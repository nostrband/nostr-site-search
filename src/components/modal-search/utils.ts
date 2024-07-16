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
    })
  ).posts
  const tags = (
    await store.list({
      type: 'tags',
    })
  ).tags
  const authors = (
    await store.list({
      type: 'authors',
    })
  ).authors
  console.log('search res', { posts, tags, authors })
  const data = {
    posts: posts.map((p) => ({ id: p.id, title: p.title || '', description: p.excerpt || '', url: p.url })),
    tags: tags.map((t) => ({ id: t.id, name: t.name || '', url: t.url })),
    authors: authors.map((a) => ({ id: a.id, name: a.name || '', image: a.profile_image || '', url: a.url })),
  }
  console.log('search data', data)
  return data
}
