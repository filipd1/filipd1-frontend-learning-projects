const  tl = gsap.timeline({defaults: {duration: 0.75, ease: Power1.easeOut}})

tl.fromTo('nav', {y: -50, opacity: 0}, {y: 0, opacity: 1})
tl.fromTo('.hero-text-wrapper', {x: -100, opacity: 0}, {x: 0, opacity: 1})
tl.fromTo('.hero-right', {y: -100, opacity: 0}, {y: 0, opacity: 1})
tl.fromTo('.details-right', {opacity: 0}, {opacity: 1})
tl.fromTo('.details-left', {opacity: 0}, {opacity: 1}, '<')
tl.fromTo('.contact-wrapper', {opacity: 0}, {opacity: 1})


const  tl2 = gsap.timeline({defaults: {duration: 0.75, ease: Power1.easeOut}});
tl2.fromTo('nav', {y: -50, opacity: 0}, {y: 0, opacity: 1});
tl2.fromTo('.form-wrapper', {y: 100, opacity: 0}, {y:0, opacity: 1});


const  tl3 = gsap.timeline({defaults: {duration: 0.75, ease: Power1.easeOut}});
tl3.fromTo('nav', {y: -50, opacity: 0}, {y: 0, opacity: 1});
tl3.fromTo('.faq-wrapper', {opacity: 0}, {opacity: 1});



const nav = document.querySelector('nav');
const sectionOne = document.querySelector(".hero");
const support = document.querySelector(".clr-white");

const menu = document.querySelector('.mobile-menu');
const desktopNav = document.querySelector('.desktop-nav');
const body = document.querySelector('body');


menu.addEventListener('click', () => {
    desktopNav.classList.add('active');
})


body.addEventListener("click", function () {
    desktopNav.classList.remove('active');
}, false);


menu.addEventListener("click", function (ev) {
    ev.stopPropagation();
}, false);


desktopNav.addEventListener("click", function (ev) {
    ev.stopPropagation();
}, false);



const sectionOneOptions = {
    rootMargin: "-450px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add('nav-scrolled');
            support.classList.remove('clr-white');
        } else {
            nav.classList.remove("nav-scrolled");
            support.classList.add('clr-white');
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne)