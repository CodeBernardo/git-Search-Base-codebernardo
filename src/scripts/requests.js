export const fetchUserData = async (userName) => {
  const userData = await fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        window.location.replace("./src/pages/error.html");
      }
    })
  return userData;
};

export const fetchUserRepos = async (userName) => {
  const user = await fetchUserData(userName);

  const userRepos = await fetch(user.repos_url, {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        window.location.replace("./src/pages/error.html");
      }
    })
  return userRepos;
};
