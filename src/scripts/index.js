import { fetchUserData, fetchUserRepos } from "./requests.js";

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
          title: repo.name.replaceAll('_', ' ').replaceAll('-', ' '),
          description: repo.description,
          url: repo.html_url
        }
      })
    }
    localStorage.setItem("@gitSearch:githubUserInfo", JSON.stringify(userData))
    location.replace("./src/pages/profile.html")
  });
};

handleEvents();


