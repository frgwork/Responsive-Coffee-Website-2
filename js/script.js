// Swiper js

// Nav open close
const body = document.querySelector('body'),
   navMenu = body.querySelector('.menu-content'),
   navOpen = body.querySelector('.navopen-btn'),
   navClose = navMenu.querySelector('.navclose-btn');

if (navMenu && navOpen) {
   navOpen.addEventListener('click', () => {
      navMenu.classList.add('open');
      body.style.overflowY = 'hidden'
   })
}
if (navMenu && navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('open');
      body.style.overflowY = 'Scroll'
   })
}

// Change header bg color


// Scroll up button

// Nav link indicator

// Scroll Reveal Animation
