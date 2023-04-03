/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')

 if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
 }

 if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
 }


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 48,
        }
    }
})

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
})

/* Link active featured */ 
const linkFeatured = document.querySelector('.featured__item');

function activeFeatured(){
    linkFeatured.forEach(l => l.classList.remove('active-featured'));
    this.classList.add('active-featured');
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
