(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["achtvier-blocks-optimized"] = factory();
	else
		root["achtvier-blocks-optimized"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./asset-library/src/readmore/index.js":
/*!*********************************************!*\
  !*** ./asset-library/src/readmore/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (rmm, $, undefined) {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    function rmm_init() {\n      if (window.innerWidth < 769) {\n        //we calculate the step length fo 50ms\n        var getStepLength = function getStepLength(elem_length, target_speed) {\n          var stepLength = Math.round(elem_length / target_speed * 50);\n          return Math.round(stepLength);\n        };\n        var rmm_wrappers = document.querySelectorAll(\".wp-block-achtvier-read-more\");\n        console.log(rmm_wrappers);\n        for (var i = 0; i < rmm_wrappers.length; i++) {\n          var heightOnMobile = parseInt(rmm_wrappers[i].dataset.heightonmobile);\n          var targetSpeed = parseInt(rmm_wrappers[i].dataset.slidedownspeed);\n          var inner_wrapper = rmm_wrappers[i].querySelector('.av-read-more-inner-wrapper');\n          var toggle_button = rmm_wrappers[i].querySelector('.av-read-more-link');\n          inner_height = inner_wrapper.scrollHeight;\n          var stepLength = getStepLength(inner_height, targetSpeed);\n          inner_wrapper.style.maxHeight = heightOnMobile + \"px\";\n          toggle_button.addEventListener('click', function (event) {\n            var inw = event.target.closest(\".av-read-more-button-wrapper\").previousSibling;\n            console.log(inw);\n            console.log(targetSpeed);\n            var expandAnimation = setInterval(function () {\n              if (heightOnMobile >= inner_height) {\n                clearInterval(expandAnimation);\n                inw.classList.add(\"expanded\");\n                inw.style.maxHeight = \"unset\";\n              }\n              heightOnMobile = heightOnMobile + stepLength;\n              inw.style.maxHeight = heightOnMobile + \"px\";\n            }, 50);\n            this.classList.add('hidden');\n          });\n        }\n      }\n    }\n    rmm_init();\n  });\n})(window.rmm = window.rmm || {}, jQuery);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./asset-library/src/readmore/index.js?");

/***/ }),

