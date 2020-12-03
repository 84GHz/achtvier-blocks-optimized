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

/***/ "./block-library/src/accordeon/edit.js":
/*!*********************************************!*\
  !*** ./block-library/src/accordeon/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar AccordeonBlockContext = wp.element.createContext();\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks; // Import registerBlockType() from wp.blocks\n\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    ToggleControl = _wp$components.ToggleControl;\nvar _wp$data = wp.data,\n    select = _wp$data.select,\n    dispatch = _wp$data.dispatch;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\n\nfunction AVAccordeonEdit(props) {\n  var setAttributes = props.setAttributes,\n      attributes = props.attributes,\n      className = props.className;\n\n  function onAccordeonOnChange(changes) {\n    setAttributes({\n      accordeonOn: changes\n    });\n\n    if (changes) {\n      var children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;\n\n      for (var i = 0; i < children.length; i++) {\n        dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {\n          parentID: props.attributes.accordeonID\n        });\n      }\n    } else {\n      var children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;\n\n      for (var i = 0; i < children.length; i++) {\n        dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {\n          parentID: null\n        });\n      }\n    }\n  }\n\n  if (typeof props.attributes.accordeonID == \"undefined\") {\n    var datid = (+new Date()).toString(36).slice(-8);\n    console.log(props.attributes.accordeonOn);\n\n    if (props.attributes.accordeonOn) {\n      setAttributes({\n        accordeonID: datid\n      });\n      var children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;\n\n      for (var i = 0; i < children.length; i++) {\n        dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {\n          parentID: props.attributes.accordeonID\n        });\n      }\n    } else {\n      setAttributes({\n        accordeonID: null\n      });\n      var children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;\n\n      for (var i = 0; i < children.length; i++) {\n        dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {\n          parentID: null\n        });\n      }\n    }\n  } else {\n    if (props.attributes.accordeonOn) {\n      var children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;\n\n      for (var i = 0; i < children.length; i++) {\n        dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {\n          parentID: props.attributes.accordeonID\n        });\n      }\n    } else {\n      var children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;\n\n      for (var i = 0; i < children.length; i++) {\n        dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {\n          parentID: null\n        });\n      }\n    }\n  }\n\n  function getTemplate(accID) {\n    return [['achtvierblocks/newaccordeonpanel', {}]];\n  } //\t var child = wp.data.select('achtvierblocks/newaccordeon').getBlocksByClientId(props.clientId)[0].innerBlocks[0];\n  //\tconsole.log(child);\n\n\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(ToggleControl, {\n    label: __('AccordeonFuktion'),\n    checked: props.attributes.accordeonOn,\n    onChange: onAccordeonOnChange\n  })), React.createElement(\"div\", {\n    className: className,\n    id: props.attributes.accordeonID\n  }, React.createElement(InnerBlocks, {\n    clientId: props.clientId,\n    allowedBlocks: ['achtvierblocks/newaccordeonpanel'],\n    template: getTemplate(props.attributes.accordeonID)\n  }), React.createElement(\"label\", null, \"av-accordeon\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVAccordeonEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/accordeon/edit.js?");

/***/ }),

/***/ "./block-library/src/accordeon/index.js":
/*!**********************************************!*\
  !*** ./block-library/src/accordeon/index.js ***!
  \**********************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/accordeon/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/accordeon/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Accordeon'),\n  // Block title.\n  name: \"achtvierblocks/newaccordeon\",\n  icon: 'list-view',\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('accordeon')],\n  attributes: {\n    accordeonID: {\n      type: 'string'\n    },\n    accordeonOn: {\n      type: 'boolean',\n      \"default\": true\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/accordeon/index.js?");

/***/ }),

/***/ "./block-library/src/accordeon/save.js":
/*!*********************************************!*\
  !*** ./block-library/src/accordeon/save.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  var attributes = props.attributes,\n      className = props.className;\n  return React.createElement(\"div\", {\n    className: className,\n    id: props.attributes.accordeonID\n  }, React.createElement(InnerBlocks.Content, null));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/accordeon/save.js?");

/***/ }),

/***/ "./block-library/src/accordeonitem/edit.js":
/*!*************************************************!*\
  !*** ./block-library/src/accordeonitem/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nvar RichText = wp.editor.RichText;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nfunction AccordeonItemEdit(props) {\n  var className = props.className;\n  console.log(className);\n\n  if (typeof props.attributes.accpanelID == \"undefined\") {\n    props.setAttributes({\n      accpanelID: (+new Date()).toString(36).slice(-8)\n    });\n  }\n\n  var updateHeader = function updateHeader(changes) {\n    props.setAttributes({\n      panelTitle: changes\n    });\n  };\n\n  return React.createElement(\"div\", {\n    \"class\": className + \" card\"\n  }, React.createElement(\"div\", {\n    id: props.attributes.accpanelID,\n    \"class\": \"collapse show\"\n  }, React.createElement(\"div\", {\n    className: \"card-header\"\n  }, React.createElement(RichText, {\n    value: props.attributes.panelTitle,\n    onChange: updateHeader,\n    placeholder: __('Panel Titel…....')\n  })), React.createElement(\"div\", {\n    \"class\": \"card-body\"\n  }, React.createElement(InnerBlocks, null))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccordeonItemEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/accordeonitem/edit.js?");

/***/ }),

/***/ "./block-library/src/accordeonitem/index.js":
/*!**************************************************!*\
  !*** ./block-library/src/accordeonitem/index.js ***!
  \**************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/accordeonitem/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/accordeonitem/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('New Accordeon Panel'),\n  parent: ['achtvierblocks/newaccordeon'],\n  icon: 'columns',\n  name: \"achtvierblocks/newaccordeonpanel\",\n  description: __('A single accordeon element'),\n  category: 'achtvier-blocks',\n  attributes: {\n    accpanelID: {\n      type: \"string\"\n    },\n    parentID: {\n      type: \"string\"\n    },\n    panelTitle: {\n      type: \"string\"\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/accordeonitem/index.js?");

/***/ }),

/***/ "./block-library/src/accordeonitem/save.js":
/*!*************************************************!*\
  !*** ./block-library/src/accordeonitem/save.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  console.log(props);\n\n  if (props.attributes.parentID === null || typeof props.attributes.parentID == \"undefined\") {\n    return React.createElement(\"div\", null, React.createElement(\"div\", {\n      \"class\": \"card-header\"\n    }, React.createElement(\"a\", {\n      \"class\": \"card-link\",\n      \"data-toggle\": \"collapse\",\n      href: '#' + props.attributes.accpanelID\n    }, props.attributes.panelTitle)), React.createElement(\"div\", {\n      id: props.attributes.accpanelID,\n      \"class\": \"collapse\"\n    }, React.createElement(\"div\", {\n      \"class\": \"card-body\"\n    }, React.createElement(InnerBlocks.Content, null))));\n  } else {\n    return React.createElement(\"div\", null, React.createElement(\"div\", {\n      \"class\": \"card-header\"\n    }, React.createElement(\"a\", {\n      \"class\": \"card-link\",\n      \"data-toggle\": \"collapse\",\n      href: '#' + props.attributes.accpanelID\n    }, props.attributes.panelTitle)), React.createElement(\"div\", {\n      id: props.attributes.accpanelID,\n      \"class\": \"collapse\",\n      \"data-parent\": \"#\" + props.attributes.parentID\n    }, React.createElement(\"div\", {\n      \"class\": \"card-body\"\n    }, React.createElement(InnerBlocks.Content, null))));\n  }\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/accordeonitem/save.js?");

/***/ }),

