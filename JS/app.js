
let logoSite = document.querySelector('.logo_site')
let sectionNavbar = document.querySelector('.navbar')
let flashBottom = document.querySelector('.item-arrow')
let navElem = document.querySelector('.nav')
let mobileMenu = document.querySelector('.menu-mobile--toggle')
let navMenuElem = document.querySelector('.nav-link_menu')
let delabsInfoShape = document.querySelector('.intro-bottom_section')
let scrollBar = document.querySelector('.scroll-bar')
let allSections = document.querySelectorAll('section')
let menuItems = document.querySelectorAll('.navbar-btn')

window.addEventListener('scroll', function () {
    allSections.forEach(function (section, index) {

        const sectionTop = section.offsetTop-400;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            
            const progress = Math.ceil(((scrollY - sectionTop) / sectionHeight) * 100); // درصد پیشرفت اسکرول
            const underline = menuItems[index].querySelector('.section-navbar');
            underline.style.width = progress + '%'; // طول نوار برابر با درصد پیشرفت
        }

        else {
            const underline = menuItems[index].querySelector('.section-navbar');
            underline.style.width = '0%'; // نوار به حالت اولیه برگردد
        }

    })
})




setInterval(function () {
    flashBottom.classList.toggle('item-arrow_toggle')
}, 600)
window.addEventListener('scroll', function (event) {
    let scrollTop = window.scrollY
    let clientHeigh = document.body.clientHeight
    let windowInnerHeigh = window.innerHeight

    let scrollPercent = scrollTop / (clientHeigh - windowInnerHeigh)
    let roundScrollPercent = Math.ceil(scrollPercent * 100)
    scrollBar.style.width = roundScrollPercent + '%'




    if (scrollTop > 1300) {
        delabsInfoShape.classList.add('intro-bottom_section--cover')
    }
    else if (scrollTop < 1450) {
        delabsInfoShape.classList.remove('intro-bottom_section--cover')
    }
    if (scrollTop > 300) {
        logoSite.style.top = '35px'
        sectionNavbar.style.bottom = 0
    }
    else {
        logoSite.style.top = '-5rem'
        sectionNavbar.style.bottom = -5 + 'rem'

    }
})
mobileMenu.addEventListener('click', function () {
    navElem.classList.toggle('menu-mobile--toggle-line')
    navMenuElem.classList.toggle('nav-link_menu--open')
})
