document.addEventListener("DOMContentLoaded", function(){
    const searchButton = document.getElementById("search-btn");
    const userInput = document.getElementById("user-input");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.querySelector("#easy-label");
    const mediumLabel = document.querySelector("#medium-label");
    const hardLabel = document.querySelector("#hard-label");
    const statsCardContainer = document.querySelector("stats-card");
    const statsContainer = document.querySelector(".stats_container")

    function validateUsername(username){
        if (username.trim()===""){
            alert("username should not be empty");
            return false
        }
        const regex =  /^(?![_-])[a-zA-Z0-9_-]{3,16}(?<![_-])$/;
        const isMatching = regex.test(username);
        if (!isMatching){
            alert("Invalid username")
        }
        return isMatching


    }




    searchButton.addEventListener('click',function(){
        const username = userInput.value;
        console.log("loggin username: ", username);
    })






})