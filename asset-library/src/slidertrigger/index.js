/*lauch*/



(function( avslider, $ ) {
  $(document).ready(function(){
    function av_init_sliders() {
      $('.wp-block-achtvier-block-achtvier-guten-slider').each(function(){
        var carousel = $(this);
        var carwidth = carousel.width()
        if (carousel.hasClass("owl-loaded")) {
          carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
          carousel.find('.owl-stage-outer').children().unwrap();
        }        
        function getStagePadding(paddingstring) {
          if (paddingstring == "0") return 0;
          return Math.round((carwidth * parseInt(paddingstring)) / 100)
    
        }
       // console.log("carousel width", carousel.width())
        carousel.addClass('owl-carousel');
        var slideSpeed = 600 ;
        if (carousel.data('slidespeed')) {
          slideSpeed = carousel.data('slidespeed');
        } 
        var isstoponhover=carousel.data('stoponhover') === true  ;

        var isnav = (carousel.data('showarrows') === true ||carousel.data('showarrows') == true ) ;
        var isdots =(carousel.data('showpoints') === true || carousel.data('showpoints') == true ) ;
        var isautoplay =(carousel.data('autoplay') === true || carousel.data('autoplay') == true ) ;
        var isloop =(carousel.data('sliderloop') === true || carousel.data('sliderloop') == true ) ;
        var isrewind =(carousel.data('rewind') === true || carousel.data('rewind') == true ) ;
        if(typeof(carousel.data('sliderloop'))=='undefined') {
          isloop = true;
        }
        if(typeof(carousel.data('rewind'))=='undefined') {
          isrewind = false;
        } 
    console.log("stoponover", isstoponhover) 
        carousel.owlCarousel({
    
          loop:isloop,
          rewind: isrewind,
          stagePadding: Math.round(carwidth / 4),
          autoplay: isautoplay,
          nav: isnav,                
          margin:parseInt(carousel.data('slidepadding')),
          navRewind: false,
          dots: isdots,    
          responsiveClass:true,
          smartSpeed: slideSpeed,
   autoplayHoverPause: isstoponhover, 
          callbacks:true,
          
          responsive:{
              0:{
                 items:parseInt(carousel.data("slidesmobile")), 
                 stagePadding : getStagePadding(carousel.data("stagepaddingmobile"))
 
              },
              600:{
                  items:parseInt(carousel.data("slidestablet")),            
                  stagePadding : getStagePadding(carousel.data("stagepaddingmobile"))

              },
              1025:{
                 items:parseInt(carousel.data("slidesdesktop")),
                 stagePadding : getStagePadding(carousel.data("stagepaddingmobile"))

              }
          },
      })
    
    });
    
      $('.wp-block-achtvier-slider-mk-2').each(function(){
        var carousel = $(this);
        var carwidth = carousel.width()
        if (carousel.hasClass("owl-loaded")) {
          carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
          carousel.find('.owl-stage-outer').children().unwrap();
        }
        function getStagePadding(paddingstring) {
          if (paddingstring == "0") return 0;
          return Math.round((carwidth * parseInt(paddingstring)) / 100)
    
        }
        
       // console.log("carousel width", carousel.width())
        carousel.addClass('owl-carousel');
        var slideSpeed = 600 ;
        if (carousel.data('slidespeed')) {
          slideSpeed = carousel.data('slidespeed');
        } 
        var isstoponhover=(carousel.data('stopohover') === true ||carousel.data('stopohover') === "true")  ;

        var isnav = (carousel.data('showarrows') === true ||carousel.data('showarrows') == true ) ;
        var isdots =(carousel.data('showpoints') === true || carousel.data('showpoints') == true ) ;
        var isautoplay =(carousel.data('autoplay') === true || carousel.data('autoplay') == true ) ;
        var isloop =(carousel.data('sliderloop') === true || carousel.data('sliderloop') == true ) ;
        var isrewind =(carousel.data('rewind') === true || carousel.data('rewind') == true ) ;
        var inAnim =(carousel.data('inanimation')   ) ; 
        var outAnim =(carousel.data('outanimation')   ) ; 
        console.log("outanim", outAnim)
        if(typeof(carousel.data('sliderloop'))=='undefined') {
          isloop = true;
        }
        if(typeof(carousel.data('rewind'))=='undefined') {
          isrewind = false;
        } 
  console.log("stoponhover", isstoponhover)
        carousel.owlCarousel({
    
          loop:isloop,
          rewind: isrewind,
          stagePadding: Math.round(carwidth / 4),
          autoplay: isautoplay,
          nav: isnav,                
   autoplayHoverPause: isstoponhover, 
          navRewind: false,
          dots: isdots,    
          animateIn: inAnim,
          animateOut: outAnim,
          responsiveClass:true,
          smartSpeed: slideSpeed,
    
          callbacks:true,
          
          responsive:{
              0:{
                 items:parseInt(carousel.data("slidesmobile")), 
                 margin:parseInt(carousel.data('slidepaddingmobile')),
                 stagePadding : getStagePadding(carousel.data("stagepaddingmobile"))
    
              },
              600:{
                  items:parseInt(carousel.data("slidestablet")),            
                 stagePadding : getStagePadding(carousel.data("stagepaddingtablet")),
                 margin:parseInt(carousel.data('slidepaddingtablet')),
              },
              1025:{
                 margin:parseInt(carousel.data('slidepadding')),
    
                 items:parseInt(carousel.data("slidesdesktop")),
                 stagePadding : getStagePadding(carousel.data("stagepadding"))                
              }
          },
      })
    
    });
    }
    
    av_init_sliders();


 
 

  $(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
        console.log('Resized finished.');
        av_init_sliders();
 
    }, 250);
});





    });
 

}( window.avslider = window.avslider || {}, jQuery ));
