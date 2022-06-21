const hamburgerIcon = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close')
const navMenu = document.querySelector('.nav-menu')

hamburgerIcon.addEventListener('click', ()=>{
    hamburgerIcon.style.display = 'none'
    closeIcon.style.display = 'block'
    navMenu.style.display = 'block'
    document.querySelector('nav').style.backgroundColor = 'var(--Black)'
})

closeIcon.addEventListener('click', ()=>{
    closeIcon.style.display = 'none'
    hamburgerIcon.style.display = 'block'
    navMenu.style.display = 'none'
    document.querySelector('nav').style.backgroundColor = 'transparent'
})
