import './components'
import { ModalSearch } from './components/modal-search/modal-search'
import { getData } from './components/modal-search/utils'
import { sampleData } from './utils/const'

const BUTTON_SELECTOR = '[data-ghost-search]'

function initModal() {
  console.log('search initModal')
  const searchButtons = document.querySelectorAll(BUTTON_SELECTOR)
  searchButtons.forEach((searchButton) => {
    const test = searchButton.getAttribute('data-nostr-site-search-test') === 'true'
    searchButton.addEventListener('click', async () => {
      const modal = document.createElement('ns-modal-search') as ModalSearch
      modal.items = test ? sampleData : await getData();
      document.body.appendChild(modal)
    })
  })
}

console.log('search readyState', document.readyState)
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initModal)
else initModal()
