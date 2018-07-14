<!-- <link rel="stylesheet" href="/css/bl/bl_1.css"> -->

<section id="bl_1" class="bl">

    <div class="bl-container">
        <div data-relative-input="true" id="scene" class="main">
            <div data-depth="0.3">
                <div class="sml">
                    <img src="/img/sm.png" alt="">
                </div>
            </div>
        </div>
        <div class="cont">
            <div class="cont-ls">
                <div class="name">
                    <h1>Компания</h1>
                    <h1 class="light">"Astana Business Aviation"</h1>
                </div>
                <form action="">
                    <div class="row no-gutters">
                        <div class="col-12 col-md col-lg">
                            <div class="inp">
                                <div class="inp-icon">
                                    <!-- <i class="icon ion-md-person fa-lg"></i> -->
                                    <i class="pe-7s-user fa-lg"></i>
                                </div>
                                <input type="text" placeholder="Ваше имя">
                            </div>
                        </div>
                        <div class="col-12 col-md col-lg">
                            <div class="inp">
                                <div class="inp-icon">
                                    <!-- <i class="icon ion-md-call fa-lg"></i> -->
                                    <i class="pe-7s-call fa-lg"></i>
                                </div>
                                <input type="text" placeholder="Телефон">
                            </div>
                        </div>
                        <div class="col-12 col-md col-lg">
                            <div class="inp">
                                <input type="button" class="bl_1_btnn" value="БЕСПЛАТНЫЙ ПОДБОР РЕЙСА">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</section>
<script>
    var N = 5000; // 5 секунд

    setInterval(function () {
        $('.telephone').toggleClass('animated tada');
    }, N);

</script>