/***/ "./block-library/src/av-slider/edit.js":
/*!*********************************************!*\
  !*** ./block-library/src/av-slider/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    BlockControls = _wp$blockEditor.BlockControls;\nvar _wp$components = wp.components,\n    Panel = _wp$components.Panel,\n    PanelBody = _wp$components.PanelBody,\n    TextareaControl = _wp$components.TextareaControl,\n    TextControl = _wp$components.TextControl,\n    Dashicon = _wp$components.Dashicon,\n    Toolbar = _wp$components.Toolbar,\n    Button = _wp$components.Button,\n    Tooltip = _wp$components.Tooltip,\n    RangeControl = _wp$components.RangeControl,\n    ToggleControl = _wp$components.ToggleControl;\nvar Fragment = wp.element.Fragment;\n\nfunction AVSliderEdit(props) {\n  // Creates a <p class='wp-block-cgb-block-achtvier-guten-slider'></p>.\n  var onChangeSlidesDesktop = function onChangeSlidesDesktop(value) {\n    props.setAttributes({\n      slidesdesktop: value\n    });\n  };\n\n  var onChangeSlidesTablet = function onChangeSlidesTablet(value) {\n    props.setAttributes({\n      slidestablet: value\n    });\n  };\n\n  var onChangeSlidesMobil = function onChangeSlidesMobil(value) {\n    props.setAttributes({\n      slidesmobile: value\n    });\n  };\n\n  var onChangeAutoplay = function onChangeAutoplay(value) {\n    props.setAttributes({\n      autoplay: value\n    });\n  };\n\n  var onChangeShowPoints = function onChangeShowPoints(value) {\n    props.setAttributes({\n      showpoints: value\n    });\n  };\n\n  var onChangeShowArrows = function onChangeShowArrows(value) {\n    props.setAttributes({\n      showarrows: value\n    });\n  };\n\n  var onChangeSlidePadding = function onChangeSlidePadding(value) {\n    props.setAttributes({\n      slidepadding: value\n    });\n  };\n\n  var onChangeSlideSpeed = function onChangeSlideSpeed(value) {\n    props.setAttributes({\n      slidespeed: value\n    });\n  };\n\n  var onChangeLoop = function onChangeLoop(value) {\n    props.setAttributes({\n      loop: value\n    });\n  };\n\n  var onChangeRewind = function onChangeRewind(value) {\n    props.setAttributes({\n      rewind: value\n    });\n  };\n\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, {\n    key: \"inspector2\"\n  }, React.createElement(PanelBody, {\n    title: __('Slidereinstellungen')\n  }, React.createElement(RangeControl, {\n    label: __('Anzahl Slides Desktop'),\n    value: props.attributes.slidesdesktop,\n    onChange: onChangeSlidesDesktop,\n    min: 1,\n    max: 12\n  }), React.createElement(RangeControl, {\n    label: __('Anzahl Slides Tablet'),\n    value: props.attributes.slidestablet,\n    onChange: onChangeSlidesTablet,\n    min: 1,\n    max: 12\n  }), React.createElement(RangeControl, {\n    label: __('Anzahl Slides Mobil'),\n    value: props.attributes.slidesmobile,\n    onChange: onChangeSlidesMobil,\n    min: 1,\n    max: 12\n  }), React.createElement(RangeControl, {\n    label: __('Margin Slides'),\n    value: props.attributes.slidepadding,\n    onChange: onChangeSlidePadding,\n    min: 0,\n    max: 50\n  }), React.createElement(RangeControl, {\n    label: __('Slide Speed (ms)'),\n    value: props.attributes.slidespeed,\n    onChange: onChangeSlideSpeed,\n    min: 0,\n    max: 15000\n  }), React.createElement(ToggleControl, {\n    label: __('Autoplay'),\n    checked: props.attributes.autoplay,\n    onChange: onChangeAutoplay\n  }), React.createElement(ToggleControl, {\n    label: __('Punkte Anzeigen'),\n    checked: props.attributes.showpoints,\n    onChange: onChangeShowPoints\n  }), React.createElement(ToggleControl, {\n    label: __('Pfeile Anzeigen'),\n    checked: props.attributes.showarrows,\n    onChange: onChangeShowArrows\n  }), React.createElement(ToggleControl, {\n    label: __('Loop'),\n    checked: props.attributes.loop,\n    onChange: onChangeLoop\n  }), React.createElement(ToggleControl, {\n    label: __('Zurück zum Beginn'),\n    checked: props.attributes.rewind,\n    onChange: onChangeRewind\n  }))), React.createElement(PanelBody, {\n    title: __('Responsiver Slider'),\n    initialOpen: false\n  }, React.createElement(\"div\", {\n    className: props.className\n  }, React.createElement(\"p\", null, \"\\u2014 Hier Bl\\xF6cke zum Sliden einf\\xFCgen.\"), React.createElement(InnerBlocks, null))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVSliderEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/av-slider/edit.js?");

/***/ }),

/***/ "./block-library/src/av-slider/index.js":
/*!**********************************************!*\
  !*** ./block-library/src/av-slider/index.js ***!
  \**********************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/av-slider/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/av-slider/save.js\");\n\n\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  name: \"achtvier/block-achtvier-guten-slider\",\n  title: __('Responsive Owl Slider'),\n  // Block title.\n  icon: 'welcome-view-site',\n  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'common',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('slider')],\n  attributes: {\n    slidesdesktop: {\n      type: 'number',\n      \"default\": 1\n    },\n    slidestablet: {\n      type: 'number',\n      \"default\": 1\n    },\n    slidesmobile: {\n      type: 'number',\n      \"default\": 1\n    },\n    autoplay: {\n      type: 'boolean',\n      \"default\": false\n    },\n    showarrows: {\n      type: 'boolean',\n      \"default\": false\n    },\n    showpoints: {\n      type: 'boolean',\n      \"default\": false\n    },\n    slidepadding: {\n      type: 'number',\n      \"default\": 0\n    },\n    slidespeed: {\n      type: 'number',\n      \"default\": 600\n    },\n    loop: {\n      type: 'boolean',\n      \"default\": true\n    },\n    rewind: {\n      type: 'boolean',\n      \"default\": false\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  migrate: function migrate(attributes) {\n    return {\n      slidesdesktop: attributes.slidesdesktop,\n      slidestablet: attributes.slidestablet,\n      slidesmobile: attributes.slidesmobile,\n      autoplay: attributes.autoplay,\n      showarrows: attributes.showarrows,\n      showpoints: attributes.showpoints,\n      slidepadding: attributes.slidepadding,\n      slidespeed: 600,\n      loop: true,\n      rewind: false\n    };\n  },\n  deprecated: [{\n    attributes: {\n      slidesdesktop: {\n        type: 'number',\n        \"default\": 1\n      },\n      slidestablet: {\n        type: 'number',\n        \"default\": 1\n      },\n      slidesmobile: {\n        type: 'number',\n        \"default\": 1\n      },\n      autoplay: {\n        type: 'boolean',\n        \"default\": false\n      },\n      showarrows: {\n        type: 'boolean',\n        \"default\": false\n      },\n      showpoints: {\n        type: 'boolean',\n        \"default\": false\n      },\n      slidepadding: {\n        type: 'number',\n        \"default\": 0\n      }\n    },\n    save: function save(props) {\n      return React.createElement(\"div\", {\n        className: props.className,\n        \"data-slidesdesktop\": props.attributes.slidesdesktop,\n        \"data-slidestablet\": props.attributes.slidestablet,\n        \"data-slidesmobile\": props.attributes.slidesmobile,\n        \"data-autoplay\": props.attributes.autoplay,\n        \"data-showpoints\": props.attributes.showpoints,\n        \"data-showarrows\": props.attributes.showarrows,\n        \"data-slidepadding\": props.attributes.slidepadding\n      }, React.createElement(InnerBlocks.Content, null));\n    }\n  }, {\n    attributes: {\n      slidesdesktop: {\n        type: 'number',\n        \"default\": 1\n      },\n      slidestablet: {\n        type: 'number',\n        \"default\": 1\n      },\n      slidesmobile: {\n        type: 'number',\n        \"default\": 1\n      },\n      autoplay: {\n        type: 'boolean',\n        \"default\": false\n      },\n      showarrows: {\n        type: 'boolean',\n        \"default\": false\n      },\n      showpoints: {\n        type: 'boolean',\n        \"default\": false\n      },\n      slidepadding: {\n        type: 'number',\n        \"default\": 0\n      },\n      slidespeed: {\n        type: 'number',\n        \"default\": 600\n      }\n    },\n    save: function save(props) {\n      return React.createElement(\"div\", {\n        className: props.className,\n        \"data-slidesdesktop\": props.attributes.slidesdesktop,\n        \"data-slidestablet\": props.attributes.slidestablet,\n        \"data-slidesmobile\": props.attributes.slidesmobile,\n        \"data-autoplay\": props.attributes.autoplay,\n        \"data-showpoints\": props.attributes.showpoints,\n        \"data-slidespeed\": props.attributes.slidespeed,\n        \"data-showarrows\": props.attributes.showarrows,\n        \"data-slidepadding\": props.attributes.slidepadding\n      }, React.createElement(InnerBlocks.Content, null));\n    }\n  }, {\n    attributes: {\n      slidesdesktop: {\n        type: 'number',\n        \"default\": 1\n      },\n      slidestablet: {\n        type: 'number',\n        \"default\": 1\n      },\n      slidesmobile: {\n        type: 'number',\n        \"default\": 1\n      },\n      autoplay: {\n        type: 'boolean',\n        \"default\": false\n      },\n      showarrows: {\n        type: 'boolean',\n        \"default\": false\n      },\n      showpoints: {\n        type: 'boolean',\n        \"default\": false\n      },\n      slidepadding: {\n        type: 'number',\n        \"default\": 0\n      },\n      slidespeed: {\n        type: 'number',\n        \"default\": 600\n      },\n      loop: {\n        type: 'boolean',\n        \"default\": true\n      }\n    },\n    save: function save(props) {\n      return React.createElement(\"div\", {\n        className: props.className,\n        \"data-slidesdesktop\": props.attributes.slidesdesktop,\n        \"data-slidestablet\": props.attributes.slidestablet,\n        \"data-slidesmobile\": props.attributes.slidesmobile,\n        \"data-autoplay\": props.attributes.autoplay,\n        \"data-showpoints\": props.attributes.showpoints,\n        \"data-slidespeed\": props.attributes.slidespeed,\n        \"data-showarrows\": props.attributes.showarrows,\n        \"data-slidepadding\": props.attributes.slidepadding,\n        \"data-sliderloop\": props.attributes.loop\n      }, React.createElement(InnerBlocks.Content, null));\n    }\n  }],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/av-slider/index.js?");

/***/ }),

/***/ "./block-library/src/av-slider/save.js":
/*!*********************************************!*\
  !*** ./block-library/src/av-slider/save.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  return React.createElement(\"div\", {\n    className: props.className,\n    \"data-slidesdesktop\": props.attributes.slidesdesktop,\n    \"data-slidestablet\": props.attributes.slidestablet,\n    \"data-slidesmobile\": props.attributes.slidesmobile,\n    \"data-autoplay\": props.attributes.autoplay,\n    \"data-showpoints\": props.attributes.showpoints,\n    \"data-slidespeed\": props.attributes.slidespeed,\n    \"data-showarrows\": props.attributes.showarrows,\n    \"data-slidepadding\": props.attributes.slidepadding,\n    \"data-sliderloop\": props.attributes.loop,\n    \"data-rewind\": props.attributes.rewind\n  }, React.createElement(InnerBlocks.Content, null));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/av-slider/save.js?");

/***/ }),

/***/ "./block-library/src/avsection/edit.js":
/*!*********************************************!*\
  !*** ./block-library/src/avsection/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    BlockControls = _wp$blockEditor.BlockControls,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Tooltip = _wp$components.Tooltip,\n    TextControl = _wp$components.TextControl;\nvar Fragment = wp.element.Fragment;\n\nfunction AVSectionEdit(props) {\n  var setAttributes = props.setAttributes,\n      attributes = props.attributes,\n      className = props.className;\n\n  function onSectionIDChange(changes) {\n    setAttributes({\n      sectionID: changes\n    });\n  }\n\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n    title: __('Sektioneinstellungen')\n  }, React.createElement(TextControl, {\n    label: __('Section ID'),\n    value: attributes.sectionID,\n    onChange: onSectionIDChange\n  }))), React.createElement(\"section\", {\n    className: props.className,\n    id: props.attributes.sectionID\n  }, React.createElement(InnerBlocks, null), React.createElement(\"label\", null, \"content-section\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVSectionEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/avsection/edit.js?");

/***/ }),

