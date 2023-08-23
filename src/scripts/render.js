export const renderUserCard = (userInfo) => {
  const header = document.querySelector('.profile__header')

  const profileCard = document.createElement('div')
  profileCard.classList.add('profile__info')

  const userImg = document.createElement('img')
  userImg.classList.add('profile__image')
  userImg.src = 'vem do local storage'


  const userName = document.createElement('p')
  userName.classList.add('profile__username')
  userName.innerText = 'vem do local storage'

  const changeUser = document.createElement('button')
  changeUser.innerText = 'Trocar de usuário'
  changeUser.addEventListener('click', () => {
    window.location.replace('./index.html')
  })


  profileCard.append(userImg, userName)
  header.append(profileCard, changeUser)
}


export const renderRepos = (userInfo) => {
  
}