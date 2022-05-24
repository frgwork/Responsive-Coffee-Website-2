// Swiper js
const swiper = new Swiper(".home-swiper", {
   slidesPerView: 1,
   grabCursor: true,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

const swiper2 = new Swiper(".review-swiper", {
   slidesPerView: 1,
   grabCursor: true,
   loop: true,
   pagination: {
      el: ".tesitswiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

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
      body.style.overflowY = 'Scroll';
   })
}

// Change header bg color
window.addEventListener('scroll', () => {
   const scrollY = window.pageYOffset;
   if (scrollY > 5) {
      document.querySelector('header').classList.add('header-active');
   } else {
      document.querySelector('header').classList.remove('header-active');
   }

   // Scroll up button
   const scrollUpBtn = document.querySelector('.scrollup-btn');
   if (scrollY > 250) {
      scrollUpBtn.classList.add('scrollbtn-active');
   } else {
      scrollUpBtn.classList.remove('scrollbtn-active');
   }

   // Nav link indicator
   const sections = document.querySelectorAll('section[id');

   sections.forEach(section => {
      const sectionHeight = section.offsetHeight,
         sectionTop = section.offsetTop - 60;

      let navId = document.querySelector(`.menu-content a[href*=${section.id}]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         navId.classList.add('active-navlink');
      } else {
         navId.classList.remove('active-navlink');
      }

      navId.addEventListener('click', () => {
         navMenu.classList.remove('open');
         body.style.overflowY = 'Scroll';
      })
   })
})

// Scroll Reveal Animation
