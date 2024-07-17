import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Icons } from '../../assets/icons'
import { TWStyles } from '../../modules/tw/twlit'
import { createRef, Ref, ref } from 'lit/directives/ref.js'

@customElement('ns-search-input')
export class SearchInput extends LitElement {
  static styles = [TWStyles]

  private inputRef: Ref<HTMLInputElement> = createRef()

  @property({ type: 'String' }) value = ''

  iconButtonTemplate(isEntered: boolean) {
    const content = isEntered
      ? html`<button alt="Clear" class="-mb-[1px]" @click=${this._handleClear}>${Icons.clear}</button>`
      : Icons.search
    return html`<div class="flex items-center justify-center w-6 h-6 mr-3">${content}</div>`
  }

  firstUpdated() {
    const input = this.inputRef.value!
    input.focus()
  }

  render() {
    const isEntered = this.value.length > 0
    const classes = isEntered ? 'rounded-t-lg shadow' : 'rounded-lg'

    return html`
      <div class="z-10 relative flex items-center py-5 px-4 sm:px-7 bg-white ${classes}">
        ${this.iconButtonTemplate(isEntered)}
        <input
          class="grow -my-5 py-5 -ml-3 pl-3 text-[1.5rem] focus-visible:outline-none placeholder:text-gray-400 outline-none truncate"
          placeholder="Search posts, tags and authors"
          id="search-input"
          ${ref(this.inputRef)}
          .value=${this.value}
          @keydown=${this._handleKeyDown}
          @input=${this._handleInput}
        />
        <button class="ml-3 text-[1.05rem] text-neutral-500" alt="Cancel" @click=${this._handleCancel}>Cancel</button>
      </div>
    `
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      e.preventDefault()
      this._handleCancel()
    }
  }

  private _handleInput(e: Event) {
    const value = (e.target as HTMLInputElement).value
    this.dispatchEvent(
      new CustomEvent('search-change', {
        detail: value,
        bubbles: true,
        composed: true,
      })
    )
    this.value = value
  }

  private _handleCancel() {
    this.dispatchEvent(
      new CustomEvent('cancel', {
        detail: {},
        bubbles: true,
        composed: true,
      })
    )
  }

  private _handleClear() {
    this.value = ''
    this.dispatchEvent(
      new CustomEvent('search-change', {
        detail: '',
        bubbles: true,
        composed: true,
      })
    )
  }
}