/***/ "./block-library/src/avsection/index.js":
/*!**********************************************!*\
  !*** ./block-library/src/avsection/index.js ***!
  \**********************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/avsection/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/avsection/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Content Section'),\n  // Block title.\n  name: \"achtvier/section\",\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('content-section')],\n  attributes: {\n    sectionID: {\n      type: 'string'\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/avsection/index.js?");

/***/ }),

/***/ "./block-library/src/avsection/save.js":
/*!*********************************************!*\
  !*** ./block-library/src/avsection/save.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  return React.createElement(\"section\", {\n    className: props.className,\n    id: props.attributes.sectionID\n  }, React.createElement(InnerBlocks.Content, null));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/avsection/save.js?");

/***/ }),

/***/ "./block-library/src/bootstrap-cols/edit.js":
/*!**************************************************!*\
  !*** ./block-library/src/bootstrap-cols/edit.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    BlockControls = _wp$blockEditor.BlockControls,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Panel = _wp$components.Panel,\n    Tooltip = _wp$components.Tooltip;\nvar Fragment = wp.element.Fragment;\n\nfunction ColEdit(props) {\n  var attributes = props.attributes,\n      clientId = props.clientId;\n  console.log(clientId);\n\n  function applyColClasses() {\n    var classarray = [];\n    var applyoutput = \" \";\n    classarray.push(attributes.gridrastermobile);\n    classarray.push(attributes.gridrasterdesktop);\n    classarray.push(attributes.gridrastertablet);\n    classarray.push(attributes.containervisibility);\n    classarray.push(attributes.coloffsetdesktop);\n    classarray.forEach(function callback(currentValue) {\n      applyoutput += currentValue;\n      applyoutput += \" \";\n    });\n    return applyoutput;\n  }\n\n  function onChangeContainerVisibility(event) {\n    var selected = event.target.querySelector('option:checked');\n    props.setAttributes({\n      containervisibility: selected.value\n    });\n    event.preventDefault();\n  }\n\n  function onChangeGridRasterMobile(event) {\n    var selected = event.target.querySelector('option:checked');\n    props.setAttributes({\n      gridrastermobile: selected.value\n    });\n    event.preventDefault();\n  }\n\n  function onChangeGridRasterTablet(event) {\n    var selected = event.target.querySelector('option:checked');\n    props.setAttributes({\n      gridrastertablet: selected.value\n    });\n    event.preventDefault();\n  }\n\n  function onChangeGridRasterDesktop(event) {\n    var selected = event.target.querySelector('option:checked');\n    props.setAttributes({\n      gridrasterdesktop: selected.value\n    });\n    event.preventDefault();\n  }\n\n  function onChangeColOffsetDesktop(event) {\n    var selected = event.target.querySelector('option:checked');\n    props.setAttributes({\n      coloffsetdesktop: selected.value\n    });\n    event.preventDefault();\n  }\n\n  var colclasses = applyColClasses();\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n    title: \"Spalteneinstellungen\",\n    icon: \"admin-generic\",\n    initialOpen: false\n  }, React.createElement(\"select\", {\n    value: attributes.gridrastermobile,\n    onChange: onChangeGridRasterMobile\n  }, React.createElement(\"option\", {\n    value: \" col-12\"\n  }, \"Mobil 1/1\"), React.createElement(\"option\", {\n    value: \" col-11\"\n  }, \"Mobil 11/12\"), React.createElement(\"option\", {\n    value: \" col-10\"\n  }, \"Mobil 5/6\"), React.createElement(\"option\", {\n    value: \" col-9\"\n  }, \"Mobil 3/4\"), React.createElement(\"option\", {\n    value: \" col-8\"\n  }, \"Mobil 2/3\"), React.createElement(\"option\", {\n    value: \" col-7\"\n  }, \"Mobil 7/12\"), React.createElement(\"option\", {\n    value: \" col-6\"\n  }, \"Mobil 1/2\"), React.createElement(\"option\", {\n    value: \" col-5\"\n  }, \"Mobil 5/12\"), React.createElement(\"option\", {\n    value: \" col-4\"\n  }, \"Mobil 1/3\"), React.createElement(\"option\", {\n    value: \" col-3\"\n  }, \"Mobil 1/4\"), React.createElement(\"option\", {\n    value: \" col-2\"\n  }, \"Mobil 1/6\"), React.createElement(\"option\", {\n    value: \" col-1\"\n  }, \"Mobil 1/12\")), React.createElement(\"select\", {\n    value: attributes.gridrastertablet,\n    onChange: onChangeGridRasterTablet\n  }, React.createElement(\"option\", {\n    value: \" col-md-12\"\n  }, \"Tablet 1/1\"), React.createElement(\"option\", {\n    value: \" col-md-11\"\n  }, \"Tablet 11/12\"), React.createElement(\"option\", {\n    value: \" col-md-10\"\n  }, \"Tablet 5/6\"), React.createElement(\"option\", {\n    value: \" col-md-9\"\n  }, \"Tablet 3/4\"), React.createElement(\"option\", {\n    value: \" col-md-8\"\n  }, \"Tablet 2/3\"), React.createElement(\"option\", {\n    value: \" col-md-7\"\n  }, \"Tablet 7/12\"), React.createElement(\"option\", {\n    value: \" col-md-6\"\n  }, \"Tablet 1/2\"), React.createElement(\"option\", {\n    value: \" col-md-5\"\n  }, \"Tablet 5/12\"), React.createElement(\"option\", {\n    value: \" col-md-4\"\n  }, \"Tablet 1/3\"), React.createElement(\"option\", {\n    value: \" col-md-3\"\n  }, \"Tablet 1/4\"), React.createElement(\"option\", {\n    value: \" col-md-2\"\n  }, \"Tablet 1/6\"), React.createElement(\"option\", {\n    value: \" col-md-1\"\n  }, \"Tablet 1/12\")), React.createElement(\"select\", {\n    value: attributes.gridrasterdesktop,\n    onChange: onChangeGridRasterDesktop\n  }, React.createElement(\"option\", {\n    value: \" col-xl-1\"\n  }, \"Desktop 1/12\"), React.createElement(\"option\", {\n    value: \" col-xl-2\"\n  }, \"Desktop 1/6\"), React.createElement(\"option\", {\n    value: \" col-xl-3\"\n  }, \"Desktop 1/4\"), React.createElement(\"option\", {\n    value: \" col-xl-4\"\n  }, \"Desktop 1/3\"), React.createElement(\"option\", {\n    value: \" col-xl-5\"\n  }, \"Desktop 5/12\"), React.createElement(\"option\", {\n    value: \" col-xl-6\"\n  }, \"Desktop 1/2\"), React.createElement(\"option\", {\n    value: \" col-xl-7\"\n  }, \"Desktop 7/12\"), React.createElement(\"option\", {\n    value: \" col-xl-8\"\n  }, \"Desktop 2/3\"), React.createElement(\"option\", {\n    value: \" col-xl-9\"\n  }, \"Desktop 3/4\"), React.createElement(\"option\", {\n    value: \" col-xl-10\"\n  }, \"Desktop 5/6\"), React.createElement(\"option\", {\n    value: \" col-xl-11\"\n  }, \"Desktop 11/12\"), React.createElement(\"option\", {\n    value: \" col-xl-12\"\n  }, \"Desktop 1/1\")), React.createElement(\"select\", {\n    value: attributes.containervisibility,\n    onChange: onChangeContainerVisibility\n  }, React.createElement(\"option\", {\n    value: \"\"\n  }, \"Immer Sichtbar\"), React.createElement(\"option\", {\n    value: \" d-block d-md-none\"\n  }, \"Nur auf Mobil sichtbar\"), React.createElement(\"option\", {\n    value: \" d-none d-md-block\"\n  }, \"Nur Desktop und Tablet sichtbar\")), React.createElement(\"select\", {\n    value: attributes.coloffsetdesktop,\n    onChange: onChangeColOffsetDesktop\n  }, React.createElement(\"option\", {\n    value: \"\"\n  }, \"Kein offset\"), React.createElement(\"option\", {\n    value: \" offset-xl-1\"\n  }, \"offset 1/12\"), React.createElement(\"option\", {\n    value: \" offset-xl-2\"\n  }, \"offset 1/6\"), React.createElement(\"option\", {\n    value: \" offset-xl-3\"\n  }, \"offset 1/4\"), React.createElement(\"option\", {\n    value: \" offset-xl-4\"\n  }, \"offset 1/3\"), React.createElement(\"option\", {\n    value: \" offset-xl-5\"\n  }, \"offset 5/12\"), React.createElement(\"option\", {\n    value: \" offset-xl-6\"\n  }, \"offset 1/2\"), React.createElement(\"option\", {\n    value: \" offset-xl-7\"\n  }, \"offset 7/12\"), React.createElement(\"option\", {\n    value: \" offset-xl-8\"\n  }, \"offset 2/3\"), React.createElement(\"option\", {\n    value: \" offset-xl-9\"\n  }, \"offset 3/4\"), React.createElement(\"option\", {\n    value: \" offset-xl-10\"\n  }, \"offset 5/6\"), React.createElement(\"option\", {\n    value: \" offset-xl-11\"\n  }, \"offset 11/12\"), React.createElement(\"option\", {\n    value: \" offset-xl-12\"\n  }, \"offset 1/1\"))), React.createElement(PanelBody, {\n    title: \"Hilfe\",\n    initialOpen: false\n  }, React.createElement(\"a\", {\n    href: \"https://84ghz.de\",\n    target: \"_blank\"\n  }, React.createElement(\"h2\", null, \"Anleitung f\\xFCr die Achtvier-Plugins\"), React.createElement(\"img\", {\n    src: \"https://84ghz.de/explain-achtvier-kontainer-img.png\"\n  })))), React.createElement(\"div\", {\n    className: colclasses\n  }, React.createElement(InnerBlocks, {\n    templateLock: false,\n    renderAppender: function renderAppender() {\n      return React.createElement(InnerBlocks.ButtonBlockAppender, null);\n    }\n  }), React.createElement(Tooltip, {\n    text: __('Edit Column Block')\n  }, React.createElement(\"label\", null, React.createElement(\"span\", {\n    \"class\": \"dashicons dashicons-admin-generic\"\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/bootstrap-cols/edit.js?");

/***/ }),

