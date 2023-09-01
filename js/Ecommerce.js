$(document).ready(function(){
  $('.frist-slider.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.second-slider.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('.third-slider.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.last-slider.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    nav:true,

    responsive:{
        0:{
            items:1,
            margin:20
        },
        600:{
            items:1,
            margin:20
        },
        1000:{
            items:1
        }
    }
});
function makesvg(percentage, inner_text=""){

    var abs_percentage = Math.abs(percentage).toString();
    var percentage_str = percentage.toString();
    var classes = ""
  
    if(percentage < 0){
      classes = "danger-stroke circle-chart__circle--negative";
    } else if(percentage > 0 && percentage <= 30){
      classes = "warning-stroke";
    } else{
      classes = "success-stroke";
    }
  
   var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
       + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
       + '<circle class="circle-chart__circle '+classes+'"'
       + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
       + '<g class="circle-chart__info">'
       + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';
  
    if(inner_text){
      svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
    }
    
    svg += ' </g></svg>';
    
    return svg
  }
  
  (function( $ ) {
  
      $.fn.circlechart = function() {
          this.each(function() {
              var percentage = $(this).data("percentage");
              var inner_text = $(this).text();
              $(this).html(makesvg(percentage, inner_text));
          });
          return this;
      };
  
  }( jQuery ));
  
  $(function () {
       $('.circlechart').circlechart();
  });
});