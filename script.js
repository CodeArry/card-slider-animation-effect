const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  
  slidesPerView: 3,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",

    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Triggers to update the main background
// when doing the next slide
swiper.on('slideNextTransitionStart', () => {
    updateMainBackground()
})

// Triggers to update the main background
// when doing the previous slide
swiper.on('slidePrevTransitionStart', () => {
    updateMainBackground()
})

function updateMainBackground() {
    // Get the currently active slide element
    const activeSlide = document.querySelector('.swiper-slide-active')
    // Get the main container element
    const mainContainer = document.querySelector('.main-slides')
    // Update the background style of the main container
    // to match the active slide
    mainContainer.style.background = activeSlide.style.background
}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a' || e.key === 'c')) {
      e.preventDefault();
  }
}, false);