/***/ "./block-library/src/bootstrap-cols/index.js":
/*!***************************************************!*\
  !*** ./block-library/src/bootstrap-cols/index.js ***!
  \***************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/bootstrap-cols/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/bootstrap-cols/save.js\");\nvar _settings;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar settings = (_settings = {\n  title: \"ACHTVIER CONTAINER\",\n  icon: \"editor-insertmore\",\n  keywords: ['bootstrap-container', 'achtvier-container'],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: \"cgb/block-bootstrap-cols\"\n}, _defineProperty(_settings, \"title\", 'ACHTVIER SPALTE'), _defineProperty(_settings, \"icon\", 'layout'), _defineProperty(_settings, \"category\", 'layout'), _defineProperty(_settings, \"keywords\", ['bootstrap-cols', 'achtvier spalte spalten columns']), _defineProperty(_settings, \"attributes\", {\n  \"gridrasterdesktop\": {\n    \"type\": 'string',\n    \"default\": ' col-xl-12'\n  },\n  \"gridrastertablet\": {\n    \"type\": 'string',\n    \"default\": ' col-md-12'\n  },\n  \"gridrastermobile\": {\n    \"type\": 'string',\n    \"default\": ' col-sm-12'\n  },\n  \"coloffsetdesktop\": {\n    \"type\": 'string',\n    \"default\": ''\n  },\n  \"containervisibility\": {\n    \"type\": 'string',\n    \"default\": ''\n  }\n}), _settings);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/bootstrap-cols/index.js?");

/***/ }),

/***/ "./block-library/src/bootstrap-cols/save.js":
/*!**************************************************!*\
  !*** ./block-library/src/bootstrap-cols/save.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  var attributes = props.attributes;\n  var colclasses = applyColClasses();\n\n  function applyColClasses() {\n    var classarray = [];\n    var applyoutput = \" \";\n    classarray.push(attributes.gridrastermobile);\n    classarray.push(attributes.gridrasterdesktop);\n    classarray.push(attributes.gridrastertablet);\n    classarray.push(attributes.containervisibility);\n    classarray.push(attributes.coloffsetdesktop);\n    classarray.forEach(function callback(currentValue) {\n      applyoutput += currentValue;\n      applyoutput += \" \";\n    });\n    return applyoutput;\n  }\n\n  return React.createElement(\"div\", {\n    className: colclasses\n  }, React.createElement(InnerBlocks.Content, null));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/bootstrap-cols/save.js?");

/***/ }),

/***/ "./block-library/src/bootstrap-container/edit.js":
/*!*******************************************************!*\
  !*** ./block-library/src/bootstrap-container/edit.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blockEditor = wp.blockEditor,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    BlockControls = _wp$blockEditor.BlockControls,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    CheckboxControl = _wp$components.CheckboxControl,\n    PanelBody = _wp$components.PanelBody,\n    Tooltip = _wp$components.Tooltip;\nvar Fragment = wp.element.Fragment;\n\nfunction ContainerEdit(props) {\n  var attributes = props.attributes;\n\n  function applyClasses() {\n    var classarray = [];\n    var applyoutput = \" \";\n    classarray.push(attributes.containerwidth);\n    classarray.push(attributes.containervisibility);\n    classarray.forEach(function callback(currentValue) {\n      applyoutput += currentValue;\n      applyoutput += \" \";\n    });\n    return applyoutput;\n  }\n\n  function onChangeContainerWidth(event) {\n    var selected = event.target.querySelector('option:checked');\n    props.setAttributes({\n      containerwidth: selected.value\n    });\n    event.preventDefault();\n    props.className += applyClasses();\n  }\n\n  function onChangeContainerVisibility(event) {\n    var selected = event.target.querySelector('option:checked');\n    props.setAttributes({\n      containervisibility: selected.value\n    });\n    event.preventDefault();\n    props.className += applyClasses();\n  }\n\n  props.className += applyClasses();\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, null, React.createElement(\"select\", {\n    value: attributes.containerwidth,\n    onChange: onChangeContainerWidth\n  }, React.createElement(\"option\", {\n    value: \" container-fluid\"\n  }, \"Volle Breite\"), React.createElement(\"option\", {\n    value: \" container\"\n  }, \"Begrenzte Breite\")), React.createElement(\"select\", {\n    value: attributes.containervisibility,\n    onChange: onChangeContainerVisibility\n  }, React.createElement(\"option\", {\n    value: \"\"\n  }, \"Immer Sichtbar\"), React.createElement(\"option\", {\n    value: \" d-block d-sm-none\"\n  }, \"Nur auf Mobil sichtbar\"), React.createElement(\"option\", {\n    value: \" d-none d-sm-block\"\n  }, \"Nur Desktop und Tablet sichtbar\")))), React.createElement(\"div\", {\n    className: props.className\n  }, React.createElement(\"div\", {\n    \"class\": \"row\"\n  }, React.createElement(InnerBlocks, {\n    templateLock: false,\n    renderAppender: function renderAppender() {\n      return React.createElement(InnerBlocks.ButtonBlockAppender, null);\n    }\n  })), React.createElement(Tooltip, {\n    text: __('Edit Container Block')\n  }, React.createElement(\"label\", null, React.createElement(\"span\", {\n    \"class\": \"dashicons dashicons-admin-generic\"\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/bootstrap-container/edit.js?");

/***/ }),

/***/ "./block-library/src/bootstrap-container/index.js":
/*!********************************************************!*\
  !*** ./block-library/src/bootstrap-container/index.js ***!
  \********************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/bootstrap-container/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/bootstrap-container/save.js\");\n\n\nvar settings = {\n  title: \"ACHTVIER CONTAINER\",\n  icon: \"editor-insertmore\",\n  keywords: ['bootstrap-container', 'achtvier-container'],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  name: \"cgb/block-bootstrap-container\",\n  attributes: {\n    \"containerwidth\": {\n      \"type\": \"string\",\n      \"default\": \" container-fluid\"\n    },\n    \"containervisibility\": {\n      \"type\": \"string\",\n      \"default\": \"\"\n    }\n  },\n  category: \"layout\"\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/bootstrap-container/index.js?");

/***/ }),

/***/ "./block-library/src/bootstrap-container/save.js":
/*!*******************************************************!*\
  !*** ./block-library/src/bootstrap-container/save.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  function applyClasses() {\n    var classarray = [];\n    var applyoutput = \" \";\n    classarray.push(attributes.containerwidth);\n    classarray.push(attributes.containervisibility);\n    classarray.forEach(function callback(currentValue) {\n      applyoutput += currentValue;\n      applyoutput += \" \";\n    });\n    return applyoutput;\n  }\n\n  var attributes = props.attributes;\n  props.className += applyClasses();\n  return React.createElement(\"div\", {\n    className: props.className\n  }, React.createElement(\"div\", {\n    className: \"row\"\n  }, React.createElement(InnerBlocks.Content, null)));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/bootstrap-container/save.js?");

/***/ }),

