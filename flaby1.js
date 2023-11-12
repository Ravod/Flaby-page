
"use strict";


/* ---------- **********  HEADER  ********** ---------- */

//КНОПКА-БУРГЕР РАСКРЫВАЮЩЕГОСЯ МЕНЮ

(function () {
	const burger = document.querySelector(`.headerTop--button__BURGER`);
	const topLinks = document.querySelector(`.headerTop--nav`);

	burger.onclick = function () {
		topLinks.classList.toggle(`open-menu`);
	};
}) ();




//СЛАЙДЕР-SWIPER

const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const swiper = new Swiper(`.swiper`, {
	effect: "coverflow",
	speed: isFirefox ? 0 : 600,
  	grabCursor: true,
  	centeredSlides: true,
  	loop: true,
  	slidesPerView: 1.5,
  	slidesPerGroup: 1,
  	initialSlide: 0,
  	coverflowEffect: {
    	rotate: -1,
    	stretch: "-90%",
    	depth: 100,
    	modifier: -1,
    	slideShadows: false,
    },
    navigation: {
    	nextEl: ".next",
    	prevEl: ".prev",
  	}
});