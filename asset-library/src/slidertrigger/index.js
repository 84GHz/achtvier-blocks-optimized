/*lauch*/

(function( avslider, $, undefined ) {
  $(document).ready(function(){

    $('.wp-block-achtvier-block-achtvier-guten-slider').each(function(){
      var carousel = $(this);
      carousel.addClass('owl-carousel')
      carousel.owlCarousel({
    loop:true,
    margin:carousel.data('slidepadding'),
    navText : ["<span class='icon-chevron-left'></span>",'<span class="icon-chevron-right"></span>'],
    responsiveClass:true,
    callbacks: true,
    autoplay: true,
    responsive:{
        0:{
            items:carousel.data('slidesmobile'),
            nav:true
        },
        600:{
            items:carousel.data('slidestablet'),
            nav:false
        },
        1000:{
            items:carousel.data('slidesdesktop'),
            nav:true,

        }
    }
});


    });
  });

}( window.avslider = window.avslider || {}, jQuery ));
