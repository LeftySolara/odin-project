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

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction populateHomeTab() {\n    let tabContent = document.createElement(\"p\");\n    tabContent.innerHTML = \"Home Page Placeholder\";\n\n    let tabContentContainer = document.querySelector(\"#tabContent\");\n    tabContentContainer.appendChild(tabContent);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (populateHomeTab);\n\n\n//# sourceURL=webpack:///./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTab */ \"./src/homeTab.js\");\n\n\nfunction initTabBar() {\n    let tabBar = document.createElement(\"div\");\n    tabBar.id = \"tabBar\";\n\n    let tabNames = [\"Home\", \"Menu\", \"About\", \"Contact\"];\n    for (name of tabNames) {\n        let tabButton = document.createElement(\"input\");\n        tabButton.id = name.toLowerCase();\n        tabButton.setAttribute(\"type\", \"radio\");\n        tabButton.name = \"mainNav\";\n        tabButton.value = name;\n\n        let tabLabel = document.createElement(\"label\");\n        tabLabel.setAttribute(\"for\", name.toLowerCase());\n        tabLabel.innerHTML = name;\n\n        if (name === \"Home\") {\n            tabButton.checked = true;\n        }\n\n        tabBar.appendChild(tabButton);\n        tabBar.appendChild(tabLabel);\n    }\n\n    let mainContent = document.querySelector(\"#content\");\n    mainContent.appendChild(tabBar);\n}\n\nfunction initTabContent() {\n    let tabContent = document.createElement(\"div\");\n    tabContent.id = \"tabContent\";\n\n    let mainContent = document.querySelector(\"#content\");\n    mainContent.appendChild(tabContent);\n\n    Object(_homeTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nfunction initHomepage() {\n    let header = document.createElement(\"h1\");\n    header.innerHTML = \"Anna's Breakfast Cafe\";\n\n    let mainContent = document.querySelector(\"#content\");\n    mainContent.appendChild(header);\n\n    initTabBar();\n    initTabContent();\n}\n\ninitHomepage();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });