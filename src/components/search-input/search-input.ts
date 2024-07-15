import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Icons } from '../../assets/icons'
import { TWStyles } from '../../modules/tw/twlit'

@customElement('ns-search-input')
export class SearchInput extends LitElement {
  static styles = [TWStyles]

  @property({ type: 'String' }) value = ''

  iconButtonTemplate(isEntered: boolean) {
    const content = isEntered
      ? html`<button alt="Clear" class="-mb-[1px]" @click=${this._handleClear}>${Icons.clear}</button>`
      : Icons.search
    return html`<div class="flex items-center justify-center w-4 h-4 mr-3">${content}</div>`
  }

  render() {
    const isEntered = this.value.length > 0
    const classes = isEntered ? 'rounded-t-lg shadow' : 'rounded-lg'

    return html`
      <div class="z-10 relative flex items-center py-5 px-4 sm:px-7 bg-white ${classes}">
        ${this.iconButtonTemplate(isEntered)}
        <input
          class="grow -my-5 py-5 -ml-3 pl-3 text-[1rem] focus-visible:outline-none placeholder:text-gray-400 outline-none truncate"
          placeholder="Search posts, tags and authors"
          id="search-input"
          .value=${this.value}
          @input=${this._handleInput}
        />
        <button class="ml-3 text-sm text-neutral-500 sm:hidden" alt="Cancel" @click=${this._handleCancel}>
          Cancel
        </button>
      </div>
    `
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
