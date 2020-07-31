/*lauch*/

(function( avslider, $ ) {
  $(document).ready(function(){

    $('.wp-block-achtvier-block-achtvier-guten-slider').each(function(){
      var carousel = $(this);
      carousel.addClass('owl-carousel');
    //  var navpfeile = (carousel.data("showarrows") == 'true');
  //    var navdots = (carousel.data("showpoints") == 'true');
  //    var apstring = (carousel.data("autoplay"));
   //   var string = "sdfsdfsdf";
     // var maautoplay =  apstring.indexOf("ue") >= 0
     // console.log(typeof(apstring));
    //  carousel.addClass('owl-carousel')
      carousel.owlCarousel({
        loop:true,
        margin:10, 
        autoplay: true,
        nav: carousel.data("showarrows"),
        dots: carousel.data("showdots"),        
        responsiveClass:true,
        
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