/***/ "./block-library/src/bootstraptabs/edit.js":
/*!*************************************************!*\
  !*** ./block-library/src/bootstraptabs/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    RangeControl = _wp$components.RangeControl,\n    SelectControl = _wp$components.SelectControl;\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks;\n\nfunction AVBootstrapTabsEdit(props) {\n  var getTabs = function getTabs(_ref) {\n    var tabsCount = _ref.tabsCount,\n        tabsSettings = _ref.tabsSettings;\n    console.log(tabsSettings);\n    var result = [];\n\n    for (var k = 1; k <= tabsCount; k++) {\n      result.push({\n        label: tabsSettings['tab_' + k] ? tabsSettings['tab_' + k].label : sprintf(__('Tab %d'), k),\n        number: k\n      });\n    }\n\n    return result;\n  };\n  /**\n   * Returns the layouts configuration for a given number of tabs.\n   *\n   * @param {number} attributes tabs attributes.\n   *\n   * @return {Object[]} Tabs layout configuration.\n   */\n\n\n  var getTabsTemplate = function getTabsTemplate(attributes) {\n    var tabsCount = attributes.tabsCount,\n        blockID = attributes.blockID;\n    var result = [];\n    var active = \"\";\n\n    for (var k = 1; k <= tabsCount; k++) {\n      if (k == 1) {\n        active = \"active\";\n      }\n\n      result.push(['achtvier/bettertab', {\n        id: 'tab-' + k,\n        active: active\n      }]);\n      active = \"\";\n    }\n\n    console.log(result);\n    return result;\n  };\n\n  var tabtemplate = function tabtemplate(tabid, isactive) {\n    return [['achtvier/bettertab', {\n      id: tabid,\n      active: isactive\n    }] // [ blockName, attributes ]\n    ];\n  };\n\n  var tabtemplate2 = function tabtemplate2(itemtabs) {\n    function idize(headerraw) {\n      var idheader = headerraw.replace(/\\s+/g, '-').toLowerCase();\n      return idheader;\n    }\n\n    var ret_arr = [];\n    var active = true;\n    itemtabs.forEach(function (tab) {\n      var singletab;\n\n      if (active) {\n        singletab = tabtemplate(idize(tab.linkid), \"active\");\n        active = false;\n      } else {\n        singletab = tabtemplate(idize(tab.linkid), \"\");\n      }\n\n      console.log(singletab);\n      ret_arr.push(singletab[0]);\n    });\n    console.log(ret_arr);\n    return ret_arr;\n  };\n\n  var attributes = props.attributes,\n      setAttributes = props.setAttributes;\n\n  if (typeof props.attributes.blockID == \"undefined\") {\n    setAttributes({\n      blockID: props.clientId\n    });\n    console.log(props.attributes.blockID);\n  }\n\n  function newTab() {\n    var output = _toConsumableArray(tabItems);\n\n    output.push({\n      header: \"New Tab\",\n      linkid: addid()\n    });\n    return output;\n  }\n\n  console.log(props.attributes.tabsSettings);\n  var tabs = getTabs(attributes, props.clientId);\n  var tabsCount = props.attributes.tabsCount;\n  var tabItems = props.attributes.tabItems;\n  var tabsSettings = props.attributes.tabsSettings;\n\n  function idize(headerraw) {\n    var idheader = headerraw.replace(/\\s+/g, '-').toLowerCase();\n    return idheader;\n  }\n\n  function addid() {\n    return (+new Date()).toString(36);\n  }\n\n  function updateHeader(headernew, index) {\n    tabItems[index].header = headernew;\n  }\n\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, null, React.createElement(RangeControl, {\n    label: __('Tabs'),\n    value: tabsCount,\n    onChange: function onChange(value) {\n      return setAttributes({\n        tabsCount: value\n      });\n    },\n    min: 1,\n    max: 25\n  }))), React.createElement(\"div\", {\n    className: props.className,\n    style: {\n      border: 'none'\n    }\n  }, React.createElement(\"ul\", {\n    className: \"avgb-tabs-panel\"\n  }, tabs.map(function (val) {\n    return React.createElement(\"span\", {\n      className: \"bettertabs-tab\"\n    }, React.createElement(RichText, {\n      tagName: \"a\",\n      \"data-tab\": val.number,\n      placeholder: __('Tab label…'),\n      className: \"bettertabs-tab\",\n      value: val.label,\n      unstableOnFocus: function unstableOnFocus() {\n        return setAttributes({\n          tabActive: val.number\n        });\n      },\n      onChange: function onChange(value) {\n        if (typeof tabs[val.number - 1] !== 'undefined') {\n          if (typeof tabsSettings[\"tab_\".concat(val.number)] === 'undefined') {\n            tabsSettings[\"tab_\".concat(val.number)] = {};\n          }\n\n          value = value.replace(/[<]br[^>]*[>]/gi, \"\");\n          tabsSettings[\"tab_\".concat(val.number)].label = value;\n          setAttributes({\n            tabsSettings: Object.assign({}, tabsSettings)\n          });\n        }\n      },\n      formattingControls: ['bold', 'italic', 'strikethrough'],\n      inlineToolbar: true,\n      key: \"tab_button_\".concat(val.number)\n    }));\n  })), React.createElement(\"div\", {\n    id: props.attributes.blockID\n  }, React.createElement(InnerBlocks, {\n    template: getTabsTemplate(attributes),\n    templateLock: \"all\",\n    allowedBlocks: ['achtvier/bettertab']\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVBootstrapTabsEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/bootstraptabs/edit.js?");

/***/ }),

/***/ "./block-library/src/bootstraptabs/index.js":
/*!**************************************************!*\
  !*** ./block-library/src/bootstraptabs/index.js ***!
  \**************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/bootstraptabs/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/bootstraptabs/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  name: \"achtvier-blocks/bettertabs\",\n  title: __('Tabs'),\n  // Block title.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('achtvier-better-tabs')],\n  attributes: {\n    tabItems: {\n      type: \"children\",\n      \"default\": [{\n        header: __('Tab 1'),\n        linkid: 'id1'\n      }, {\n        header: __('Tab 2'),\n        linkid: 'id2'\n      }]\n    },\n    changed: {\n      type: 'boolean',\n      \"default\": false\n    },\n    blockID: {\n      type: 'string'\n    },\n    tabsCount: {\n      type: 'number',\n      \"default\": 2\n    },\n    tabActive: {\n      type: 'number',\n      \"default\": 1\n    },\n    tabsSettings: {\n      type: 'object',\n      \"default\": {}\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/bootstraptabs/index.js?");

/***/ }),

/***/ "./block-library/src/bootstraptabs/save.js":
/*!*************************************************!*\
  !*** ./block-library/src/bootstraptabs/save.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nfunction save(props) {\n  var getTabs = function getTabs(_ref) {\n    var tabsCount = _ref.tabsCount,\n        tabsSettings = _ref.tabsSettings;\n    var result = [];\n\n    for (var k = 1; k <= tabsCount; k++) {\n      result.push({\n        label: tabsSettings['tab_' + k] ? tabsSettings['tab_' + k].label : sprintf(__('Tab %d'), k),\n        number: k\n      });\n    }\n\n    return result;\n  };\n\n  var tabItems = props.attributes.tabItems;\n  var tabs = getTabs(props.attributes);\n\n  function idize(headerraw) {\n    var idheader = headerraw.replace(/\\s+/g, '-').toLowerCase();\n    return idheader;\n  }\n\n  return React.createElement(\"div\", {\n    className: props.className + \" container\"\n  }, React.createElement(\"div\", {\n    className: \"row\"\n  }, React.createElement(\"div\", {\n    className: \"col-lg-3 col-md-6 col-sm-12\"\n  }, React.createElement(\"ul\", {\n    className: \"nav nav-tabs--vertical\",\n    id: 'achtvier-guten-tabs-' + props.attributes.blockID,\n    role: \"tablist\"\n  }, tabs.map(function (tabItem) {\n    return React.createElement(\"li\", {\n      className: \"nav-item\"\n    }, React.createElement(\"a\", {\n      href: \"#tab-\" + tabItem.number,\n      className: \"nav-link\",\n      \"data-toggle\": \"tab\",\n      role: \"tab\"\n    }, tabItem.label));\n  }))), React.createElement(\"div\", {\n    className: \"col-lg-9 col-md-6 col-sm-12 tab-content\"\n  }, React.createElement(InnerBlocks.Content, null))));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/bootstraptabs/save.js?");

/***/ }),

/***/ "./block-library/src/box-hover-caption/edit.js":
/*!*****************************************************!*\
  !*** ./block-library/src/box-hover-caption/edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    BlockControls = _wp$blockEditor.BlockControls,\n    MediaUpload = _wp$blockEditor.MediaUpload;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    PanelBody = _wp$components.PanelBody,\n    ToggleControl = _wp$components.ToggleControl,\n    TextControls = _wp$components.TextControls,\n    ColorPicker = _wp$components.ColorPicker;\nvar Fragment = wp.element.Fragment;\n\nfunction AVBoxHoverCaptionEdit(props) {\n  var getImageButton = function getImageButton(openEvent) {\n    return React.createElement(\"div\", {\n      className: \"button-container\"\n    }, React.createElement(Button, {\n      onClick: openEvent,\n      className: \"button button-large\"\n    }, \"HGBild\"));\n  };\n\n  var setAttributes = props.setAttributes,\n      attributes = props.attributes,\n      className = props.className;\n\n  function onTitleChange(changes) {\n    setAttributes({\n      title: changes\n    });\n  }\n\n  function onContentChange(changes) {\n    setAttributes({\n      content: changes\n    });\n  }\n\n  function onLinkURLChange(changes) {\n    setAttributes({\n      linkURL: changes\n    });\n  }\n\n  function onLinkTextChange(changes) {\n    setAttributes({\n      linkText: changes\n    });\n  }\n\n  function onShowLinkOverlayChange(changes) {\n    setAttributes({\n      showLinkOverlay: changes\n    });\n  }\n\n  function onBgColorChange(changes) {\n    console.log(changes);\n    setAttributes({\n      bgColor: changes\n    });\n  }\n\n  function onSelectImage(media) {\n    setAttributes({\n      mediaURL: media.url,\n      mediaID: media.id\n    });\n  }\n\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n    title: __('Kacheleinstellungen')\n  }, React.createElement(MediaUpload, {\n    onSelect: onSelectImage,\n    type: \"image\",\n    value: props.attributes.imageID,\n    render: function render(_ref) {\n      var open = _ref.open;\n      return getImageButton(open);\n    }\n  }), React.createElement(ToggleControl, {\n    label: __('Show link overlay'),\n    checked: attributes.showLinkOverlay,\n    onChange: onShowLinkOverlayChange\n  }), React.createElement(TextControl, {\n    label: __('Link URL'),\n    value: attributes.linkURL,\n    onChange: onLinkURLChange\n  }), React.createElement(TextControl, {\n    label: __('Link text'),\n    value: attributes.linkText,\n    onChange: onLinkTextChange\n  }), React.createElement(\"label\", null, \"Hintergrundfarbe\"), React.createElement(ColorPicker, {\n    value: attributes.bgColor,\n    onChange: onBgColorChange\n  }))), React.createElement(\"div\", {\n    className: props.className,\n    style: {\n      backgroundImage: \"url('\" + props.attributes.mediaURL + \"')\",\n      backgroundSize: 'cover',\n      backgroundPosition: 'center',\n      backgroundColor: props.attributes.bgColor\n    }\n  }, React.createElement(\"div\", {\n    className: \"kachel-inner-wrapper\"\n  }, React.createElement(InnerBlocks, null))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVBoxHoverCaptionEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/box-hover-caption/edit.js?");

/***/ }),

