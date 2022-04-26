/*  open and close menu when the user click on the icon menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* when clicked on menu item, hidden menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* change the header when scroll the page */

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    // scroll bigger than the header height
    header.classList.add('scroll')
  } else {
    // smaller than header height
    header.classList.remove('scroll')
  }
}

/* swiper animation */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
  // autoplay even after an interaction
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
})

/* show elements when scroll the page with scrollreveal */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 680,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials, 
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// when scroll

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 570) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
