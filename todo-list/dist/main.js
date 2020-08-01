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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskView */ \"./src/taskView.js\");\n\n\n_taskView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeView();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/taskView.js":
/*!*************************!*\
  !*** ./src/taskView.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * taskView.js\n * \n * View for displaying task items.\n */\n\n let taskView = (function() {\n     \"use strict\"\n\n     /**\n      * Initializes the view for the task list.\n      */\n     function initializeView() {\n         let domRoot = getElement(\"#root\");\n\n         /* Create the page title. */\n         let title = createElement(\"h1\");\n         title.textContent = \"Task List\";\n\n         /* Create the task creation form. */\n         let form = createElement(\"form\");\n\n         let taskTitleInput = createElement(\"input\");\n         taskTitleInput.type = \"text\";\n         taskTitleInput.placeholder = \"Task title\";\n         taskTitleInput.name = \"taskTitle\";\n\n         let taskDescriptionInput = createElement(\"input\");\n         taskDescriptionInput.type = \"text\";\n         taskDescriptionInput.placeholder = \"Description\";\n         taskDescriptionInput.name = \"taskDescription\";\n\n         let submitButton = createElement(\"button\");\n         submitButton.textContent = \"Add Task\";\n\n         /* Visual representation of the task list. */\n         let taskList = createElement(\"ul\", \"taskList\");\n\n         form.append(taskTitleInput, taskDescriptionInput, submitButton);\n         domRoot.append(title, form, taskList);\n     }\n\n     /**\n      * Helper function that creates a new element on the DOM.\n      * \n      * @param {string} tag - The HTML tag of the new element.\n      * @param {string} className - An optional class name to assign to the new element.\n      */\n     function createElement(tag, className) {\n         const element = document.createElement(tag);\n         if (className) {\n             element.classList.add(className);\n         }\n\n         return element;\n     }\n\n     /**\n      * Helper function that retrieves an element from the DOM.\n      * \n      * @param {string} selector - The CSS selector used to identify the element.\n      */\n     function getElement(selector) {\n         const element = document.querySelector(selector);\n         return element;\n     }\n\n     return { initializeView, createElement, getElement };\n })();\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (taskView);\n\n\n//# sourceURL=webpack:///./src/taskView.js?");

/***/ })

/******/ });