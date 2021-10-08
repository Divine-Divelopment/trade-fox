
const select = document.querySelector('.language-select-list');
const baseUrl = "./assets";

function formatState (state) {
  if (!state.id) {
    return state.text;
  }
  
  const currentState = document.createElement('span');
  currentState.classList.add('selected-element')
  currentState.innerHTML = '<img width="20" height="20" class="selection-flag" /> <span class="selection-text"></span>';

  // Use .text() instead of HTML string concatenation to avoid script injection issues
  currentState.querySelector(".selection-text").textContent = state.text;
  currentState.querySelector(".selection-flag").setAttribute("src", baseUrl + "/" + state.element.value + ".svg");

  return currentState;
};

function formatCountry (country) {
	if (!country.id) {
	 return country.text; 
	}
	  
  const currentState = document.createElement('span');
 	changedCountry = document.createElement('span')
	changedCountry.classList.add('selected-element')
	changedCountry.innerHTML = '<img width="20" height="20" class="selection-flag" /> <span class="selection-text"></span>';

	changedCountry.querySelector(".selection-text").textContent = country.text;
  changedCountry.querySelector(".selection-flag").setAttribute("src", baseUrl + "/" + country.element.value + ".svg");
	return changedCountry;
};
const select2 = new TsSelect2(
	select, {
	  templateSelection: formatState,
	  templateResult:  formatCountry,
	  minimumResultsForSearch: Infinity,
	  width: `87px`
	}
);

var cowerflow = new Swiper('.our-plans-slider', {
	effect: 'coverflow',
	grabCursor: false,
	loop: false,
	centeredSlides: true,
	slidesPerView: 'auto',
	initialSlide: 1,
	dragable: false,
	noSwiping: false,
	allowSlidePrev: false,
	allowSlideNext: false,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: false
	},	
	pagination: {
		el: '.swiper-pagination'
	}
});

const swiper = new Swiper('.our-team-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
    }
  }
})