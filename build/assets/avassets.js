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

/***/ "./asset-library/src/counters/index.js":
/*!*********************************************!*\
  !*** ./asset-library/src/counters/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*lauch*/\n(function (avbarcounter, $, undefined) {\n  $(document).ready(function () {\n    // we check if the counter is already visible (doesn't have to be scrolled to)\n    counterLaunch();\n    window.addEventListener('scroll', counterLaunch); // provides animation for the progress bar and the number with a multiplier\n\n    function move(element, beginwidth, maxwidth, multiplier, animationspeed) {\n      var width = beginwidth;\n      var innerBar = element.find(\".innerBar\");\n      var counterNumber = element.find('.counter-number');\n      innerBar.width(width + \"%\"); //   console.log(element.css('width'));\n\n      var id = setInterval(frame, animationspeed);\n\n      function frame() {\n        if (width >= maxwidth) {\n          clearInterval(id);\n        } else {\n          width++;\n          innerBar.width(width + \"%\");\n          counterNumber.html(width * multiplier);\n        }\n      }\n    }\n\n    function counterLaunch() {\n      // This is then function used to detect if the element is scrolled into view\n      function elementScrolled(elem) {\n        if ($(elem).length) {\n          var docViewTop = $(window).scrollTop();\n          var docViewBottom = docViewTop + $(window).height();\n          var elemTop = $(elem).offset().top;\n\n          if (elemTop <= docViewBottom && elemTop >= docViewTop && !$(elem).hasClass(\"anim-started\")) {\n            $(elem).addClass(\"anim-started\");\n            return true;\n          } else {\n            return false;\n          }\n        } else {\n          return false;\n        }\n      }\n\n      if (elementScrolled('.wp-block-achtvier-counter-wrapper')) {\n        $(\".wp-block-achtvier-counter-wrapper\").each(function (index, element) {\n          var scrollspy = $(this).data(\"scrollspy\");\n          var innercounters = $(this).find('.wp-block-achtvier-bar-counter');\n          innercounters.each(function () {\n            console.log($(this).data(\"delay\"));\n            var barcounter = $(this);\n            setTimeout(function () {\n              move(barcounter, barcounter.data('counterbegin'), barcounter.data('counterend'), barcounter.data('multplier'), barcounter.data('animationspeed'));\n            }, barcounter.data(\"delay\"));\n          });\n          var innericoncounters = $(this).find('.wp-block-achtvier-icon-counter');\n          innericoncounters.each(function () {\n            console.log($(this).data(\"delay\"));\n            var barcounter = $(this);\n            var iconsource = $(this).data(\"countericon\");\n            var iconwidth = $(this).data(\"countericonwidth\");\n            var iconmargin = $(this).data(\"iconmargin\");\n            var animationInterval = $(this).data('animationspeed');\n            var counterbegin = $(this).data(\"counterbegin\");\n            var counterend = $(this).data(\"counterend\");\n            var counter = $(this).find(\".icon-counter-inner\");\n            setTimeout(function () {\n              var id = setInterval(frame, animationInterval);\n\n              function frame() {\n                if (counterbegin >= counterend) {\n                  clearInterval(id);\n                } else {\n                  counterbegin++;\n                  var spanstyle = \"style='margin-right: \" + iconmargin + \"px'\";\n                  var iconstyle = \"style='width: \" + iconwidth + \"px'\";\n                  counter.append(\"<span \" + spanstyle + \" >\" + \"<img class='counter-icon' \" + iconstyle + \" src='\" + iconsource + \"'></span>\");\n                }\n              }\n            }, $(this).data(\"delay\"));\n          });\n        });\n      }\n    }\n  });\n})(window.avbarcounter = window.avbarcounter || {}, jQuery);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./asset-library/src/counters/index.js?");

/***/ }),

/***/ "./asset-library/src/readmore/index.js":
/*!*********************************************!*\
  !*** ./asset-library/src/readmore/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (rmm, $, undefined) {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    function rmm_init() {\n      if (window.innerWidth < 769) {\n        //we calculate the step length fo 50ms\n        var getStepLength = function getStepLength(elem_length, target_speed) {\n          var stepLength = Math.round(elem_length / target_speed * 50);\n          return Math.round(stepLength);\n        };\n\n        var rmm_wrappers = document.querySelectorAll(\".wp-block-achtvier-read-more\");\n        console.log(rmm_wrappers);\n\n        for (var i = 0; i < rmm_wrappers.length; i++) {\n          var heightOnMobile = parseInt(rmm_wrappers[i].dataset.heightonmobile);\n          var targetSpeed = parseInt(rmm_wrappers[i].dataset.slidedownspeed);\n          var inner_wrapper = rmm_wrappers[i].querySelector('.av-read-more-inner-wrapper');\n          var toggle_button = rmm_wrappers[i].querySelector('.av-read-more-link');\n          inner_height = inner_wrapper.scrollHeight;\n          var stepLength = getStepLength(inner_height, targetSpeed);\n          inner_wrapper.style.maxHeight = heightOnMobile + \"px\";\n          toggle_button.addEventListener('click', function (event) {\n            var inw = event.target.closest(\".av-read-more-button-wrapper\").previousSibling;\n            console.log(inw);\n            console.log(targetSpeed);\n            var expandAnimation = setInterval(function () {\n              if (heightOnMobile >= inner_height) {\n                clearInterval(expandAnimation);\n                inw.classList.add(\"expanded\");\n                inw.style.maxHeight = \"unset\";\n              }\n\n              heightOnMobile = heightOnMobile + stepLength;\n              inw.style.maxHeight = heightOnMobile + \"px\";\n            }, 50);\n            this.classList.add('hidden');\n          });\n        }\n      }\n    }\n\n    rmm_init();\n  });\n})(window.rmm = window.rmm || {}, jQuery);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./asset-library/src/readmore/index.js?");

/***/ }),

