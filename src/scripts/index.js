import { fetchUserData, fetchUserRepos } from "./requests.js";

// console.log(await fetchUserData('codebernardo'))
// console.log(await fetchUserRepos('codebernardo'))

const handleEvents = () => {
  const searchInput = document.querySelector(".index__input");
  const searchButton = document.querySelector(".index__button");

  searchButton.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const user = await fetchUserData(searchInput.value)
    const userRepos = await fetchUserRepos(searchInput.value)
    
    const userData = {
      name: user.name,
      avatar: user.avatar_url,
      repos: userRepos.map( (repo) => {
        return {
          title: repo.name,
          description: repo.description,
          url: repo.html_url
        }
      })
    }
    return userData
  });
};

handleEvents();
