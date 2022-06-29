const themeBtn = document.getElementById('change-color-theme');
const cta = document.querySelectorAll('.cta');
const heroRight = document.querySelector('.hero-right');
const nav = document.querySelector('.social-nav');
const skills = document.querySelector('.skills');
const skillsHr = document.querySelector('.skills-hr');

const contactHeader = document.querySelectorAll('.contact-right-header');
const subhead = document.querySelectorAll('.subhead');

const footer = document.querySelector('footer');

const name = document.querySelector('.name');

const svg1 = document.getElementById('Vector_32');
const svg2 = document.getElementById('Vector_33');
const svg3 = document.getElementById('Vector_34');
const svg4 = document.getElementById('Vector_3');

const slider = document.querySelector('.slider')


themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('red');

    cta.forEach(btn => {
        btn.classList.toggle('green');
    })
    
    heroRight.classList.toggle('green');
    nav.classList.toggle('green');
    footer.classList.toggle('green');

    skills.classList.toggle('green-section');
    skillsHr.classList.toggle('green-hr');

    name.classList.toggle('light-green');

    contactHeader.forEach(h => {
        h.classList.toggle('light-green');
    })
    

    subhead.forEach(s => {
        s.classList.toggle('light-green');
    })
    

    svg1.classList.toggle('green-svg');
    svg2.classList.toggle('green-svg');
    svg3.classList.toggle('green-svg');
    svg4.classList.toggle('green-svg');

    slider.classList.toggle('slider-red');
})