/***/ "./asset-library/src/slidertrigger/index.js":
/*!**************************************************!*\
  !*** ./asset-library/src/slidertrigger/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*lauch*/\n(function (avslider, $) {\n  $(document).ready(function () {\n    $('.wp-block-achtvier-block-achtvier-guten-slider').each(function () {\n      var carousel = $(this);\n      carousel.addClass('owl-carousel'); //  var navpfeile = (carousel.data(\"showarrows\") == 'true');\n      //    var navdots = (carousel.data(\"showpoints\") == 'true');\n      //    var apstring = (carousel.data(\"autoplay\"));\n      //   var string = \"sdfsdfsdf\";\n      // var maautoplay =  apstring.indexOf(\"ue\") >= 0\n      // console.log(typeof(apstring));\n      //  carousel.addClass('owl-carousel')\n\n      carousel.owlCarousel({\n        loop: true,\n        margin: 10,\n        autoplay: true,\n        nav: carousel.data(\"showarrows\"),\n        dots: carousel.data(\"showdots\"),\n        responsiveClass: true,\n        callbacks: true,\n        responsive: {\n          0: {\n            items: carousel.data(\"slidesmobile\")\n          },\n          600: {\n            items: carousel.data(\"slidestablet\")\n          },\n          1000: {\n            items: carousel.data(\"slidesdesktop\")\n          }\n        }\n      });\n    });\n  });\n})(window.avslider = window.avslider || {}, jQuery);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./asset-library/src/slidertrigger/index.js?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************!*\
  !*** multi ./asset-library/src/counters/index.js ./asset-library/src/readmore/index.js ./asset-library/src/slidertrigger/index.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./asset-library/src/counters/index.js */\"./asset-library/src/counters/index.js\");\n__webpack_require__(/*! ./asset-library/src/readmore/index.js */\"./asset-library/src/readmore/index.js\");\nmodule.exports = __webpack_require__(/*! ./asset-library/src/slidertrigger/index.js */\"./asset-library/src/slidertrigger/index.js\");\n\n\n//# sourceURL=webpack://achtvier-blocks-optimized/multi_./asset-library/src/counters/index.js_./asset-library/src/readmore/index.js_./asset-library/src/slidertrigger/index.js?");

/***/ })

/******/ });
});