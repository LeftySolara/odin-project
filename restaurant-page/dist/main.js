/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initAboutTab() {\n    let tabButton = document.createElement(\"input\");\n    tabButton.type = \"radio\";\n    tabButton.name = \"tabGroup\";\n    tabButton.id = \"aboutTab\";\n    tabButton.checked = false;\n\n    let tabLabel = document.createElement(\"label\");\n    tabLabel.setAttribute(\"for\", \"aboutTab\");\n    tabLabel.innerHTML = \"About\";\n\n    let tabBar = document.querySelector(\"#tabBar\");\n    tabBar.appendChild(tabButton);\n    tabBar.appendChild(tabLabel);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAboutTab);\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initContactTab() {\n    let tabButton = document.createElement(\"input\");\n    tabButton.type = \"radio\";\n    tabButton.name = \"tabGroup\";\n    tabButton.id = \"contactTab\";\n    tabButton.checked = false;\n\n    let tabLabel = document.createElement(\"label\");\n    tabLabel.setAttribute(\"for\", \"contactTab\");\n    tabLabel.innerHTML = \"Contact\";\n\n    let tabBar = document.querySelector(\"#tabBar\");\n    tabBar.appendChild(tabButton);\n    tabBar.appendChild(tabLabel);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initContactTab);\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initHomepage() {\n    let headingText = document.createElement(\"h1\");\n    headingText.innerHTML = \"Anna's Breakfast Cafe\";\n\n    let heading = document.createElement(\"div\");\n    heading.appendChild(headingText);\n\n    let content = document.querySelector(\"#content\");\n    content.appendChild(heading);\n}\n\nfunction initHomeTab() {\n    let tabButton = document.createElement(\"input\");\n    tabButton.type = \"radio\";\n    tabButton.name = \"tabGroup\";\n    tabButton.id = \"homeTab\";\n    tabButton.checked = true;\n\n    let tabLabel = document.createElement(\"label\");\n    tabLabel.setAttribute(\"for\", \"homeTab\");\n    tabLabel.innerHTML = \"Home\";\n\n    let tabBar = document.querySelector(\"#tabBar\");\n    tabBar.appendChild(tabButton);\n    tabBar.appendChild(tabLabel);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initHomeTab);\n\n\n//# sourceURL=webpack:///./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nfunction initTabBar() {\n    let tabBar = document.createElement(\"div\");\n    tabBar.id = \"tabBar\";\n    tabBar.classList = [\"tabs\"];\n\n    let pageContent = document.querySelector(\"#content\");\n    pageContent.appendChild(tabBar);\n\n    Object(_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    Object(_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    Object(_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\ninitTabBar();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initMenuTab() {\n    let tabButton = document.createElement(\"input\");\n    tabButton.type = \"radio\";\n    tabButton.name = \"tabGroup\";\n    tabButton.id = \"menuTab\";\n    tabButton.checked = false;\n\n    let tabLabel = document.createElement(\"label\");\n    tabLabel.setAttribute(\"for\", \"menuTab\");\n    tabLabel.innerHTML = \"Menu\";\n\n    let tabBar = document.querySelector(\"#tabBar\");\n    tabBar.appendChild(tabButton);\n    tabBar.appendChild(tabLabel);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMenuTab);\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });