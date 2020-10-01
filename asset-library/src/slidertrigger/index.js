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

      carousel.owlCarousel({
        loop:true,
        margin:carousel.data('slidepadding'),
        autoplay: carousel.data('autoplay'),
        nav: carousel.data("showarrows"),
        dots: carousel.data("showdots"),        
        responsiveClass:true,
        smartSpeed: slideSpeed,

        callbacks:true,
        
        responsive:{
            0:{
                items:carousel.data("slidesmobile")
            },
            600:{
                items:carousel.data("slidestablet")
            },
            1000:{
                items:carousel.data("slidesdesktop")
            }
        },
    })


});


    });
 

}( window.avslider = window.avslider || {}, jQuery ));
