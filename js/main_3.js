;(function(window) {
	'use strict';
	var mainContainer = document.querySelector('.landing-layout'),
		triggerCtrl = mainContainer.querySelector('.button--trigger'),
		landingWrapper = mainContainer.querySelector('.landing-wrap'),
		winsize = {width : window.innerWidth, height : window.innerHeight};

var photography = document.getElementById('photography'),
    webdesign = document.getElementById('webdesign'),
		designing = document.getElementById('designing'),
		caption 	=document.getElementById('caption');

	function init() {
		var loadedMediaItems = 0,
			checkloaded = function() {
					mainContainer.classList.add('landing-layout--loaded');
					initEvents();
			};
		imagesLoaded(landingWrapper, { background: true }, checkloaded);
	}

	function initEvents() {
		// Trigger the main animation.
		triggerCtrl.addEventListener('click', function() {
			toggleMenu();
		});
		photography.style.cursor='pointer';
		photography.setAttribute("onclick", "slideChange()");
		webdesign.style.cursor='pointer';
		designing.style.cursor='pointer';
		caption.style.cursor='pointer';
		initialiseClasses();

	};

	function toggleMenu() {
		mainContainer.classList.toggle('landing-layout--open');
	};

  function slideChange() {
    initialiseClasses();
		console.log("hello");
	//	this.className='content-open';
	};
	function initialiseClasses() {
		photography.classname ='content-close';
		webdesign.classname ='content-close';
		designing.classname ='content-close';
		caption.classname ='content-close';
	};
	init();

})(window);
