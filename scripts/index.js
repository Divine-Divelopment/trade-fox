var swiper = new Swiper(".mySwiper", {
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
		depth: 50,
		modifier: 1,
		slideShadows: false
	},	
	pagination: {
		el: ".swiper-pagination"
	}
});