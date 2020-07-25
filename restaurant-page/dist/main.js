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

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction populateContactTab() {\n    let phoneNumber = document.createElement(\"p\");\n    tabContent.innerHTML = \"Phone: (123) 456-789\";\n\n    let emailAddress = document.createElement(\"p\");\n    emailAddress.innerHTML = \"Email: abc@example.com\";\n\n    let tabContentContainer = document.querySelector(\"#tabContent\");\n    tabContentContainer.appendChild(phoneNumber);\n    tabContentContainer.appendChild(emailAddress);\n    tabContentContainer.classList = [\"overlay\"];\n    tabContentContainer.style.width = \"33%\";\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (populateContactTab);\n\n\n\n//# sourceURL=webpack:///./src/contactTab.js?");

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction populateHomeTab() {\n    let paragraph1 = document.createElement(\"p\");\n    paragraph1.innerHTML = \"Located in the heart of the arts district, Anna's Cafe is the perfect spot for a relaxing breakfast atmosphere.\"\n\n    let paragraph2 = document.createElement(\"p\");\n    paragraph2.innerHTML = \"Established in 2020, our cafe strives to provide the best traditional, experimental, and fun options for the most important meal of the day!\"\n\n    let tabContentContainer = document.querySelector(\"#tabContent\");\n    tabContentContainer.appendChild(paragraph1);\n    tabContentContainer.appendChild(paragraph2);\n    tabContentContainer.classList = [\"overlay\"];\n    tabContentContainer.style.width = \"60%\";\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (populateHomeTab);\n\n\n//# sourceURL=webpack:///./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTab */ \"./src/homeTab.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab.js\");\n/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactTab */ \"./src/contactTab.js\");\n\n\n\n\nfunction clearTabContent() {\n    const tabContent = document.getElementById(\"tabContent\");\n    while (tabContent.firstChild) {\n        tabContent.removeChild(tabContent.lastChild);\n    }\n}\n\nfunction initTabBar() {\n    let tabBar = document.createElement(\"div\");\n    tabBar.id = \"tabBar\";\n\n    let tabs = [\n        {name: \"Home\", populatefunction: _homeTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},\n        {name: \"Menu\", populatefunction: _menuTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"]},\n        {name: \"Contact\", populatefunction: _contactTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\n    ];\n\n    tabs.forEach((tab) => {\n        let tabButton = document.createElement(\"input\");\n        tabButton.id = tab.name.toLowerCase();\n        tabButton.setAttribute(\"type\", \"radio\");\n        tabButton.name = \"mainNav\";\n        tabButton.value = tab.name;\n\n        tabButton.addEventListener(\"change\", function() {\n            clearTabContent();\n            tab.populatefunction();\n        });\n\n        let tabLabel = document.createElement(\"label\");\n        tabLabel.setAttribute(\"for\", tab.name.toLowerCase());\n        tabLabel.innerHTML = tab.name;\n\n        if (tab.name === \"Home\") {\n            tabButton.checked = true;\n        }\n\n        tabBar.appendChild(tabButton);\n        tabBar.appendChild(tabLabel);\n    });\n\n    let mainContent = document.querySelector(\"#content\");\n    mainContent.appendChild(tabBar);\n}\n\nfunction initTabContent() {\n    let tabContent = document.createElement(\"div\");\n    tabContent.id = \"tabContent\";\n\n    let mainContent = document.querySelector(\"#content\");\n    mainContent.appendChild(tabContent);\n\n    Object(_homeTab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nfunction initHomepage() {\n    let header = document.createElement(\"h1\");\n    header.innerHTML = \"Anna's Breakfast Cafe\";\n\n    let mainContent = document.querySelector(\"#content\");\n    mainContent.appendChild(header);\n\n    initTabBar();\n    initTabContent();\n}\n\ninitHomepage();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* Normally this information would be kept in a database or other storage medium,\n   but we're keeping it here since the course hasn't gotten to the database chapter yet. */\nlet menuItems = [\n    {name: \"Bagel\", price: 1.99, image: \"images/menu/kreated-media-CO5GqJi47dY-unsplash.jpg\"},\n    {name: \"Banana Nut Oatmeal\", price: 2.99, image: \"images/menu/alexandru-acea-Vk044I3w1gI-unsplash.jpg\"},\n    {name: \"Egg on Toast\", price: 2.79, image: \"images/menu/ben-kolde-FFqNATH27EM-unsplash.jpg\"},\n    {name: \"French Toast\", price: 6.99, image: \"images/menu/randy-fath-SQ20tWzxXO0-unsplash.jpg\"},\n    {name: \"Blueberry Pancakes\", price: 6.79, image: \"images/menu/calum-lewis-8Nc_oQsc2qQ-unsplash.jpg\"},\n    {name: \"Blueberry Waffles\", price: 6.79, image: \"images/menu/cristina-matos-albers-S4dXp25NiLg-unsplash.jpg\"},\n    {name: \"Breakfast Platter\", price: 9.79, image: \"images/menu/eiliv-sonas-aceron-An6cTgmC8yk-unsplash.jpg\"},\n    {name: \"Tea\", price: 1.99, image: \"images/menu/reyhaneh-mehrnejad-AZxyTjkz3-g-unsplash.jpg\"},\n    {name: \"Coffee\", price: 1.99, image: \"images/menu/emre-gencer-NZMeJsrMC8U-unsplash.jpg\"}\n]\n\nfunction createMenuItemDisplay(item) {\n    let itemImage = document.createElement(\"img\");\n    itemImage.src = item.image;\n\n    let itemName = document.createElement(\"p\");\n    itemName.innerHTML = item.name;\n\n    let itemPrice = document.createElement(\"p\");\n    itemPrice.innerHTML = \"$\" + item.price;\n\n    let display = document.createElement(\"div\");\n    display.classList = [\"menuItem\"];\n\n    display.appendChild(itemImage);\n    display.appendChild(itemName);\n    display.appendChild(itemPrice);\n\n    return display;\n}\n\nfunction populateMenuTab() {\n    let menuDiv = document.createElement(\"div\");\n    menuDiv.id = \"menuDisplay\";\n\n    menuItems.forEach((item) => {\n        let itemDisplay = createMenuItemDisplay(item);\n        menuDiv.appendChild(itemDisplay);\n    });\n\n    let tabContentContainer = document.querySelector(\"#tabContent\");\n    tabContentContainer.appendChild(menuDiv);\n    tabContentContainer.classList = [];\n    tabContentContainer.style.width = \"80%\";\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (populateMenuTab);\n\n\n\n//# sourceURL=webpack:///./src/menuTab.js?");

/***/ })

/******/ });