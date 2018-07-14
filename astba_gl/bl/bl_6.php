<!-- <link rel="stylesheet" href="/css/bl/bl_6.css"> -->

<section id="bl_6" class="bl">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="name">
                    <h2>О компании</h2>
                    <h3>Персональные авиарейсы в любую точку мира</h3>
                </div>
                <div class="text">
                    Компания «Ваш Чартер» присутствует на рынке чартерных авиарейсов уже более 13 лет. Мы зарекомендовали себя в данной сфере
                    как надежные партнеры многих крупных компаний, политиков и бизнесменов — всех тех, кто ценит собственное
                    время, для кого важны комфорт, безопасность и конфиденциальность. Еще одно наше преимущество — тотальный,
                    круглосуточный контроль за всеми этапами перелета. Мы ценим наших клиентов, поэтому всегда предлагаем
                    самые выгодные условия и максимально низкие цены.
                </div>
                <button class="d-none d-lg-block">Побробнее</button>
            </div>
            <div class="col-12 col-lg">
                <div class="bl-video">
                    <div>
                        <label for="" class="d-none d-lg-block">
                            Смотреть видео
                        </label>
                        <button onclick="playPause()" id="play">
                            <img src="/img/icon/play.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="vid">
            <video id="video" src="/file/Tales of Berseria Animated Opening (1080p).mp4" controls></video>
            <div class="video-joik"></div>
        </div>
    </div>
</section>

<script>
    var videoElem = document.getElementById('video');
    var playElem = document.getElementById('play');
    var pauseElem = document.getElementById('pause')

    playElem.onclick = function () {
        if (videoElem.paused) {
            videoElem.play();
        }
    };

    pauseElem.onclick = function () {
        if (videoElem.played) {
            videoElem.pause();
        }
    };
</script>

<script>
    var N = 2000; // 5 секунд

    setInterval(function () {
        $('#bl_6 .bl-video button').toggleClass('animat');
    }, N);

</script>

<script>
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
</script>