/***/ "./block-library/src/box-hover-caption/index.js":
/*!******************************************************!*\
  !*** ./block-library/src/box-hover-caption/index.js ***!
  \******************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/box-hover-caption/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/box-hover-caption/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  name: \"achtvier/better-tile\",\n  title: __('Box Hover Caption'),\n  // Block title.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('achtvier-kachel')],\n  attributes: {\n    mediaID: {\n      type: 'number'\n    },\n    mediaURL: {\n      type: 'string'\n    },\n    showLinkOverlay: {\n      type: 'boolean',\n      \"default\": 'false'\n    },\n    linkURL: {\n      type: 'string'\n    },\n    linkText: {\n      type: 'string'\n    },\n    bgColor: {\n      type: 'string'\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/box-hover-caption/index.js?");

/***/ }),

/***/ "./block-library/src/box-hover-caption/save.js":
/*!*****************************************************!*\
  !*** ./block-library/src/box-hover-caption/save.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  var getLinkOverlay = function getLinkOverlay() {\n    if (props.attributes.showLinkOverlay) {\n      return React.createElement(\"div\", {\n        className: \"linkoverlay\"\n      }, React.createElement(\"a\", {\n        href: props.attributes.linkURL,\n        className: \"kachel-overlay-link\"\n      }, props.attributes.linkText));\n    } else return null;\n  };\n\n  return React.createElement(\"div\", {\n    className: props.className,\n    style: {\n      backgroundImage: \"url('\" + props.attributes.mediaURL + \"')\",\n      backgroundSize: 'cover',\n      backgroundPosition: 'center'\n    }\n  }, React.createElement(\"div\", {\n    className: \"kachel-inner-wrapper\"\n  }, React.createElement(\"div\", {\n    className: \"inside-wrapper\"\n  }, React.createElement(InnerBlocks.Content, null)), getLinkOverlay()));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/box-hover-caption/save.js?");

/***/ }),

/***/ "./block-library/src/box-hover-overlay/edit.js":
/*!*****************************************************!*\
  !*** ./block-library/src/box-hover-overlay/edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    BlockControls = _wp$blockEditor.BlockControls,\n    MediaUpload = _wp$blockEditor.MediaUpload;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    PanelBody = _wp$components.PanelBody,\n    ToggleControl = _wp$components.ToggleControl,\n    TextControls = _wp$components.TextControls,\n    ColorPicker = _wp$components.ColorPicker;\nvar Fragment = wp.element.Fragment;\n\nfunction AVBoxOverlayEdit(props) {\n  // Creates a <p class='wp-block-cgb-block-achtvier-kachel'></p>.\n  var getImageButton = function getImageButton(openEvent) {\n    return React.createElement(\"div\", {\n      className: \"button-container\"\n    }, React.createElement(Button, {\n      onClick: openEvent,\n      className: \"button button-large\"\n    }, \"HGBild\"));\n  };\n\n  var setAttributes = props.setAttributes,\n      attributes = props.attributes,\n      className = props.className;\n\n  function onTitleChange(changes) {\n    setAttributes({\n      title: changes\n    });\n  }\n\n  function onContentChange(changes) {\n    setAttributes({\n      content: changes\n    });\n  }\n\n  function onLinkURLChange(changes) {\n    setAttributes({\n      linkURL: changes\n    });\n  }\n\n  function onLinkTextChange(changes) {\n    setAttributes({\n      linkText: changes\n    });\n  }\n\n  function onShowLinkChange(changes) {\n    setAttributes({\n      showLink: changes\n    });\n  }\n\n  function onOverlayColorChange(changes) {\n    setAttributes({\n      overlayColor: \"rgba(\" + changes.rgb.r + \",\" + changes.rgb.g + \",\" + changes.rgb.b + \",\" + changes.rgb.a + \")\",\n      overlayTransparency: changes.rgb.a\n    });\n  }\n\n  function onSelectImage(media) {\n    setAttributes({\n      mediaURL: media.url,\n      mediaID: media.id\n    });\n  }\n\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n    title: __('Kacheleinstellungen')\n  }, React.createElement(MediaUpload, {\n    onSelect: onSelectImage,\n    type: \"image\",\n    value: props.attributes.imageID,\n    render: function render(_ref) {\n      var open = _ref.open;\n      return getImageButton(open);\n    }\n  }), React.createElement(ToggleControl, {\n    label: __('Show link'),\n    checked: attributes.showLink,\n    onChange: onShowLinkChange\n  }), React.createElement(TextControl, {\n    label: __('Link URL'),\n    value: attributes.linkURL,\n    onChange: onLinkURLChange\n  }), React.createElement(TextControl, {\n    label: __('Link text'),\n    value: attributes.linkText,\n    onChange: onLinkTextChange\n  }))), React.createElement(\"div\", {\n    className: props.className,\n    style: {\n      backgroundImage: \"url('\" + props.attributes.mediaURL + \"')\",\n      backgroundSize: 'cover',\n      backgroundPosition: 'center'\n    }\n  }, \">\", React.createElement(\"div\", {\n    className: \"overlay-wrapper\"\n  }, React.createElement(InnerBlocks, null)), React.createElement(\"label\", null, \"achtvier-overlay-tile\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVBoxOverlayEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/box-hover-overlay/edit.js?");

/***/ }),

/***/ "./block-library/src/box-hover-overlay/index.js":
/*!******************************************************!*\
  !*** ./block-library/src/box-hover-overlay/index.js ***!
  \******************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/box-hover-overlay/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/box-hover-overlay/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  name: \"achtvier/overlay-tile\",\n  title: __('Overlay tile'),\n  // Block title.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('achtvier-kachel')],\n  attributes: {\n    mediaID: {\n      type: 'number'\n    },\n    mediaURL: {\n      type: 'string'\n    },\n    linkURL: {\n      type: 'string'\n    },\n    linkText: {\n      type: 'string'\n    },\n    showLink: {\n      type: 'boolean'\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/box-hover-overlay/index.js?");

/***/ }),

/***/ "./block-library/src/box-hover-overlay/save.js":
/*!*****************************************************!*\
  !*** ./block-library/src/box-hover-overlay/save.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  var getLink = function getLink() {\n    if (props.attributes.showLink) {\n      return React.createElement(\"div\", {\n        className: \"overlay-link-wrapper\"\n      }, React.createElement(\"a\", {\n        href: props.attributes.linkURL,\n        className: \"kachel-overlay-link\"\n      }, props.attributes.linkText));\n    } else return null;\n  };\n\n  return React.createElement(\"div\", {\n    className: props.className\n  }, React.createElement(\"img\", {\n    src: props.attributes.mediaURL,\n    className: \"ok-image\"\n  }), React.createElement(\"div\", {\n    className: \"kachel-overlay-wrapper\"\n  }, React.createElement(\"div\", {\n    className: \"linkoverlay\"\n  }, React.createElement(\"div\", {\n    className: \"overlay-inner-wrapper\"\n  }, React.createElement(InnerBlocks.Content, null), getLink()))));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/box-hover-overlay/save.js?");

/***/ }),

/***/ "./block-library/src/editor.scss":
/*!***************************************!*\
  !*** ./block-library/src/editor.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/editor.scss?");

/***/ }),

/***/ "./block-library/src/index.js":
/*!************************************!*\
  !*** ./block-library/src/index.js ***!
  \************************************/
/*! exports provided: registerAchtvierBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerAchtvierBlocks\", function() { return registerAchtvierBlocks; });\n/* harmony import */ var _bootstrap_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap-container */ \"./block-library/src/bootstrap-container/index.js\");\n/* harmony import */ var _bootstrap_cols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap-cols */ \"./block-library/src/bootstrap-cols/index.js\");\n/* harmony import */ var _avsection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avsection */ \"./block-library/src/avsection/index.js\");\n/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordeon */ \"./block-library/src/accordeon/index.js\");\n/* harmony import */ var _accordeonitem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordeonitem */ \"./block-library/src/accordeonitem/index.js\");\n/* harmony import */ var _mini_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mini-content */ \"./block-library/src/mini-content/index.js\");\n/* harmony import */ var _newsticker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsticker */ \"./block-library/src/newsticker/index.js\");\n/* harmony import */ var _singletab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./singletab */ \"./block-library/src/singletab/index.js\");\n/* harmony import */ var _bootstraptabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bootstraptabs */ \"./block-library/src/bootstraptabs/index.js\");\n/* harmony import */ var _box_hover_caption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./box-hover-caption */ \"./block-library/src/box-hover-caption/index.js\");\n/* harmony import */ var _box_hover_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./box-hover-overlay */ \"./block-library/src/box-hover-overlay/index.js\");\n/* harmony import */ var _av_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./av-slider */ \"./block-library/src/av-slider/index.js\");\n/* harmony import */ var _parallax_bg_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parallax-bg-wrapper */ \"./block-library/src/parallax-bg-wrapper/index.js\");\n/* harmony import */ var _readmore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./readmore */ \"./block-library/src/readmore/index.js\");\n/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wrapper */ \"./block-library/src/wrapper/index.js\");\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n//import blocks here\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Function to register an individual block.\n *\n * @param {Object} block The block to be registered.\n *\n */\n\nvar registerBlock = function registerBlock(block) {\n  if (!block) {\n    return;\n  }\n\n  registerBlockType(block.settings.name, block.settings);\n};\n/**\n * Function to register blocks provided by the block editor.\n */\n\n\nvar registerAchtvierBlocks = function registerAchtvierBlocks() {\n  [//type imported blocks here\n  _bootstrap_container__WEBPACK_IMPORTED_MODULE_0__, _bootstrap_cols__WEBPACK_IMPORTED_MODULE_1__, _avsection__WEBPACK_IMPORTED_MODULE_2__, _accordeonitem__WEBPACK_IMPORTED_MODULE_4__, _accordeon__WEBPACK_IMPORTED_MODULE_3__, _mini_content__WEBPACK_IMPORTED_MODULE_5__, _newsticker__WEBPACK_IMPORTED_MODULE_6__, _singletab__WEBPACK_IMPORTED_MODULE_7__, _bootstraptabs__WEBPACK_IMPORTED_MODULE_8__, _box_hover_caption__WEBPACK_IMPORTED_MODULE_9__, _box_hover_overlay__WEBPACK_IMPORTED_MODULE_10__, _av_slider__WEBPACK_IMPORTED_MODULE_11__, _parallax_bg_wrapper__WEBPACK_IMPORTED_MODULE_12__, _readmore__WEBPACK_IMPORTED_MODULE_13__, _wrapper__WEBPACK_IMPORTED_MODULE_14__].forEach(registerBlock);\n};\nregisterAchtvierBlocks();\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/index.js?");

