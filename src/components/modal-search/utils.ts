import { html, TemplateResult } from 'lit'

export function highlightSearch(text: string, search: string): TemplateResult {
  if (!search.trim()) return html`${text}`
  const regex = new RegExp(`(${search.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return html`${parts.map((part) => (part.toLowerCase() === search.toLowerCase() ? html`<b>${part}</b>` : part))}`
}
