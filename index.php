<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>HTML 5 easy</title>
        <link rel="stylesheet" href="private/css/normalize.css">
        <link rel="stylesheet" href="private/css/main.css">
        <script src="private/js/jquery/jquery-1.10.2.min.js"></script>
        <script src="private/js/plugins/html5e.js"></script>
        <script>
            $(document).ready(function () {
                html5e();
            });
        </script>
    </head>
    <body class="html5e">
        <header
                id="header"
                class="head"
                data-rightbar="true"
                data-padding="25px"
                data-max-width="900px"
                data-text="Do it yourself!"
                data-logo-src="private/img/web/logoHTML5e.png"
                data-text-align="right"
                data-logo-max-size="4em"
        ></header>
        <nav data-config="nav2"></nav>
        <div class="content">
            <aside class="anuncios" data-type-add="true"></aside>
            <article class="start left">
                <header>
                    <h1>It's better</h1>
                </header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet pellentesque urna, a tristi
                    que diam. Nulla posuere tempus turpis, id posuere magna varius posuere. Etiam et velit in leo elemen
                    tum ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at dignissim magna,
                    a pretium nisl. Curabitur eget erat pretium, egestas mauris sit amet, pharetra arcu. Vestibulum vehi
                    cula eleifend erat, nec facilisis arcu mattis eu. Proin sed neque tempus eros ornare semper eu eu au
                    gue. Vivamus blandit arcu sit amet massa congue iaculis. Nulla ornare, justo ac pellentesque malesua
                    da, erat leo ultricies ante, quis pellentesque nulla eros non risus. Phasellus vestibulum et leo at
                    varius. Morbi ultricies semper erat vel faucibus. Praesent a sem est.
                </p>
                <footer>
                    <a href="algo.html">See why?</a>
                </footer>
            </article>
            <ul id="galeria">
                <li><div><img src="private/img/web/p1.jpg" height="100"/><br>Imagen 1</div></li>
                <li><div><img src="private/img/web/p2.jpg" height="100"/><br>Imagen 2</div></li>
                <li><div><img src="private/img/web/p3.jpg" height="100"/><br>Imagen 3</div></li>
                <li><div><img src="private/img/web/p4.jpg" height="100"/><br>Imagen 4</div></li>
                <li><div><img src="private/img/web/p5.jpg" height="100"/><br>Imagen 5</div></li>
                <li><div><img src="private/img/web/p6.jpg" height="100"/><br>Imagen 6</div></li>
            </ul>
        </div>
        <footer></footer>
    </body>
</html>
