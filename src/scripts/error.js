const newSearch = () => {
  const newSearchButton = document.querySelector('.new-search__button')

  newSearchButton.addEventListener('click', () => {
    window.location.replace('../../')
  })
}

newSearch()