import { renderRepos, renderUserCard } from "./render.js"

const changeUser = () => {
  const newSearchButton = document.querySelector('.profile__change-user--button')

  newSearchButton.addEventListener('click', () => {
    window.location.replace('../../')
    localStorage.clear()
  })
}

renderUserCard()
renderRepos()
changeUser()


