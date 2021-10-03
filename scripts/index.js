var cowerflow = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: false,
	loop: false,
	centeredSlides: true,
	slidesPerView: "auto",
	initialSlide: 1,
	dragable: false,
	noSwiping: false,
	mousewheel: false,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: false
	},	
	pagination: {
		el: ".swiper-pagination"
	}
});

const swiper = new Swiper('.our-team-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})