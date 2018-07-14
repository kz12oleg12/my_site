$(function () {
	// resize();

	// window.onresize = resize;

	// function resize() {
	// 	var width = document.documentElement.clientWidth;
	// 	if (width < 992) {
	// 		// alert('123');
	// 		$('nav').addClass('md');
	// 	} else {
	// 		$('nav').removeClass('md');
	// 	}
	// }

	$('.nav-menu').click(function () {
		$('nav.md').addClass('active');
		$('.jolk').addClass('active');
		$('.navbar').removeClass('container');
		$('body').addClass('stop');
	});
	$('.nv-cl').click(function () {
		$('nav.md').removeClass('active');
		$('.jolk').removeClass('active');
		$('body').removeClass('stop');
		$('.navbar').addClass('container');
	});
	$('.jolk').click(function () {
		$('nav.md').removeClass('active');
		$('.jolk').removeClass('active');
		$('body').removeClass('stop');
		$('.navbar').addClass('container');
	});
	$('nav.md li a').click(function () {
		$('nav.md').removeClass('active');
		$('.jolk').removeClass('active');
		$('body').removeClass('stop');
		$('.navbar').addClass('container');
	});
	// Mmenu
	$("#my-menu").mmenu({
		extensions: {
			"all": ["position-right", "fx-menu-slide",
				"fx-listitems-slide", "pagedim-black", "border-full", "shadow-page"],
			"(max-width: 576px)": ["fullscreen"]
		},
		navbar: {
			title: "МЕНЮ"
		},
		navbars: {
			content: ["close"]
		}
	});

	var API = $("#my-menu").data("mmenu");

	API.bind('open:finish', function () {
		$('.line').addClass('active');
	});
	API.bind('close:before', function () {
		$('.line').removeClass('active');
	})

	// $("#my-button").click(function() {
	// 	API.open();
	// });
	// Mmenu END *************************

	// Owl Carousel
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText: ["<i class='icon-left-open-big'></i>", "<i class='icon-right-open-big'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
	// Owl Carousel END *******************

	$(window).on("resize", function () {
		if ($(this).width() <= 576) {
			$('header .row').addClass('no-gutters');
		} else {
			$('header .row').removeClass('no-gutters');
		}
	})

});