/***/ }),

/***/ "./block-library/src/mini-content/edit.js":
/*!************************************************!*\
  !*** ./block-library/src/mini-content/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    MediaUpload = _wp$blockEditor.MediaUpload; // Import registerBlockType() from wp.blocks\n\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl;\n\nfunction AVminiContentEdit(props) {\n  var setAttributes = props.setAttributes,\n      attributes = props.attributes,\n      className = props.className;\n\n  var getImageButton = function getImageButton(openEvent) {\n    if (attributes.mediaURL) {\n      return React.createElement(\"img\", {\n        src: attributes.mediaURL,\n        onClick: openEvent,\n        className: \"image\"\n      });\n    } else {\n      return React.createElement(\"div\", {\n        className: \"button-container\"\n      }, React.createElement(Button, {\n        onClick: openEvent,\n        className: \"button button-large\"\n      }, \"Bild ausw\\xE4hlen\"));\n    }\n  };\n\n  function onTitleChange(changes) {\n    setAttributes({\n      title: changes\n    });\n  }\n\n  function onContentChange(changes) {\n    setAttributes({\n      content: changes\n    });\n  }\n\n  function onSelectImage(media) {\n    console.log(media);\n    setAttributes({\n      mediaURL: media.sizes.full.url,\n      mediaID: media.id\n    });\n  }\n\n  function onSecondaryContentChange(changes) {\n    setAttributes({\n      secondaryContent: changes\n    });\n  } // Creates a <p class='wp-block-cgb-block-achtvier-guten-mini-content'></p>.\n\n\n  return React.createElement(\"div\", {\n    className: className\n  }, React.createElement(MediaUpload, {\n    onSelect: onSelectImage,\n    value: attributes.imageID,\n    render: function render(_ref) {\n      var open = _ref.open;\n      return React.createElement(Button, {\n        onClick: open\n      }, \"Open Media Library\");\n    }\n  }), React.createElement(TextControl, {\n    tagName: \"h3\",\n    value: attributes.title,\n    onChange: onTitleChange,\n    placeholder: \"Titel!\"\n  }), React.createElement(RichText, {\n    tagName: \"p\",\n    value: attributes.content,\n    onChange: onContentChange,\n    placeholder: \"inhalt!\"\n  }), React.createElement(RichText, {\n    tagName: \"p\",\n    value: attributes.secondaryContent,\n    onChange: onSecondaryContentChange,\n    placeholder: \"Zusatzinhalt!\",\n    className: \"bottom-content\"\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVminiContentEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/mini-content/edit.js?");

/***/ }),

/***/ "./block-library/src/mini-content/index.js":
/*!*************************************************!*\
  !*** ./block-library/src/mini-content/index.js ***!
  \*************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/mini-content/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/mini-content/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  name: \"achtvierblocks/better-mini-content\",\n  title: __('better-mini-content'),\n  // Block title.\n  icon: 'media-document',\n  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('better-mini-content')],\n  attributes: {\n    title: {\n      type: 'array',\n      source: 'children',\n      selector: 'h3'\n    },\n    content: {\n      type: 'array',\n      source: 'children',\n      selector: 'p'\n    },\n    secondaryContent: {\n      type: 'array',\n      source: 'children',\n      selector: 'p.bottom-content'\n    },\n    mediaID: {\n      type: 'number'\n    },\n    mediaURL: {\n      type: 'string'\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/mini-content/index.js?");

/***/ }),

/***/ "./block-library/src/mini-content/save.js":
/*!************************************************!*\
  !*** ./block-library/src/mini-content/save.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  var attributes = props.attributes,\n      className = props.className;\n  return React.createElement(\"div\", {\n    className: className\n  }, React.createElement(\"div\", {\n    className: \"mini-headerimage\",\n    style: {\n      backgroundImage: \"url('\" + attributes.mediaURL + \"')\"\n    }\n  }), React.createElement(\"h3\", null, attributes.title), React.createElement(\"p\", {\n    className: \"top-content\"\n  }, attributes.content), React.createElement(\"p\", {\n    className: \"bottom-content\"\n  }, attributes.secondaryContent));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/mini-content/save.js?");

/***/ }),

/***/ "./block-library/src/newsticker/edit.js":
/*!**********************************************!*\
  !*** ./block-library/src/newsticker/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    BlockControls = _wp$blockEditor.BlockControls,\n    MediaUpload = _wp$blockEditor.MediaUpload;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    RangeControl = _wp$components.RangeControl,\n    PanelBody = _wp$components.PanelBody,\n    ToggleControl = _wp$components.ToggleControl,\n    TextControls = _wp$components.TextControls,\n    ColorPicker = _wp$components.ColorPicker;\nvar Fragment = wp.element.Fragment;\n\nfunction AVNewstickerEdit(props) {\n  var setAttributes = props.setAttributes,\n      attributes = props.attributes,\n      className = props.className,\n      setState = props.setState;\n  var counterBegin = attributes.counterBegin,\n      counterEnd = attributes.counterEnd,\n      startDelay = attributes.startDelay,\n      bgColor = attributes.bgColor,\n      fgColor = attributes.fgColor;\n\n  function onshowLinkedChange(changes) {\n    setAttributes({\n      showLinked: changes\n    });\n  }\n\n  function onLinkUrlChange(changes) {\n    setAttributes({\n      linkURL: changes\n    });\n  }\n\n  function onNewsTickerTextChange(changes) {\n    setAttributes({\n      newsTickerText: changes\n    });\n  }\n\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n    title: __('Newsticker settings')\n  }, React.createElement(\"label\", null, \"Link url\"), React.createElement(TextControl, {\n    value: attributes.linkURL,\n    onChange: onLinkUrlChange,\n    placeholder: \"#\"\n  }), React.createElement(ToggleControl, {\n    label: __('Show link'),\n    checked: attributes.showLinked,\n    onChange: onshowLinkedChange\n  }))), React.createElement(\"div\", {\n    className: props.className\n  }, React.createElement(TextControl, {\n    tagName: \"p\",\n    value: attributes.newsTickerText,\n    onChange: onNewsTickerTextChange,\n    placeholder: \"Ticker Inhalt\"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVNewstickerEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/newsticker/edit.js?");

/***/ }),

/***/ "./block-library/src/newsticker/index.js":
/*!***********************************************!*\
  !*** ./block-library/src/newsticker/index.js ***!
  \***********************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/newsticker/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/newsticker/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  name: \"achtvier/newsticker\",\n  title: __('Newsticker'),\n  // Block title.\n  icon: 'media-document',\n  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('newsticker')],\n  attributes: {\n    showLinked: {\n      type: 'boolean'\n    },\n    linkURL: {\n      type: 'string'\n    },\n    newsTickerText: {\n      type: 'string'\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/newsticker/index.js?");

/***/ }),

/***/ "./block-library/src/newsticker/save.js":
/*!**********************************************!*\
  !*** ./block-library/src/newsticker/save.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nfunction save(props) {\n  var attributes = {\n    props: props\n  };\n\n  var getLink = function getLink() {\n    if (props.attributes.showLinked) {\n      return React.createElement(\"a\", {\n        href: props.attributes.linkURL,\n        className: \"newsticker-content\"\n      }, props.attributes.newsTickerText);\n    } else return React.createElement(\"p\", {\n      className: \"newsticker-content\"\n    }, props.attributes.newsTickerText);\n  };\n\n  return React.createElement(\"div\", {\n    className: props.className\n  }, getLink());\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/newsticker/save.js?");

/***/ }),

/***/ "./block-library/src/parallax-bg-wrapper/edit.js":
/*!*******************************************************!*\
  !*** ./block-library/src/parallax-bg-wrapper/edit.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks,\n    MediaUpload = _wp$blockEditor.MediaUpload;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    PanelBody = _wp$components.PanelBody;\nvar Fragment = wp.element.Fragment;\n\nfunction AVParallaxBgEdit(props) {\n  if (typeof props.attributes.parallaxID == \"undefined\") {\n    props.setAttributes({\n      parallaxID: (+new Date()).toString(36).slice(-8)\n    });\n    console.log(props.attributes);\n  }\n\n  var getImageButton = function getImageButton(openEvent, caption) {\n    return React.createElement(\"div\", {\n      className: \"button-container\"\n    }, React.createElement(Button, {\n      onClick: openEvent,\n      className: \"button button-large\"\n    }, caption));\n  };\n\n  var setAttributes = props.setAttributes,\n      attributes = props.attributes,\n      className = props.className;\n\n  function onSelectImage(media) {\n    setAttributes({\n      mediaURL: media.url,\n      mediaID: media.id\n    });\n  }\n\n  function onSelectMobileImage(media) {\n    setAttributes({\n      mobilemediaURL: media.url,\n      mobilemediaID: media.id\n    });\n  }\n\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n    title: __('Parallax Settings')\n  }, React.createElement(MediaUpload, {\n    onSelect: onSelectImage,\n    type: \"image\",\n    value: props.attributes.mediaID,\n    render: function render(_ref) {\n      var open = _ref.open;\n      return getImageButton(open, 'HGDesktop');\n    }\n  }), React.createElement(MediaUpload, {\n    onSelect: onSelectMobileImage,\n    type: \"image\",\n    value: props.attributes.mobilemediaID,\n    render: function render(_ref2) {\n      var open = _ref2.open;\n      return getImageButton(open, 'HGMobil');\n    }\n  }))), React.createElement(\"div\", {\n    className: props.className,\n    style: {\n      backgroundImage: \"url('\" + props.attributes.mediaURL + \"')\"\n    }\n  }, \">\", React.createElement(InnerBlocks, null), React.createElement(\"label\", null, \"achtvier-parallax-tile\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVParallaxBgEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/parallax-bg-wrapper/edit.js?");

/***/ }),

