'use strict';

let currentActiveLink = document.getElementById("1");

let a1 = document.getElementById("1"),
a2 = document.getElementById("2"),
a3 = document.getElementById("3"),
a4 = document.getElementById("4"),
a5 = document.getElementById("5"),
a6 = document.getElementById("6"),
a7 = document.getElementById("7");

a1.addEventListener("click", (e) => {
    currentActiveLink.classList.remove('active-link');
    currentActiveLink = e.target;
    currentActiveLink.classList.add('active-link');
});

a2.addEventListener("click", (e) => {
    currentActiveLink.classList.remove('active-link');
    currentActiveLink = e.target;
    currentActiveLink.classList.add('active-link');
});

a3.addEventListener("click", (e) => {
    currentActiveLink.classList.remove('active-link');
    currentActiveLink = e.target;
    currentActiveLink.classList.add('active-link');
});

a4.addEventListener("click", (e) => {
    currentActiveLink.classList.remove('active-link');
    currentActiveLink = e.target;
    currentActiveLink.classList.add('active-link');
});

a5.addEventListener("click", (e) => {
    currentActiveLink.classList.remove('active-link');
    currentActiveLink = e.target;
    currentActiveLink.classList.add('active-link');
});

a6.addEventListener("click", (e) => {
    currentActiveLink.classList.remove('active-link');
    currentActiveLink = e.target;
    currentActiveLink.classList.add('active-link');
}); 

a7.addEventListener("click", (e) => {
    currentActiveLink.classList.remove('active-link');
    currentActiveLink = e.target;
    currentActiveLink.classList.add('active-link');
});