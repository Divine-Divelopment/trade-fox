window.addEventListener("load", function() {

	AOS.init({
		disable: 'mobile',
		easing: 'ease-in-out',
		once: true,
	},);


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
		allowSlidePrev: true,
		allowSlideNext: true,
		initialSlide: 1,
		observeParents: true,
		observer: true,
		spaceBetween: 0,
		updateOnWindowResize: true,
		pagination: {
			el: '.dot-pagination',
		},
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 200,
			modifier: 1,
			slideShadows: false,
		},
		on: {
			resize: function () {
				swiper.update();
			}
		},
		breakpoints: {
			0: {
				effect: false,
				dragable: true,
				noSwiping: true,
				allowSlidePrev: true,
				allowSlideNext: true,
				slidesPerView: 1,
				initialSlide: 0,
				observeParents: true,
				observer: true,
				spaceBetween: 30,
				updateOnWindowResize: true,
				on: {
					resize: function () {
						swiper.update();
						swiper.pagination.init();
					}
				}
			},
			479: {
				effect: 'coverflow',
				dragable: true,
				noSwiping: true,
				slidesPerView: 'auto',
				allowSlidePrev: true,
				allowSlideNext: true,
				spaceBetween: 0,
				coverflowEffect: {
					rotate: 0,
					stretch: 0,
					depth: 200,
					modifier: 1,
					slideShadows: false,
				},
				observeParents: true,
				observer: true,
				resizeObserver: true,
				on: {
					resize: function () {
						swiper.update();
					}
				}
			},
			1120: {
				effect: 'coverflow',
				pagination: false,
				dragable: false,
				noSwiping: false,
				allowSlidePrev: false,
				allowSlideNext: false,
				spaceBetween: 0,
				coverflowEffect: {
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false
				},
				observeParents: true,
				observer: true,
				on: {
					resize: function () {
						swiper.update();
						swiper.pagination.destroy();
					}
				}
			}
		}
	});

	const swiper = new Swiper('.our-team-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		navigation: false,
		resizeObserver: true,
		pagination: {
			el: '.team-pagination'
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1120: {
				slidesPerView: 4,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: false,
			}
		}
	});

	const modalsBlock = function () {
		const modals = document.querySelectorAll('[data-modal]');

		modals.forEach(function(trigger) {
			trigger.addEventListener('click', function(event) {
				console.log(event)
				event.preventDefault();
				const modal = document.getElementById(trigger.dataset.modal);
				modal.classList.add('open');
				const exits = modal.querySelectorAll('.modal-exit');
				exits.forEach(function(exit) {
					exit.addEventListener('click', function(event) {
						event.preventDefault();
						modal.classList.remove('open');
					});
					document.onkeydown = function(e) {
						if (e.key === 'Escape') {
							modal.classList.remove('open');
						}
					};
				});
			});
		});
	};

	const sendForm = function () {
		let forms = document.querySelectorAll(".submit-form");
		let fields = document.querySelectorAll(".form-input");
		let sendButton = document.querySelector("input[type='submit']");

		fields.forEach((fieldForm) => {
			fieldForm.addEventListener("input", () => {
				let patternSidebar = fieldForm.getAttribute("pattern");
				let checkSidebar = new RegExp(patternSidebar);
				let isValidSidebar = true;
				if (patternSidebar !== null) {
					isValidSidebar = checkSidebar.test(fieldForm.value);
				}

				if (isValidSidebar) {
					fieldForm.classList.remove("errorField");
					sendButton.disabled = false;
				} else {
					fieldForm.classList.add("errorField");
					sendButton.disabled = true;
				}
			});
		});

		forms.forEach((form) => {
			form.addEventListener("submit", e => {
				console.log(form)
				e.preventDefault();

				let xhr = new XMLHttpRequest();
				let data = new FormData(form);
				let method = 'POST';
				let action = '../send.php';
				const modal = document.getElementById('thanks-modal');
				const modalForm = document.getElementById('form-modal');

				xhr.open(method, action);

				xhr.onreadystatechange = () => {
					if (xhr.readyState !== 4) return;

					if (xhr.status === 200) {
						e.target.reset();
						modalForm.classList.remove('open');
						modal.classList.add('open');
						setTimeout(() => {
							modal.classList.remove('open')
						},5000);
					} else {
						console.log("HTTP error", xhr.status, xhr.statusText);
					}
				};
				xhr.send(data);
			});
		})
	};

	modalsBlock()
});