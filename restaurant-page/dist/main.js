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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initHomepage() {\n    let headingText = document.createElement(\"h1\");\n    headingText.innerHTML = \"Anna's Breakfast Cafe\";\n\n    let heading = document.createElement(\"div\");\n    heading.appendChild(headingText);\n\n    let content = document.querySelector(\"#content\");\n    content.appendChild(heading);\n}\n\nfunction initHomeTab() {\n    let tab = document.createElement(\"div\");\n    tab.classList = [\"tab\"];\n\n    let tabButton = document.createElement(\"input\");\n    tabButton.type = \"radio\";\n    tabButton.name = \"tabGroup\";\n    tabButton.id = \"tab1\";\n    tabButton.checked = true;\n\n    let tabInput = document.createElement(\"label\");\n    tabInput.setAttribute(\"for\", \"tab1\");\n    tabInput.innerHTML = \"Home\";\n\n    let tabContentContainer = document.createElement(\"div\");\n    tabContentContainer.classList = [\"tabContent\"];\n\n    let tabHeading = document.createElement(\"h4\");\n    tabHeading.classList = [\"tabHeading\"];\n    tabHeading.innerHTML = \"Heading Placeholder\";\n\n    let tabContent = document.createElement(\"p\");\n    tabContent.innerHTML = \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt libero ipsum, veniam magni modi exercitationem debitis ducimus assumenda ratione corporis, illum eius, laborum tempore cumque amet id perspiciatis nostrum unde?\";\n\n    tabContentContainer.appendChild(tabHeading);\n    tabContentContainer.appendChild(tabContent);\n    tab.appendChild(tabButton);\n    tab.appendChild(tabInput);\n    tab.appendChild(tabContentContainer);\n\n    let content = document.querySelector(\"#content\");\n    content.appendChild(tab);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initHomeTab);\n\n\n//# sourceURL=webpack:///./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n\n\nfunction initTabBar() {\n    let tabBar = document.createElement(\"div\");\n    tabBar.id = \"tabBar\";\n    tabBar.classList = [\"tabs\"];\n\n    let pageContent = document.querySelector(\"#content\");\n    pageContent.appendChild(tabBar);\n}\n\ninitTabBar();\nObject(_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });