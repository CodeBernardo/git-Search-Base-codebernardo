export const renderUserCard = (userInfo) => {

  const userData = JSON.parse(localStorage.getItem("@gitSearch:githubUserInfo"))

  const header = document.querySelector('.profile__header')

  const profileCard = document.createElement('div')
  profileCard.classList.add('profile__info')

  const userImg = document.createElement('img')
  userImg.classList.add('profile__image')
  userImg.src = userData.avatar


  const userName = document.createElement('p')
  userName.classList.add('profile__username')
  userName.innerText = userData.name

  const changeUser = document.createElement('button')
  changeUser.classList.add('profile__change-user--button')
  changeUser.innerText = 'Trocar de usuário'

  profileCard.append(userImg, userName)
  header.append(profileCard, changeUser)
}


export const renderRepos = (userInfo) => {
  const userData = JSON.parse(localStorage.getItem("@gitSearch:githubUserInfo"))
  const repoList = document.querySelector('.profile__ul')
  
  
  userData.repos.forEach( repo => {
    console.log(repo)
    const listItem = document.createElement('li')

    const repoTitle = document.createElement('h4')
    repoTitle.innerText = repo.title

    const repoDescription = document.createElement('p')
    repoDescription.innerText = repo.description

    const repoLink = document.createElement('a')
    repoLink.innerText = "Abrir repositório"
    repoLink.href = repo.url
    repoLink.target = "_blank"
    
    listItem.append(repoTitle, repoDescription, repoLink)
    repoList.appendChild(listItem)
  });
}