$(document).ready(function () {
    var count = 1;
    var delayInMilliseconds = 900;
    var anim = true;

    start()

    $(".nav-btn").click(function () {
        calc()
        return false;
    });

    window.onmousewheel = function (e) {


        if (anim) {
            if (e.deltaY > 0) {
                calc(true)
            } else {
                calc(false)
            }
            e.preventDefault();
            anim = false
            setTimeout(function () {
                anim = true
            }, delayInMilliseconds);

        }

        return false;
    }

    function calc(bool) {
        if (bool) {
            if (count <= 6) {
                count++
            } else if (count == 7) {
                count++
                $('.nav-btn .icon.ion-md-arrow-down').css('transform', 'rotate(180deg)');
            }
            else {
                count = 1;
                $('.nav-btn .icon.ion-md-arrow-down').css('transform', 'rotate(0deg)');
            }
        } else {


            if (count == 7) {
                count--
            } else if (count >= 2) {
                count--
                $('.nav-btn .icon.ion-md-arrow-down').css('transform', 'rotate(0deg)')
            }
        }



        var elementClick = $('#bl_' + count);
        var destination = $(elementClick).offset().top;
        if ($.browser) {
            $('body').animate({ scrollTop: destination }, delayInMilliseconds); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, delayInMilliseconds);
        }
    }

    function start() {
        var elementClick = $('#bl_' + count);
        var destination = $(elementClick).offset().top;
        if ($.browser) {
            $('body').animate({ scrollTop: destination }, delayInMilliseconds); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, delayInMilliseconds);
        }
    }
});
