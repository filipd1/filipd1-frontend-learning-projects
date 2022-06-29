const mobileMenu = document.querySelector('.mobile-menu-btn')
const mobileMenuExit = document.querySelector('.mobile-exit-btn')
const mobileNav = document.querySelector('.mobile-nav')

const showDetails = document.querySelectorAll('.bottom')

const pl = document.querySelectorAll('.pl')
const eng = document.querySelectorAll('.eng')

const help = document.querySelector('.help')
const helpForm = document.querySelector('.help-form')
const helpFormExit = document.querySelector('.exit-btn')


mobileMenu.addEventListener('click', () => {
    mobileNav.classList.add('show-mobile-menu')
})

mobileMenuExit.addEventListener('click', () => {
    mobileNav.classList.remove('show-mobile-menu')
})


showDetails.forEach(detail => {
    detail.addEventListener('click', () => {
        detail.previousElementSibling.classList.toggle('show-details')
    })
})


eng.forEach(e => {
    e.addEventListener('click', () => {
        pl.forEach(p => {
            p.classList.remove('active-lang')
        })
        e.classList.add('active-lang')
    })
})

pl.forEach(p => {
    p.addEventListener('click', () => {
        eng.forEach(e => {
            e.classList.remove('active-lang')
        })
        p.classList.add('active-lang')
    })
})


help.addEventListener('click', () => {
    helpForm.classList.toggle('show-help')
})

helpFormExit.addEventListener('click', () => {
    helpForm.classList.remove('show-help')
})