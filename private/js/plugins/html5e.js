//declarar plug in html5e
(function($) {
     html5e2 = function(options){
        var settings = $.extend({}, $.fn.html5e.defaults, options);
        $.fn.html5e.defaults = {
            'body':{
                'data-theme':'html5e',
                'data-movil':true
            },'header':{
                'data-max-width':'800px',
                'data-logo':{
                    'src':'logo.png',
                    'max-size':'200px',
                    'shape':true
                },'data-logo-aling':'left',
                'data-text':'Do it yourself!',
                'data-text-aling':'left',
                'data-movil-nav':true,
                'data-movil-rightbar':true,
                'data-movil.rightbar-settings':{
                    'logo':'search.png',
                    'target':'#rightbar'
                },'data-nav-inside':false,
                'data-maxwidth':'1000px',
                'data-maxheight':'10em',
                'data-theme':'inherit'
            },'nav':{
                'data-landscape':true,
                'data-aling':'center',
                'data-movil-logos':true,
                'data-logos-settings':{
                    'src':'carpeta/'},
                'data-theme':'inherit'
            },'section':{

            },'aside':{

            },'footer':{

            }
        };
        $("header").html(settings);
    }
})
function html5e(){
    //se declara la cabeza contenido y demas partes de la pagina
       var body = $("body"),header = $("#header"), nav = $("nav"), content = $("#content"), footer = $("#footer"), movil,logo_rightbar = "private/img/icos/search.png",logo_nav = "private/img/icos/nav.png";
       var galeria = [
           $("#galeria").children(),
           {
               'theme':'rmgaleria',
               'screen':'full'
           }
       ];
       var nav2 = {
           'landscape': 'horizontal',
           'align':'center',
           'max-width':'700px',
           'padding':'10px 0',
           'nav':{
               'text':[
                   'Api',
                   'Get Started',
                   'Contact',
                   'Download'
               ],
               'link':[
                   'api.php',
                   'getstart.php',
                   'contact.php',
                   'dow.php'
               ],
               'class':[
                   '',
                   '',
                   '',
                   'dow'
               ],
               'submenu':false
           },
           'theme':'html5e'
       };
       
       //Body
       if (typeof body.attr("data-theme") !== "undefined" && body.attr("data-theme")) {
       		body.addClass(body.attr("data-theme")+" "+body.attr("class")).css("text-align", "center");
	   } else {
                body.addClass("html5e "+body.attr("class")).css("text-align", "center");
        }
       if (typeof body.attr("data-movil") !== "undefined" && body.attr("data-movil")) {
       		if (body.attr("data-movil").val()) {
                    body.addClass("movil "+body.attr("class"));
                    movil = true;
                } else {
                    movil = false;
                }
	   } else {
                body.addClass("movil "+body.attr("class"));
                movil = true;
        }
       //header
       if (typeof header.attr("data-movil-nav") !== "undefined" && header.attr("data-movil-nav")) {
            if (header.attr("data-movil-nav")== "true") {
                header.append("<div id='mo-logo-nav'><img src='"+logo_nav+"'></div>");
            }
       } else {
            header.append("<div id='mo-logo-nav'><img src='"+logo_nav+"'></div>");
        }
        $("#mo-logo-nav").addClass("visuallyhidden");
        if (typeof header.attr("data-rightbar") !== "undefined" && header.attr("data-rightbar")) {
       		if (header.attr("data-rightbar")== "true") {
                header.append("<div id='mo-logo-rightbar'><img src='"+logo_rightbar+"'></div>");
            }
	   }
       if (typeof header.attr("data-logo-src") !== "undefined" && header.attr("data-logo-src")) {
       		header.append("<img src=\""+header.attr("data-logo-src")+"\" id='logo'/>");
	   } else {
                header.attr("data-logo", "false");
        }
        if (typeof header.attr("data-logo-max-size") !== "undefined" && header.attr("data-logo-max-size")) {
       		$("#logo").css("max-width", header.attr("data-logo-max-size")).css("max-height", header.attr("data-logo-max-size"));
	   } else {
                header.attr("class", "html5e "+header.attr("class"));
        }
        if (typeof header.attr("data-logo-shape") !== "undefined" && header.attr("data-logo-shape")) {
       		if (header.attr("data-logo-shape")!=="true") {
                    $("#logo").addClass("rectang");
                }
	   }
        if (typeof header.attr("data-text") !== "undefined" && header.attr("data-text")) {
       		header.append("<h1 id='t1'>"+header.attr("data-text")+"</h1>");
	   } else {
                header.attr("data-text", "false");
        }
        if (typeof header.attr("data-text-align") !== "undefined" && header.attr("data-text-align")) {
       		$("#t1").css("float", header.attr("data-text-align"));
	   }
        if (typeof header.attr("data-logo-align") !== "undefined" && header.attr("data-logo-align")) {
       		header.css("text-align", header.attr("data-logo-align")).css("margin", "0 auto");
	   } else {
                header.css("text-align", "left").css("margin", "0 auto");
        }
        if (typeof header.attr("data-max-width") !== "undefined" && header.attr("data-max-width")) {
       		header.css("max-width", header.attr("data-max-width"));
	   }
        if (typeof header.attr("data-theme") !== "undefined" && header.attr("data-theme")) {
       		header.addClass(header.attr("data-theme"));
	   } else {
                header.addClass("html5e");
        }
        if (typeof header.attr("data-padding") !== "undefined" && header.attr("data-padding")) {
       		header.css("padding", header.attr("data-padding"));
                l = parseInt(header.css("padding-left"));
                r = parseInt(header.css("padding-right"));
                t = parseInt(header.css("padding-top"));
                v = (header.width()-((r)+(l)));
                header.css("max-width", v+"px");
                $("#mo-logo-nav").css("margin-top", "-"+(t-5)+"px").css("margin-left","-"+(l-5)+"px");
                $("#mo-logo-rightbar").css("margin-top", "-"+(t-5)+"px").css("margin-right","-"+(r-5)+"px");
	   }
        
//        if (typeof header.attr("") !== "undefined" && header.attr("")) {
//       		header.attr("class", header.attr("data-theme")+" "+header.attr("class"));
//	   } else {
//                header.attr("class", "html5e "+header.attr("class"));
//        }
//        if (typeof header.attr("") !== "undefined" && header.attr("")) {
//       		header.attr("class", header.attr("data-theme")+" "+header.attr("class"));
//	   } else {
//                header.attr("class", "html5e "+header.attr("class"));
//        }
//        if (typeof header.attr("") !== "undefined" && header.attr("")) {
//       		header.attr("class", header.attr("data-theme")+" "+header.attr("class"));
//	   } else {
//                header.attr("class", "html5e "+header.attr("class"));
//        }
//        if (typeof header.attr("") !== "undefined" && header.attr("")) {
//       		header.attr("class", header.attr("data-theme")+" "+header.attr("class"));
//	   } else {
//                header.attr("class", "html5e "+header.attr("class"));
//        }
            // nav
            if (typeof nav.attr("data-config") !== "undefined" && nav.attr("data-config")) {
       		eval("var config = "+nav.attr("data-config")+";");
                if (config['landscape'] == "vertical") {
                    nav.append('<div id="cont_nav"><ul class="ver" id="menu"></ul></div>');
                } else {
                    nav.append('<div id="cont_nav"><ul class="hor" id="menu"></ul></div>');
                } 
                nav.css("text-align",config['align']);
                $("#cont_nav").css("text-align",config['align']);
                $("#cont_nav").css("margin","0 auto");
                $("#cont_nav").css("padding", config['padding']);
                $("#cont_nav").css("max-width", config['max-width']);
                $("#menu").css("margin","0 auto");
                for (i=0;i<config['nav']['text'].length;i++) {
                    if (config['nav']['sub']) {
                        if (config['nav']['sub']) {
                            sub = "<ul>";
                            for (o=0;o<config['nav']['submenu'].length;o++) {
                                sub += '<li><a href="'+config['nav']['sum']['link'][o]+'" class="'+config['nav']['sum']['class'][o]+'">'+config['nav']['sum']['text'][o]+'</a></li>';
                            }
                            sub += "</ul>";
                            li = '<li><a href="'+config['nav']['link'][i]+'" class="'+config['nav']['class'][i]+'">'+config['nav']['text'][i]+'</a>'+sub+'</li>';  
                        }
                    } else {
                      li = '<li><a href="'+config['nav']['link'][i]+'" class="'+config['nav']['class'][i]+'">'+config['nav']['text'][i]+'</a></li>';  
                    }
                    $("#cont_nav").append(li);
                }
                $("#cont_nav").addClass(config['theme']);
                $("#menu").addClass(config['theme']);
	   }
           
           
           
           // galeria
           galeria[0].click(function () {
               n = galeria[0].toArray().length;
               body.append('<div class="full_galery"><div class="inner_g" id="g"></div></div>');
               $("#g").html('<div class="gf"><div class="top" id="cl"><img src="private/img/icos/close.png" width="20"></div><div id="foto_g"><div class="lb"><img src="private/img/icos/l.png" width="32"></div><div class="f"><img src="'+$(this).find("img:first").attr("src")+'" id="img"/></div><div class="rb"><img src="private/img/icos/r.png" width="32"></div></div><div class="desc"><h2 class="header_f">Titulo de la foto</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi felis, auctor tincidunt ligula ullamcorper, bibendum convallis felis. Etiam aliquam velit placerat, sodales metus vitae, volutpat sem. Sed et metus viverra, placerat lorem eu, porta massa. Nam luctus, augue a blandit porttitor, turpis massa tincidunt nisl, nec tincidunt massa eros id quam. Vestibulum augue nisi, commodo sed nibh in, pretium commodo augue. Aenean lobortis ante et erat convallis semper. Cras tincidunt, lectus id facilisis sagittis, tellus odio facilisis nisi, vel cursus lorem dolor nec tortor.<br><br>Phasellus diam odio, varius at euismod vitae, luctus a magna. Cras varius lorem quis tortor laoreet blandit. Mauris tincidunt nisi dapibus leo convallis lacinia. Cras eu odio viverra nibh interdum dignissim id sit amet mi. Praesent dapibus, nulla ut varius varius, purus ante bibendum dui, eu eleifend nisl metus vel augue. Phasellus sit amet enim pharetra augue faucibus sagittis. Mauris varius dignissim fringilla. Vestibulum vitae lorem massa. Aliquam euismod elit vel vehicula pretium.Aenean ligula tellus, pharetra eget venenatis at, blandit eget nulla. Proin quis rutrum est. Donec quis aliquet justo. Integer sed diam vel nisi commodo interdum eu id ligula. Aliquam viverra orci sed vehicula posuere. Proin eu sapien non ligula facilisis varius. Donec tristique risus non egestas cursus. Integer sem erat, condimentum id nisl fringilla, dictum pretium orci. Donec viverra sapien non venenatis condimentum. Donec at pharetra nisi, eu lacinia metus. Nam id tortor nunc. Vivamus pretium dictum luctus. Etiam et tortor quis justo tincidunt posuere. Aliquam id erat vel urna mollis pretium.Aliquam venenatis quam non suscipit viverra. Integer molestie, tortor vel elementum ultricies, sapien felis tempus turpis, id pulvinar nisi lacus et dui. Nullam facilisis lectus et est faucibus placerat. Sed in nisl eget ante tempus congue in sit amet tortor. Nunc suscipit eget odio at placerat. Maecenas urna diam, mattis non porta eget, aliquam in justo. Donec sit amet sagittis velit. Maecenas sit amet lorem eget lorem volutpat lacinia. Sed ut lacus ut ante rhoncus tempor et tristique sem. Aenean eget nisi ligula. Cras ultrices posuere risus, ut hendrerit magna ultricies vitae. Morbi lacinia dui molestie tellus venenatis, in malesuada neque auctor. Morbi tristique, quam lacinia imperdiet lobortis, lectus metus consequat massa, a adipiscing ante ipsum id orci. Pellentesque lobortis, tellus eu sollicitudin varius, ligula lorem aliquam nulla, eu blandit diam sapien eget nunc.  </p></div></div>');
               $("html").css("overflow","hidden");
           }); 
}