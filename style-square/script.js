let menu = document.getElementById('menu');
let search = document.getElementById('search');
let exit = document.getElementById('exit');

let nav = document.querySelector('nav');
let inputSearch = document.querySelector('.nav-search');

var body = document.querySelector('header');


menu.addEventListener('click', () => {
    nav.classList.add('active');
})


body.addEventListener("click", function () {
    nav.classList.remove('active');
}, false);


menu.addEventListener("click", function (ev) {
    ev.stopPropagation();
}, false);


nav.addEventListener("click", function (ev) {
    ev.stopPropagation();
}, false);


search.addEventListener("click", function (ev) {
    ev.stopPropagation();
}, false);


search.addEventListener('click', () => {
    nav.classList.add('active');
    inputSearch.focus();
})