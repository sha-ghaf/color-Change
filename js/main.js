const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
/*=============== SHOW MENU ===============*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*============== MENU HIDDEN ===============*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav-link')
function linkAction () {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader () {
    const header = document.getElementById('header')
    if (this.scrollY  >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== TESTIMONIAL SWIPER ===============*/
// var swiper = new Swiper(".testimonial-swapper", {
//     pagination: {
//         el: ".swiper-pagination",
//         dynamicBullets: true,
//     },
// });
var swiper = new Swiper(".testimonial-swapper", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        //clickable: true,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1020: {
          slidesPerView: 3,
      },
    },
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// // get all sections that have an id defined
// const sections = Document.querySelectorAll('section[id]')
// // add an event listene listening for scroll
// window.addEventListener('scroll', navHighlighter);
// function navHighlighter() {
//     //get current scroll position
//     let scrollY = window.pageYOffset;
//     // now we loop through section to get height, top and ID values for .forEach
//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50,
//         sectionId = current.getAttribute('id');
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active-link')
//         }
//         else {
//             document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active-link')
//         }
//     })
// }
/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer = document.querySelector('.portfolio-filter-inner'),
    filterBtns = filterContainer.children,
    totulFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll('.portfolio-item'),
    totalPortfolioItem = portfolioItems.length
    for (let i = 0; i < totulFilterBtn; i++) {
        filterBtns[i].addEventListener('click', function(){
            filterContainer.querySelector('.active').classList.remove('active')
            this.classList.add('active')

            const fillterValue = this.getAttribute('data-filter');
            for (let k = 0; k < totalPortfolioItem; k++) {
                if(fillterValue === portfolioItems[k].getAttribute('data-catgory')){
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                }
                else{
                    portfolioItems[k].classList.add('hide');
                    portfolioItems[k].classList.remove('show');
                }
                if(fillterValue === "all"){
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                }
                
            }

        })
        
    }

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector('#theme-button');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span')
var root = document.querySelector(':root')
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')

// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid'
} 
//close model
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}
theme.addEventListener('click', openThemeModal)
themeModal.addEventListener('click', closeThemeModal)

/*===== FONTS =====*/
//remove active class from span or font size selectors 
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active")
        if(size.classList.contains('font-size-1')){
            fontSize = '12px'
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '14px'
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '18px'
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

/*===== PRIMARY COLORS =====*/
//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = '252'
        }
        else if(color.classList.contains('color-2')){
            primaryHue = '52'
        }
        else if(color.classList.contains('color-3')){
            primaryHue = '352'
        }
        else if(color.classList.contains('color-4')){
            primaryHue = '152'
        }
        else if(color.classList.contains('color-5')){
            primaryHue = '202'
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', primaryHue) 
    })
})
/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
//change background color 
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}
bg1.addEventListener('click', () => {
    // add active class 
    bg1.classList.add('active')
    // rremove active class from the others
    bg2.classList.remove('active')
    bg3.classList.remove('active')
    //remove customized changes from locel storage
    window.location.reload()
})
bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    // add active class 
    bg2.classList.add('active')
    // rremove active class from the others
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeBG()
})
bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    // add active class 
    bg3.classList.add('active')
    // rremove active class from the others
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBG()
})
