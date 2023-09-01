$(document).ready(function() {
    $(".header-right .menu").mouseover(function() {
        $(".header-right .header-languages").css("display", "block");
    });
    $(".header-right .header-languages").mouseleave(function() {
        $(".header-right .header-languages").css("display", "none");

    });

    $(".navigation-icons .cart-icon").mouseover(function() {
        $(".sub-menu").css("display", "block");
    });
    $(".sub-menu").mouseleave(function() {
        $(this).css("display", "none");
    });


    //slick
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    /* $(".slick-dots li button").on("click", function(e) {
         e.preventDefault();
         $(".slick-slide .bg5 .bg-inner5 .left-side").animate({
             top: '20%'
         }, 1000, function() {
             setTimeout(function() {

                 $(".slick-slide .bg5 .bg-inner5 .left-side").animate({
                     top: '120%'
                 }, 2000)
             }, 4000);
         });
         $(".slick-slide .bg5 .bg-inner5 .right-side").animate({
             top: "9%"
         }, 2000, function() {
             setTimeout(function() {

                 $(".slick-slide .bg5 .bg-inner5 .right-side").animate({
                     top: '120%'
                 }, 2000)
             }, 5000);
         });
         $(".slick-slide .bg5 .bg-inner5 .right-side .second-mob").animate({
             top: "40%"
         }, 3000, function() {
             setTimeout(function() {

                 $(".slick-slide .bg5 .bg-inner5 .right-side .second-mob").animate({
                     top: '120%'
                 }, 2000)
             }, 6000);
         });
     });

     $(".slick-dots li button").on("click", function(e) {
         e.preventDefault();
         $(".slick-slide .bg4 .bg-inner4 .center-img").animate({
             top: '20%'
         }, 2000, function() {
             setTimeout(function() {
                 $(".slick-slide .bg4 .bg-inner4 .center-img").animate({
                     top: '120%'
                 }, 2000);
             }, 6000);
         });
     });*/

    //owl-carousel
    $('.owl-product').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });



    $('.owl-article').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.owl-assets').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    //top arrow
    $(".arrow i").click(function() {
        $('html , body').animate({
            scrollTop: 0
        }, 600);
    });

    //progress chart
    $(function() {

        $('.circlechart').circlechart();

    });



});