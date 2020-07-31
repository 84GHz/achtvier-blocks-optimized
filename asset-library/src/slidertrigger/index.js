/*lauch*/

(function( avslider, $, undefined ) {
  $(document).ready(function(){

    $('.wp-block-achtvier-block-achtvier-guten-slider').each(function(){
      var carousel = $(this);
      var navpfeile = (carousel.data("showarrows") == 'true');
      var navdots = (carousel.data("showpoints") == 'true');
      var apstring = (carousel.data("autoplay"));
      var string = "sdfsdfsdf";
     // var maautoplay =  apstring.indexOf("ue") >= 0
     // console.log(typeof(apstring));
    //  carousel.addClass('owl-carousel')
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
            nav:navpfeile,
            dots: navdots,
            autoplay:apstring

        },
        600:{
            items:carousel.data('slidestablet'),
            nav:navpfeile,
            dots: navdots,
            autoplay:apstring

        },
        1000:{
            items:carousel.data('slidesdesktop'),
            nav:navpfeile,
            dots: navdots,
            autoplay:apstring

        }
    }
});


    });
  });

}( window.avslider = window.avslider || {}, jQuery ));
