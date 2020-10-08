/*lauch*/

(function( avslider, $ ) {
  $(document).ready(function(){
    $('.wp-block-achtvier-block-achtvier-guten-slider').each(function(){
      var carousel = $(this);
      carousel.addClass('owl-carousel');
      var slideSpeed = 600 ;
      if (carousel.data('slidespeed')) {
        slideSpeed = carousel.data('slidespeed');
      }
      var isnav = (carousel.data('showarrows') === true ||carousel.data('showarrows') == true ) ;
      var isdots =(carousel.data('showdots') === true || carousel.data('showdots') == true ) ;
      var isautoplay =(carousel.data('autoplay') === true || carousel.data('autoplay') == true ) ;
      carousel.owlCarousel({
        loop:true,
        margin:parseInt(carousel.data('slidepadding')),
        autoplay: isautoplay,
        nav: isnav,
        dots: isdots,        
        responsiveClass:true,
        smartSpeed: slideSpeed,

        callbacks:true,
        
        responsive:{
            0:{
                items:parseInt(carousel.data("slidesmobile"))
            },
            600:{
                items:parseInt(carousel.data("slidestablet"))
            },
            1000:{
                items:parseInt(carousel.data("slidesdesktop"))
            }
        },
    })


});


    });
 

}( window.avslider = window.avslider || {}, jQuery ));
