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

eval("(function (rmm, $, undefined) {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    function rmm_init() {\n      if (window.innerWidth < 769) {\n        //we calculate the step length fo 50ms\n        var getStepLength = function getStepLength(elem_length, target_speed) {\n          var stepLength = Math.round(elem_length / target_speed * 50);\n          return Math.round(stepLength);\n        };\n\n        var rmm_wrappers = document.querySelectorAll(\".wp-block-achtvier-read-more\");\n        console.log(rmm_wrappers);\n\n        for (var i = 0; i < rmm_wrappers.length; i++) {\n          var heightOnMobile = parseInt(rmm_wrappers[i].dataset.heightonmobile);\n          var targetSpeed = parseInt(rmm_wrappers[i].dataset.slidedownspeed);\n          var inner_wrapper = rmm_wrappers[i].querySelector('.av-read-more-inner-wrapper');\n          var toggle_button = rmm_wrappers[i].querySelector('.av-read-more-link');\n          inner_height = inner_wrapper.scrollHeight;\n          var stepLength = getStepLength(inner_height, targetSpeed);\n          inner_wrapper.style.maxHeight = heightOnMobile + \"px\";\n          toggle_button.addEventListener('click', function (event) {\n            var inw = event.target.closest(\".av-read-more-button-wrapper\").previousSibling;\n            console.log(inw);\n            console.log(targetSpeed);\n            var expandAnimation = setInterval(function () {\n              if (heightOnMobile >= inner_height) {\n                clearInterval(expandAnimation);\n                inw.classList.add(\"expanded\");\n                inw.style.maxHeight = \"unset\";\n              }\n\n              heightOnMobile = heightOnMobile + stepLength;\n              inw.style.maxHeight = heightOnMobile + \"px\";\n            }, 50);\n            this.classList.add('hidden');\n          });\n        }\n      }\n    }\n\n    rmm_init();\n  });\n})(window.rmm = window.rmm || {}, jQuery);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./asset-library/src/readmore/index.js?");

/***/ }),

/***/ "./asset-library/src/slidertrigger/index.js":
/*!**************************************************!*\
  !*** ./asset-library/src/slidertrigger/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*lauch*/\n(function (avslider, $) {\n  $(document).ready(function () {\n    $('.wp-block-achtvier-block-achtvier-guten-slider').each(function () {\n      var carousel = $(this);\n      carousel.addClass('owl-carousel');\n      var slideSpeed = 600;\n\n      if (carousel.data('slidespeed')) {\n        slideSpeed = carousel.data('slidespeed');\n      }\n\n      var isnav = carousel.data('showarrows') === true || carousel.data('showarrows') == true;\n      var isdots = carousel.data('showdots') === true || carousel.data('showdots') == true;\n      var isautoplay = carousel.data('autoplay') === true || carousel.data('autoplay') == true;\n      carousel.owlCarousel({\n        loop: true,\n        margin: parseInt(carousel.data('slidepadding')),\n        autoplay: isautoplay,\n        nav: isnav,\n        dots: isdots,\n        responsiveClass: true,\n        smartSpeed: slideSpeed,\n        callbacks: true,\n        responsive: {\n          0: {\n            items: parseInt(carousel.data(\"slidesmobile\"))\n          },\n          600: {\n            items: parseInt(carousel.data(\"slidestablet\"))\n          },\n          1000: {\n            items: parseInt(carousel.data(\"slidesdesktop\"))\n          }\n        }\n      });\n    });\n  });\n})(window.avslider = window.avslider || {}, jQuery);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./asset-library/src/slidertrigger/index.js?");

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