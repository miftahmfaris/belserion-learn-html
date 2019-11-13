const fetchFollowing = () => {
    fetch("https://api.github.com/users/miftahmfaris/following")
        .then(response => {
            return response.json();
        })
        .then(data => {
            let getFollowing = document.getElementById("following-list");
            getFollowing.style.overflowY = "scroll";
            getFollowing.style.height = "300px";

            data.map(item => {
                let eachList = document.createElement("img");
                let textList = document.createTextNode(item.login);
                eachList.setAttribute("src", item.avatar_url);

                eachList.style.width = "50%";

                eachList.appendChild(textList);
                getFollowing.appendChild(eachList);
            });
        });
};

export default fetchFollowing;
