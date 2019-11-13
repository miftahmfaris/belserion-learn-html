import fetchFollwing from "./following.js";
import fetchFollowers from "./followers.js";

const fetchProfile = () => {
    fetch("https://api.github.com/users/miftahmfaris")
        .then(response => {
            return response.json();
        })
        .then(data => {
            let getProfile = document.getElementById("profile-name");
            getProfile.innerHTML = data.login;

            let getProfileImage = document.getElementById("profile-image");
            getProfileImage.setAttribute("src", data.avatar_url);
        });
};

fetchProfile();
fetchFollowers();
fetchFollwing();
