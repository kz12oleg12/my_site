resize();

window.onresize = resize;

function resize() {
    var height = document.documentElement.clientHeight - 0;
    var width = document.documentElement.clientWidth;
    var home = $('.bl-it');
    var main = $(".main");

    if(width > 992){
        if (height * 3 < width) {
            height = 400;
        } else if (height < 310) {
            height = 400;
        } else if (height + 100 > width) {
            height = width + 100;
        }

        height2 = (height / 0) - 10 | 0;
        home.css("height",  height + 'px');
        if (width < 450)
            // main.style.marginTop = '10px';
            main.css("margin-top", '10px');
        else
            // main.style.marginTop = height2 + 'px';
            main.css("margin-top",  height2 + 'px');
    }
}