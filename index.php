<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Hello Default">
	<meta name="keywords" content="hello, default">
	<link rel="shortcut icon" href="/default/logo.ico">
	<title>Hello Default</title>

	<!-- STYLE -->
	<link rel="stylesheet" href="/css/bootstrap-grid.min.css">
	<link rel="stylesheet" href="/css/style.css">
	<link rel="stylesheet" href="/modules/owlcarousel/assets/owl.carousel.min.css">
	<link rel="stylesheet" href="/modules/owlcarousel/assets/owl.theme.default.min.css">
	<link rel="stylesheet" href="/css/animate.css">
	<link rel="stylesheet" href="/modules/custom-scrollbar/jquery.mCustomScrollbar.css" />

	<!-- ICON FONT -->
	<link href="https://unpkg.com/ionicons@4.1.1/dist/css/ionicons.min.css" rel="stylesheet">

	<!-- FONT -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,600,700,900" rel="stylesheet">

	<!-- INDEX CSS -->
	<link rel="stylesheet" href="/css/style/header.css">
	<link rel="stylesheet" href="/css/style/nav.css">

	<link rel="stylesheet" href="/css/style/astanagl.css">

	<!-- JS -->

	<style>
	</style>
</head>

<body>
	<?php // in('ta'); ?>

	<?php require_once("astba_gl/index.php"); ?>



	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
	<script src="/modules/owlcarousel/owl.carousel.min.js"></script>
	<script src="/js/resize.js"></script>
	<script src="/js/jquery.waypoints.min.js"></script>
	<script src="/modules/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="/js/index.js"></script>
	<script src="/js/scroll_script.js"></script>

	<script>
		(function ($) {
			$(window).on("load", function () {
				$(".part").mCustomScrollbar();
			});
		})(jQuery);
		// $(".part").mCustomScrollbar({
		// 	theme: "dark"
		// });
	</script>

	<script>
		$('.nav-menu').click(function () {
			$('.navbar-list').addClass('active');
			$('.jolk').addClass('active');
			$('body').addClass('stop');
		});
		$('.nv-cl').click(function () {
			$('.navbar-list').removeClass('active');
			$('.jolk').removeClass('active');
			$('body').removeClass('stop');
		});
		$('.jolk').click(function () {
			$('.navbar-list').removeClass('active');
			$('.jolk').removeClass('active');
			$('body').removeClass('stop');
		});
		$('.navbar .navbar-list li a').click(function () {
			$('.navbar-list').removeClass('active');
			$('.jolk').removeClass('active');
			$('body').removeClass('stop');
		}); 
	</script>

</body>

</html>
<?php
function in($a)
	{
	require_once('php/'.$a.'.php');
	}
?>