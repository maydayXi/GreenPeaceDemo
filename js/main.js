(function ($) {

	$WIN = $(window);

// Menu On Scrolldown ============================
	var menuOnScrolldown = function () {
		var menuTrigger = $('.header-menu-toggle');

		$WIN.on('scroll', function () {

			if ($WIN.scrollTop() > 150) {
				menuTrigger.addClass('opaque');		
			} else {
				menuTrigger.removeClass('opaque');
			}

		});
	};

// Open Close Menu ===============================
	var openCloseMenu = function () {
		var menuTrigger = $('.header-menu-toggle'),
				nav 				= $('.header-nav'),
				closeBtn 		= $('.header-nav_close'),
				siteBody		= $('#top');

		// open-close menu by clicking on the menu icon
		menuTrigger.on('click', function (e) {
			e.preventDefault();
			siteBody.toggleClass('menu-is-open');
		});

		// close menu by clicking the close button
		closeBtn.on('click', function (e) {
			e.preventDefault();
			menuTrigger.trigger('click');
		});

		// close menu clicking outside the itself 
		// siteBody.on('click', function (e) {
		// 	if( !$(e.target).is('.header-nav, .header-nav_contain')) {
		// 		console.log("outside");
		// 	} else {
		// 		console.log("inside");
		// 	}
		// });
	};

// Smooth Scrolling ============================
	var smoothScroll = function () {
		$('.smoothscroll').on('click', function (e) {
			var target = this.hash,
					$target = $(target);

			e.preventDefault();
			e.stopPropagation();

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing').promise().done(function () {


				window.location.hash = target;
			});
		});
	};

// Page Element Animation Effect
	var elementAnimation = function () {
		wow = new WOW({
			offset: 35
		});

		wow.init();
	};

// News Picture SlideShow Effect 
	var SlideShow = function () {
		$('.owl-carousel').owlCarousel({
			autoplay: true,
			autoplayTimeout: 2000,
			center: true,
	    loop: true,
	    margin: 10,
	    nav: true,
	    responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:4
        }
	    }
		});


	};

	(function init() {
		elementAnimation();
		openCloseMenu();
		menuOnScrolldown();
		smoothScroll();
		SlideShow();
	})();

})(jQuery);

