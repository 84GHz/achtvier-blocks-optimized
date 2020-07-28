(function( rmm, $, undefined ) {
  document.addEventListener("DOMContentLoaded", function() {

  function rmm_init() {
      if (window.innerWidth < 769) {
      var rmm_wrappers = document.querySelectorAll(".wp-block-achtvier-read-more");
      console.log(rmm_wrappers);
      //we calculate the step length fo 50ms
      function getStepLength(elem_length, target_speed) {
        var stepLength = Math.round((elem_length / target_speed) * 50);
        return Math.round(stepLength);
      }

      for (var i = 0; i < rmm_wrappers.length; i++) {
          var heightOnMobile = parseInt(rmm_wrappers[i].dataset.heightonmobile);
          var targetSpeed = parseInt(rmm_wrappers[i].dataset.slidedownspeed);
          var inner_wrapper = rmm_wrappers[i].querySelector('.av-read-more-inner-wrapper');
          var toggle_button = rmm_wrappers[i].querySelector('.av-read-more-link');

          inner_height = inner_wrapper.scrollHeight;

          var stepLength = getStepLength(inner_height, targetSpeed);

          inner_wrapper.style.maxHeight = heightOnMobile + "px";
          toggle_button.addEventListener('click', function(event){
            var inw = event.target.closest(".av-read-more-button-wrapper").previousSibling;

            console.log(inw);
            console.log(targetSpeed);
          var expandAnimation =  setInterval(function(){
              if (heightOnMobile >= inner_height) {

                clearInterval(expandAnimation);
                inw.classList.add("expanded");
                inw.style.maxHeight = "unset";
              }
              heightOnMobile = heightOnMobile + stepLength;
              inw.style.maxHeight = heightOnMobile + "px";
            },50);
            this.classList.add('hidden');
          });

        }
      }
    }
    rmm_init();
  });
}( window.rmm = window.rmm || {}, jQuery ));
