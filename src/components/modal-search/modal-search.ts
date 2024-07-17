import { LitElement, TemplateResult, css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { TWStyles } from '../../modules/tw/twlit'
import { Author, Data, Post, Tag } from '../../types/types'
import { highlightSearch } from './utils'

const DEFAULT_LIMIT = 10

@customElement('ns-modal-search')
export class ModalSearch extends LitElement {
  static styles = [css``, TWStyles]

  @property({ attribute: false })
  public items: Data = {
    authors: [],
    posts: [],
    tags: [],
  }

  @state()
  private _searchValue: string = ''

  @state()
  private _limit: number = DEFAULT_LIMIT

  private _handleSearchInputChange(event: CustomEvent): void {
    this._searchValue = event.detail
    this._limit = DEFAULT_LIMIT
  }

  private _handleGoto(url: string) {
    console.log('search goto', url)
    document.dispatchEvent(new CustomEvent('np-search-goto', { detail: url }))
  }

  private _handleMore() {
    this._limit += DEFAULT_LIMIT
  }

  sectionTemplate(title: string, children: TemplateResult[] | TemplateResult) {
    return html`<div class="border-t border-neutral-200 py-3 px-4 sm:px-7">
      <h1 class="uppercase text-sm text-neutral-400 font-semibold mb-1 tracking-wide">${title}</h1>
      ${children}
    </div> `
  }

  authorsTemplate(authors: Author[]) {
    return authors.map((author) => {
      return html`<div
        @click=${() => this._handleGoto(author.url)}
        class="py-[1rem] -mx-4 sm:-mx-7 px-4 sm:px-5 cursor-pointer flex items-center hover:bg-neutral-100"
      >
        <div class="rounded-full bg-neutral-200 w-7 h-7 mr-2 flex items-center justify-center font-bold">
          <span class="text-neutral-400">${author.name.at(0)}</span>
        </div>
        <h2 class="text-[1.25rem] font-medium leading-tight text-neutral-900 truncate">${author.name}</h2>
      </div>`
    })
  }

  tagsTemplate(tags: Tag[]) {
    return tags.map((tag) => {
      return html`<div
        @click=${() => this._handleGoto(tag.url)}
        class="flex items-center py-3 -mx-4 sm:-mx-7 px-4 sm:px-5 cursor-pointer hover:bg-neutral-100"
      >
        <p class="mr-2 text-sm font-bold text-neutral-400">#</p>
        <h2 class="text-[1.25rem] font-medium leading-tight text-neutral-900 truncate">${tag.name}</h2>
      </div> `
    })
  }

  postsTemplate(posts: Post[]) {
    const showMore = posts.length > this._limit
    return html`
      ${posts.slice(0, Math.min(posts.length, this._limit)).map((post) => {
        return html`<div @click=${() => this._handleGoto(post.url)}
        class="py-3 -mx-4 sm:-mx-7 px-4 sm:px-5 cursor-pointer hover:bg-neutral-100""
    >
      <h2 class="text-[1.25rem] font-medium leading-tight text-neutral-800">
        ${highlightSearch(post.title, this._searchValue)}
      </h2>
      ${
        post.description
          ? html`<p class="text-neutral-400 leading-normal text-sm mt-0 mb-0 truncate">
              ${highlightSearch(post.description, this._searchValue)}
            </p>`
          : nothing
      }
    </div>
      `
      })}
      ${showMore
        ? html`<button
            @click=${() => this._handleMore()}
            class="w-full my-3 p-[1rem] border border-neutral-200 hover:border-neutral-300 text-neutral-800 hover:text-black font-semibold rounded transition duration-150 ease hover:ease"
          >
            Show more results
          </button>`
        : nothing}
    `
  }

  renderSearchResults() {
    const query = this._searchValue.toLocaleLowerCase()

    if (!query.length) return nothing

    const authors = this.items.authors.filter((author) => author.name.toLowerCase().includes(query))
    const tags = this.items.tags.filter((tag) => tag.name.toLowerCase().includes(query))
    const posts = this.items.posts.filter(
      (post) => post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query)
    )

    const noResultsFound = authors.length === 0 && tags.length === 0 && posts.length === 0

    if (query.length && noResultsFound) {
      return html`
        <div class="py-4 px-7"><p class="text-[1rem] text-neutral-400 leading-normal">No matches found</p></div>
      `
    }

    return html`
      <div class="overflow-y-auto max-h-[calc(100vh-172px)] sm:max-h-[70vh] -mt-[1px]">
        ${authors.length ? this.sectionTemplate('Authors', this.authorsTemplate(authors)) : nothing}
        ${tags.length ? this.sectionTemplate('Tags', this.tagsTemplate(tags)) : nothing}
        ${posts.length ? this.sectionTemplate('Posts', this.postsTemplate(posts)) : nothing}
      </div>
    `
  }

  render() {
    return html`
      <div
        style="z-index: 3999999; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; overflow: hidden;"
      >
        <div
          class="absolute top-0 bottom-0 left-0 right-0 block backdrop-blur-[2px] animate-fadein z-0 bg-gradient-to-br from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.1)]"
        ></div>

        <div class="h-screen w-screen pt-20 antialiased z-50 relative" @click=${this._handleBackdropClick} id="backdrop">
          <div
            class="bg-white w-full max-w-[95vw] sm:max-w-lg rounded-lg shadow-xl m-auto relative translate-z-0 animate-popup"
          >
            <ns-search-input @cancel=${this._handleClose} @search-change=${this._handleSearchInputChange}></ns-search-input>          
             ${this.renderSearchResults()}
            </div>
          </div>
        </div>
      </div>
    `
  }

  private _handleClose(): void {
    this.remove()
  }

  private _handleBackdropClick(e: Event): void {
    const target = e.target as HTMLElement
    if (target.id !== 'backdrop') return
    this._handleClose()
  }
}
