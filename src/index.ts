import './components'

const BUTTON_SELECTOR = '[data-ghost-search]'

function initModal() {
  const searchButton = document.querySelector(BUTTON_SELECTOR)
  if (!searchButton) return

  searchButton.addEventListener('click', () => {
    const modal = document.createElement('ns-modal-search')
    document.body.appendChild(modal)
  })
}

window.onload = initModal
