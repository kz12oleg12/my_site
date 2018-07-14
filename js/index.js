// BL_1

var width = document.documentElement.clientWidth;
if (width > 992) {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true
    });
}

$('.sml').addClass('animated zoomInRight');
// BL_2
var width = document.documentElement.clientWidth;
if (width > 992) {

    var scene2 = document.getElementById('scene2');
    var parallaxInstance = new Parallax(scene2, {
        relativeInput: true
    });
}
// BL_3
var scene3 = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene3, {
    relativeInput: true
});
// BL_4
var waypoint = new Waypoint({
    element: document.getElementById('bl_4'),
    handler: function (direction) {
        $('#bl_4 .gerl').addClass('animated slideInLeft');
    }, offset: '30%'
});
// BL_5
var waypoint = new Waypoint({
    element: document.getElementById('bl_5'),
    handler: function (direction) {
        $('#bl_5 .gerl').addClass('animated slideInLeft');
    }, offset: '30%'
});
// $('#bl_5 .gerl').addClass('animated slideInLeft');
// BL_7
var waypoint = new Waypoint({
    element: document.getElementById('bl_7'),
    handler: function (direction) {
        $('#bl_7 .gerl').addClass('animated slideInLeft');
    }, offset: '30%'
});
// TOP
var waypoint = new Waypoint({
    element: document.getElementById('bl_2'),
    handler: function (direction) {
        $('header').toggleClass('active');
    }, offset: '20%'
});

// BL_6
$('#play').click(function () {
    $('#video').addClass('active');
    $('.jolk').addClass('active');
    $('body').addClass('stop');
});
$('.jolk').click(function () {
    $('#video').removeClass('active');
    $('.jolk').removeClass('active');
    $('body').removeClass('stop');
});

// HEADER
resize();

window.onresize = resize;

function resize() {
    var width = document.documentElement.clientWidth;
    if (width < 992) {
        // alert('123');
        $('nav').addClass('md');
    } else {
        $('nav').removeClass('md');
    }
}

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





