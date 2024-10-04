'use strict';

// console.log("info")

// let js = [];

// console.log(typeof '3123')  

// if (typeof '3123' === Object && js.every) {
//     console.log("ok 3123")
// }

// if (typeof js === Object && js.every) {
//     console.log("ok")
// }
// let navMenu = document.getElementsByClassName("nav-menu");
// let navUl = document.getElementsByClassName("nav-ul")

// const myBlocks = document.querySelectorAll('.info-item-block')

// document.querySelector("#nav-button").addEventListener
// ('click', function () {
//     document.querySelector("#nav-list").querySelectorAll('li').className = "hidden";
// });
// console.log(document.querySelector("#nav-list").querySelectorAll('li'));
// const buttons = document.querySelectorAll('#my-button');
// for (let i = 0; i < navList.length; i++) {
//     buttons.addEventListener('click', function () {
//         myBlocks[i].classList.toggle("hidden")       
//         // toggle => add
//     });
// }
const navButton = document.querySelector("#nav-button");
const navList = document.querySelectorAll("nav ul li");
navButton.addEventListener('click', function () {
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.toggle("hidden");
    }
});