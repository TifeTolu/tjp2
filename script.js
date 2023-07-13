const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav2')
const close = document.querySelector('.close')
const header = document.querySelector('.header')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('visible')
    close.classList.toggle('visible')
    hamburger.classList.toggle('visible')
    header.classList.toggle('visible')
})

close.addEventListener('click', () => {
    nav.classList.toggle('visible')
    close.classList.toggle('visible')
    hamburger.classList.toggle('visible')
    header.classList.toggle('visible')
})