interface ISearchModal {
  shadowRoot: ShadowRoot | null
}

class SearchModal implements ISearchModal {
  shadowRoot: ShadowRoot | null = null

  init(): void {
    const searchButton = document.querySelector('[data-ghost-search]') as HTMLElement
    console.log({ searchButton })
    searchButton.addEventListener('click', () => {
      console.log('click')
      this.openModal()
    })
  }

  openModal(): void {
    console.log(this.shadowRoot, 'shadowRoot')
    if (!this.shadowRoot) {
      const modalElement = document.createElement('div')
      modalElement.innerHTML = `
                <style>
                    :host { all: initial; } /* Reset CSS для Shadow DOM */
                </style>
                <div class="modal p-5 bg-white rounded-lg shadow-lg fixed inset-x-0 top-20 mx-auto max-w-lg" style="width: 90%; left: 50%; transform: translateX(-50%);">
                    <input class="input form-input block w-full mt-1" type="text" placeholder="Поиск..." oninput="this.getRootNode().host.updateResults(this.value)" />
                    <div class="results mt-3"></div>
                </div>
            `
      console.log(modalElement, 'modalElement')
      this.shadowRoot = modalElement.attachShadow({ mode: 'open' })
      console.log(this.shadowRoot, 'after this.shadowRoot')
      this.shadowRoot.appendChild(modalElement)
      document.body.append(this.shadowRoot)
    }
  }

  updateResults(value: string): void {
    const resultsContainer = this.shadowRoot!.querySelector('.results') as HTMLDivElement
    resultsContainer.innerHTML = ''
    const results = this.search(value)
    results.forEach((result) => {
      const resultElement = document.createElement('div')
      resultElement.textContent = result
      resultsContainer.appendChild(resultElement)
    })
  }

  search(query: string): string[] {
    const testData: string[] = ['Example 1', 'Test 2', 'Demo 3']
    return testData.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
  }
}

window.onload = () => {
  console.log('DOM loaded!')
  const searchModal = new SearchModal()
  console.log('searchModal => ', searchModal)
  searchModal.init()
}
