<html>
    <head>
        <title>Galeria HTML5 easy</title>
        <style>
.full_galery {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%!important;
    height: 100%;
    text-align: center;
    overflow: auto;
}
.top {
    text-align: right;
    width: 100%;
    background: #999999;
    height: 10%;
    min-height: 5px;
    max-height: 25px;
}
.cont_g {
    background: #cc99ff;
    height: 75%!important;
    max-height: 900px;
    width: 100%!important;
}
.lb, .f , .rb {
    height: 100%!important;
    float: left;
}
.lb {
    background-color: #6699ff;
    min-height: 100%;
    width: 12%;
    text-align: center;
}
.lb img {
    margin: auto;
    display:block;
    width: 32px;
    height: 32px;
}
.f {
    display:block;
    background: #c1c1c1;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    width: 76%;
}
.f img {
    margin: auto;
    max-width: 100%;
    max-height: 100%;
}
.rb {
    background-color: #f16529;
    min-height: 100%;
    width: 12%;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
}
.desc_g {
    text-align: justify;
    font-family: calibri;
    margin: 25px;
}
        </style>
    </head>
    <body>
        <article class="full_galery">
            <section class="top" id="cl">
                <img src="private/img/icos/close.png" width="20">
            </section>
            <section class="cont_g">
                <div class="lb">
<!--                    <img src="private/img/web/p4.jpg" class="prw" id="prw_last_img"/>-->
                    <img src="private/img/icos/l.png" width="32"/>
                </div>
                <div class="f">
                    <img src="private/img/web/p1.jpg" class="img_g" id="img_"/>
                </div>
                <div class="rb">
<!--                    <img src="private/img/web/p6.jpg" class="prw" id="prw_fow_img"/>-->
                    <img src="private/img/icos/r.png" width="32"/>
                </div>
            </section>
            <section class="desc_g">
                <h1 id="t">Titulo de la foto</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi felis, auctor tincidunt ligula ullamcorper, bibendum convallis felis. Etiam aliquam velit placerat, sodales metus vitae, volutpat sem. Sed et metus viverra, placerat lorem eu, porta massa. Nam luctus, augue a blandit porttitor, turpis massa tincidunt nisl, nec tincidunt massa eros id quam. Vestibulum augue nisi, commodo sed nibh in, pretium commodo augue. Aenean lobortis ante et erat convallis semper. Cras tincidunt, lectus id facilisis sagittis, tellus odio facilisis nisi, vel cursus lorem dolor nec tortor.
                    <br><br>
                    Phasellus diam odio, varius at euismod vitae, luctus a magna. Cras varius lorem quis tortor laoreet blandit. Mauris tincidunt nisi dapibus leo convallis lacinia. Cras eu odio viverra nibh interdum dignissim id sit amet mi. Praesent dapibus, nulla ut varius varius, purus ante bibendum dui, eu eleifend nisl metus vel augue. Phasellus sit amet enim pharetra augue faucibus sagittis. Mauris varius dignissim fringilla. Vestibulum vitae lorem massa. Aliquam euismod elit vel vehicula pretium.Aenean ligula tellus, pharetra eget venenatis at, blandit eget nulla. Proin quis rutrum est. Donec quis aliquet justo. Integer sed diam vel nisi commodo interdum eu id ligula. Aliquam viverra orci sed vehicula posuere. Proin eu sapien non ligula facilisis varius. Donec tristique risus non egestas cursus. Integer sem erat, condimentum id nisl fringilla, dictum pretium orci. Donec viverra sapien non venenatis condimentum. Donec at pharetra nisi, eu lacinia metus. Nam id tortor nunc. Vivamus pretium dictum luctus. Etiam et tortor quis justo tincidunt posuere. Aliquam id erat vel urna mollis pretium.Aliquam venenatis quam non suscipit viverra. Integer molestie, tortor vel elementum ultricies, sapien felis tempus turpis, id pulvinar nisi lacus et dui. Nullam facilisis lectus et est faucibus placerat. Sed in nisl eget ante tempus congue in sit amet tortor. Nunc suscipit eget odio at placerat. Maecenas urna diam, mattis non porta eget, aliquam in justo. Donec sit amet sagittis velit. Maecenas sit amet lorem eget lorem volutpat lacinia. Sed ut lacus ut ante rhoncus tempor et tristique sem. Aenean eget nisi ligula. Cras ultrices posuere risus, ut hendrerit magna ultricies vitae. Morbi lacinia dui molestie tellus venenatis, in malesuada neque auctor. Morbi tristique, quam lacinia imperdiet lobortis, lectus metus consequat massa, a adipiscing ante ipsum id orci. Pellentesque lobortis, tellus eu sollicitudin varius, ligula lorem aliquam nulla, eu blandit diam sapien eget nunc. 
                </p>
            </section>
        </article>
    </body>
</html>