/***/ "./block-library/src/parallax-bg-wrapper/index.js":
/*!********************************************************!*\
  !*** ./block-library/src/parallax-bg-wrapper/index.js ***!
  \********************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/parallax-bg-wrapper/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/parallax-bg-wrapper/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nvar settings = {\n  name: \"achtvier/parallax-bg-wrapper\",\n  title: __('Parallax Background Wrapper'),\n  description: __('A div wrapper with a parallax Background'),\n  category: 'achtvier-blocks',\n  attributes: {\n    mediaID: {\n      type: 'number'\n    },\n    mediaURL: {\n      type: 'string'\n    },\n    mobilemediaID: {\n      type: 'number'\n    },\n    mobilemediaURL: {\n      type: 'string'\n    },\n    parallaxID: {\n      type: 'string'\n    }\n  },\n  migrate: function migrate(attributes) {\n    return {\n      mediaID: attributes.mediaID,\n      mediaURL: attributes.mediaURL,\n      mobilemediaID: attributes.mediaID,\n      mobilemediaURL: attributes.mediaURL,\n      parallaxID: (+new Date()).toString(36).slice(-8)\n    };\n  },\n  deprecated: [{\n    attributes: {\n      mediaID: {\n        type: 'number'\n      },\n      mediaURL: {\n        type: 'string'\n      }\n    },\n    save: function save(props) {\n      return React.createElement(\"div\", {\n        className: props.className,\n        style: {\n          backgroundImage: \"url('\" + props.attributes.mediaURL + \"')\"\n        }\n      }, React.createElement(InnerBlocks.Content, null));\n    }\n  }],\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/parallax-bg-wrapper/index.js?");

/***/ }),

/***/ "./block-library/src/parallax-bg-wrapper/save.js":
/*!*******************************************************!*\
  !*** ./block-library/src/parallax-bg-wrapper/save.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  console.log(props.attributes.parallaxID);\n  return React.createElement(\"div\", {\n    id: props.attributes.parallaxID,\n    className: props.className\n  }, React.createElement(InnerBlocks.Content, null), React.createElement(\"style\", {\n    dangerouslySetInnerHTML: {\n      __html: '@media (max-width: 767px) {' + '#' + props.attributes.parallaxID + ' {background-image: url(' + props.attributes.mobilemediaURL + '); }}'\n    }\n  }), React.createElement(\"style\", {\n    dangerouslySetInnerHTML: {\n      __html: '@media (min-width: 768px) {#' + props.attributes.parallaxID + ' {background-image: url(' + props.attributes.mediaURL + '); }}'\n    }\n  }));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/parallax-bg-wrapper/save.js?");

/***/ }),

/***/ "./block-library/src/readmore/edit.js":
/*!********************************************!*\
  !*** ./block-library/src/readmore/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    RangeControl = _wp$components.RangeControl,\n    ToggleControl = _wp$components.ToggleControl,\n    TextControl = _wp$components.TextControl;\nvar Fragment = wp.element.Fragment;\n\nfunction EditReadMore(props) {\n  var setAttributes = props.setAttributes,\n      attributes = props.attributes,\n      className = props.className;\n\n  function onSlideSpeedChange(changes) {\n    setAttributes({\n      slideSpeed: changes\n    });\n  }\n\n  function onHeightOnMobileChange(changes) {\n    setAttributes({\n      heightOnMobile: changes\n    });\n  }\n\n  function onTriggerTextChange(changes) {\n    setAttributes({\n      triggerText: changes\n    });\n  }\n\n  return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n    title: __('Settings')\n  }, React.createElement(RangeControl, {\n    label: __(\"Slide down Speed\"),\n    value: props.attributes.slideSpeed,\n    onChange: onSlideSpeedChange,\n    min: 10,\n    max: 5000\n  }), React.createElement(RangeControl, {\n    label: __(\"Height on Mobile\"),\n    value: props.attributes.heightOnMobile,\n    onChange: onHeightOnMobileChange,\n    min: 20,\n    max: 3000\n  }), React.createElement(TextControl, {\n    label: \"Trigger Label\",\n    value: props.attributes.triggerText,\n    onChange: onTriggerTextChange\n  }))), React.createElement(\"div\", {\n    className: props.className\n  }, React.createElement(InnerBlocks, {\n    allowedBlocks: ['core/paragraph']\n  })), React.createElement(\"label\", null, \"Read more on mobile\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditReadMore);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/readmore/edit.js?");

/***/ }),

/***/ "./block-library/src/readmore/index.js":
/*!*********************************************!*\
  !*** ./block-library/src/readmore/index.js ***!
  \*********************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/readmore/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/readmore/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  name: \"achtvier/read-more\",\n  title: __('Read more on Mobile'),\n  // Block title.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('read-more-mobile')],\n  attributes: {\n    slideSpeed: {\n      type: 'number',\n      \"default\": 100\n    },\n    heightOnMobile: {\n      type: 'number',\n      \"default\": 20\n    },\n    triggerText: {\n      type: 'string',\n      \"default\": 'Read more...'\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/readmore/index.js?");

/***/ }),

/***/ "./block-library/src/readmore/save.js":
/*!********************************************!*\
  !*** ./block-library/src/readmore/save.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks;\nfunction save(props) {\n  return React.createElement(\"div\", {\n    className: props.className,\n    \"data-slidedownspeed\": props.attributes.slideSpeed,\n    \"data-heightonmobile\": props.attributes.heightOnMobile\n  }, React.createElement(\"div\", {\n    className: \"av-read-more-inner-wrapper\"\n  }, React.createElement(InnerBlocks.Content, null), React.createElement(\"div\", {\n    className: \"fade-out-wrapper\"\n  })), React.createElement(\"div\", {\n    className: \"av-read-more-button-wrapper\"\n  }, React.createElement(\"button\", {\n    className: \"av-read-more-link\"\n  }, React.createElement(\"span\", null, props.attributes.triggerText))));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/readmore/save.js?");

/***/ }),

/***/ "./block-library/src/singletab/edit.js":
/*!*********************************************!*\
  !*** ./block-library/src/singletab/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nfunction AVSingleTabEdit(props) {\n  return React.createElement(\"div\", {\n    id: props.attributes.id,\n    className: \"inner-tabs\"\n  }, React.createElement(InnerBlocks, {\n    templateLock: false\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AVSingleTabEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/singletab/edit.js?");

/***/ }),

/***/ "./block-library/src/singletab/index.js":
/*!**********************************************!*\
  !*** ./block-library/src/singletab/index.js ***!
  \**********************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/singletab/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/singletab/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  name: \"achtvier/bettertab\",\n  title: __('Dynamic Tab'),\n  parent: ['achtvier/bettertabs'],\n  icon: 'columns',\n  description: __('A single tab within a tabs block.'),\n  category: 'achtvier-blocks',\n  supports: {\n    inserter: false\n  },\n  attributes: {\n    id: {\n      type: \"string\"\n    },\n    active: {\n      type: \"string\",\n      \"default\": \"\"\n    }\n  },\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/singletab/index.js?");

/***/ }),

/***/ "./block-library/src/singletab/save.js":
/*!*********************************************!*\
  !*** ./block-library/src/singletab/save.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  return React.createElement(\"div\", {\n    id: props.attributes.id,\n    className: props.attributes.active + \" tab-pane\"\n  }, React.createElement(InnerBlocks.Content, null));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/singletab/save.js?");

/***/ }),

/***/ "./block-library/src/style.scss":
/*!**************************************!*\
  !*** ./block-library/src/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/style.scss?");

/***/ }),

/***/ "./block-library/src/wrapper/edit.js":
/*!*******************************************!*\
  !*** ./block-library/src/wrapper/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nvar RichText = wp.editor.RichText;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nfunction WrapperBlockEdit(props) {\n  var className = props.className;\n  return React.createElement(\"div\", {\n    \"class\": className\n  }, React.createElement(InnerBlocks, {\n    renderAppender: function renderAppender() {\n      return React.createElement(InnerBlocks.ButtonBlockAppender, null);\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WrapperBlockEdit);\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/wrapper/edit.js?");

/***/ }),

/***/ "./block-library/src/wrapper/index.js":
/*!********************************************!*\
  !*** ./block-library/src/wrapper/index.js ***!
  \********************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./block-library/src/wrapper/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ \"./block-library/src/wrapper/save.js\");\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar settings = {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Wrapperblock'),\n  icon: 'columns',\n  name: \"achtvierblocks/wrapperblocks\",\n  description: __('A multipurpose wrapper block with settable class'),\n  category: 'achtvier-blocks',\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  save: _save__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/wrapper/index.js?");

/***/ }),

/***/ "./block-library/src/wrapper/save.js":
/*!*******************************************!*\
  !*** ./block-library/src/wrapper/save.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return save; });\nvar InnerBlocks = wp.blockEditor.InnerBlocks;\nfunction save(props) {\n  return React.createElement(\"div\", {\n    className: props.className\n  }, React.createElement(InnerBlocks.Content, null));\n}\n\n//# sourceURL=webpack://achtvier-blocks-optimized/./block-library/src/wrapper/save.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************!*\
  !*** multi ./block-library/src/index.js ./block-library/src/style.scss ./block-library/src/editor.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./block-library/src/index.js */\"./block-library/src/index.js\");\n__webpack_require__(/*! ./block-library/src/style.scss */\"./block-library/src/style.scss\");\nmodule.exports = __webpack_require__(/*! ./block-library/src/editor.scss */\"./block-library/src/editor.scss\");\n\n\n//# sourceURL=webpack://achtvier-blocks-optimized/multi_./block-library/src/index.js_./block-library/src/style.scss_./block-library/src/editor.scss?");

/***/ })

/******/ });
});