/***/ "./asset-library/src/slidertrigger/index.js":
/*!**************************************************!*\
  !*** ./asset-library/src/slidertrigger/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*lauch*/\n\n(function (avslider, $) {\n  $(document).ready(function () {\n    function av_init_sliders() {\n      $('.wp-block-achtvier-block-achtvier-guten-slider').each(function () {\n        var carousel = $(this);\n        if (carousel.hasClass(\"owl-loaded\")) {\n          carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');\n          carousel.find('.owl-stage-outer').children().unwrap();\n        }\n        function getStagePadding(paddingstring) {\n          if (paddingstring == \"0\") return 0;\n          return Math.round(carwidth * parseInt(paddingstring) / 100);\n        }\n        // console.log(\"carousel width\", carousel.width())\n        carousel.addClass('owl-carousel');\n        var slideSpeed = 600;\n        if (carousel.data('slidespeed')) {\n          slideSpeed = carousel.data('slidespeed');\n        }\n        var isstoponhover = carousel.data('stoponhover') === true;\n        var isnav = carousel.data('showarrows') === true || carousel.data('showarrows') == true;\n        var isdots = carousel.data('showpoints') === true || carousel.data('showpoints') == true;\n        var isautoplay = carousel.data('autoplay') === true || carousel.data('autoplay') == true;\n        var isloop = carousel.data('sliderloop') === true || carousel.data('sliderloop') == true;\n        var isrewind = carousel.data('rewind') === true || carousel.data('rewind') == true;\n        if (typeof carousel.data('sliderloop') == 'undefined') {\n          isloop = true;\n        }\n        if (typeof carousel.data('rewind') == 'undefined') {\n          isrewind = false;\n        }\n        console.log(\"stoponover\", isstoponhover);\n        carousel.owlCarousel({\n          loop: isloop,\n          rewind: isrewind,\n          autoplay: isautoplay,\n          nav: isnav,\n          margin: parseInt(carousel.data('slidepadding')),\n          navRewind: false,\n          dots: isdots,\n          responsiveClass: true,\n          smartSpeed: slideSpeed,\n          autoplayHoverPause: isstoponhover,\n          callbacks: true,\n          responsive: {\n            0: {\n              items: parseInt(carousel.data(\"slidesmobile\"))\n            },\n            600: {\n              items: parseInt(carousel.data(\"slidestablet\"))\n            },\n            1025: {\n              items: parseInt(carousel.data(\"slidesdesktop\"))\n            }\n          }\n        });\n      });\n      $('.wp-block-achtvier-slider-mk-2').each(function () {\n        var carousel = $(this);\n        var carwidth = carousel.width();\n        if (carousel.hasClass(\"owl-loaded\")) {\n          carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');\n          carousel.find('.owl-stage-outer').children().unwrap();\n        }\n        function getStagePadding(paddingstring) {\n          if (paddingstring == \"0\") return 0;\n          return Math.round(carwidth * parseInt(paddingstring) / 100);\n        }\n\n        // console.log(\"carousel width\", carousel.width())\n        carousel.addClass('owl-carousel');\n        var slideSpeed = 600;\n        if (carousel.data('slidespeed')) {\n          slideSpeed = carousel.data('slidespeed');\n        }\n        var isstoponhover = carousel.data('stopohover') === true || carousel.data('stopohover') === \"true\";\n        var isnav = carousel.data('showarrows') === true || carousel.data('showarrows') == true;\n        var isdots = carousel.data('showpoints') === true || carousel.data('showpoints') == true;\n        var isautoplay = carousel.data('autoplay') === true || carousel.data('autoplay') == true;\n        var isloop = carousel.data('sliderloop') === true || carousel.data('sliderloop') == true;\n        var isrewind = carousel.data('rewind') === true || carousel.data('rewind') == true;\n        var inAnim = carousel.data('inanimation');\n        var outAnim = carousel.data('outanimation');\n        console.log(\"outanim\", outAnim);\n        if (typeof carousel.data('sliderloop') == 'undefined') {\n          isloop = true;\n        }\n        if (typeof carousel.data('rewind') == 'undefined') {\n          isrewind = false;\n        }\n        console.log(\"stoponhover\", isstoponhover);\n        carousel.owlCarousel({\n          loop: isloop,\n          rewind: isrewind,\n          stagePadding: Math.round(carwidth / 4),\n          autoplay: isautoplay,\n          nav: isnav,\n          autoplayHoverPause: isstoponhover,\n          navRewind: false,\n          dots: isdots,\n          animateIn: inAnim,\n          animateOut: outAnim,\n          responsiveClass: true,\n          smartSpeed: slideSpeed,\n          callbacks: true,\n          responsive: {\n            0: {\n              items: parseInt(carousel.data(\"slidesmobile\")),\n              margin: parseInt(carousel.data('slidepaddingmobile')),\n              stagePadding: getStagePadding(carousel.data(\"stagepaddingmobile\"))\n            },\n            600: {\n              items: parseInt(carousel.data(\"slidestablet\")),\n              stagePadding: getStagePadding(carousel.data(\"stagepaddingtablet\")),\n              margin: parseInt(carousel.data('slidepaddingtablet'))\n            },\n            1025: {\n              margin: parseInt(carousel.data('slidepadding')),\n              items: parseInt(carousel.data(\"slidesdesktop\")),\n              stagePadding: getStagePadding(carousel.data(\"stagepadding\"))\n            }\n          }\n        });\n      });\n    }\n    av_init_sliders();\n    $(window).resize(function () {\n      clearTimeout(window.resizedFinished);\n      window.resizedFinished = setTimeout(function () {\n        console.log('Resized finished.');\n        av_init_sliders();\n      }, 250);\n    });\n  });\n})(window.avslider = window.avslider || {}, jQuery);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./asset-library/src/slidertrigger/index.js?");

/***/ }),

/***/ 0:
/*!**********************************************************************************************!*\
  !*** multi ./asset-library/src/readmore/index.js ./asset-library/src/slidertrigger/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./asset-library/src/readmore/index.js */\"./asset-library/src/readmore/index.js\");\nmodule.exports = __webpack_require__(/*! ./asset-library/src/slidertrigger/index.js */\"./asset-library/src/slidertrigger/index.js\");\n\n\n//# sourceURL=webpack://achtvier-blocks-optimized/multi_./asset-library/src/readmore/index.js_./asset-library/src/slidertrigger/index.js?");

/***/ })

/******/ });
});