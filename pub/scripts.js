'use strict';

const navButton = document.querySelector("#nav-button");
const navList = document.querySelectorAll("nav ul li");
navButton.addEventListener('click', function () {
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.toggle("hidden");
    }
});