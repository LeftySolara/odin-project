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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModel */ \"./src/taskModel.js\");\n/* harmony import */ var _taskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskView */ \"./src/taskView.js\");\n\n\n\n_taskView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeView();\n_taskView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTasks(_taskModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/taskModel.js":
/*!**************************!*\
  !*** ./src/taskModel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * taskModel.js\n * \n * Model for task items. Performs basic CRUD operations.\n */\n\nlet TaskModel = (function() {\n    \"use strict\";\n\n    /* TODO: remove example tasks once model is finished being designed */\n    let tasks = [\n        {id: 0, title: \"Example Task\", description: \"More details\", complete: false}\n    ];\n\n    function addTask() {\n        // Implement me!\n    }\n\n    function editTask() {\n        // Implement me!\n    }\n\n    function deleteTask() {\n        // Implement me!\n    }\n\n    function toggleTask() {\n         // Implement me! \n    }\n\n    return { addTask, editTask, deleteTask, toggleTask, tasks };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskModel);\n\n\n//# sourceURL=webpack:///./src/taskModel.js?");

/***/ }),

/***/ "./src/taskView.js":
/*!*************************!*\
  !*** ./src/taskView.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * taskView.js\n * \n * View for displaying task items.\n */\n\n let TaskView = (function() {\n     \"use strict\"\n\n     /**\n      * Initializes the view for the task list.\n      */\n     function initializeView() {\n         let domRoot = getElement(\"#root\");\n\n         /* Create the page title. */\n         let title = createElement(\"h1\");\n         title.textContent = \"Task List\";\n\n         /* Create the task creation form. */\n         let form = createElement(\"form\");\n\n         let taskTitleInput = createElement(\"input\");\n         taskTitleInput.type = \"text\";\n         taskTitleInput.placeholder = \"Task title\";\n         taskTitleInput.name = \"taskTitle\";\n\n         let taskDescriptionInput = createElement(\"input\");\n         taskDescriptionInput.type = \"text\";\n         taskDescriptionInput.placeholder = \"Description\";\n         taskDescriptionInput.name = \"taskDescription\";\n\n         let submitButton = createElement(\"button\");\n         submitButton.textContent = \"Add Task\";\n\n         /* Visual representation of the task list. */\n         let taskList = createElement(\"ul\", \"taskList\");\n         taskList.id = \"taskList\";\n\n         form.append(taskTitleInput, taskDescriptionInput, submitButton);\n         domRoot.append(title, form, taskList);\n     }\n\n     /**\n      * Helper function that creates a new element on the DOM.\n      * \n      * @param {string} tag - The HTML tag of the new element.\n      * @param {string} className - An optional class name to assign to the new element.\n      * @returns {element} - The newly created element.\n      */\n     function createElement(tag, className) {\n         const element = document.createElement(tag);\n         if (className) {\n             element.classList.add(className);\n         }\n\n         return element;\n     }\n\n     /**\n      * Helper function that retrieves an element from the DOM.\n      * \n      * @param {string} selector - The CSS selector used to identify the element.\n      * @returns {element} - The DOM element that matched the provided selector.\n      */\n     function getElement(selector) {\n         const element = document.querySelector(selector);\n         return element;\n     }\n\n     /**\n      * Displays the list of tasks on the page.\n      * \n      * @param {array} tasks - Array of task objects to display.\n      */\n     function displayTasks(tasks) {\n         let taskList = getElement(\"#taskList\");\n         while (taskList.firstChild) {\n             taskList.removeChild(taskList.lastChild);\n         }\n\n         if (taskList.length === 0) {\n             const msg = createElement(\"p\");\n             msg.textContent = \"There are currently no tasks.\";\n             taskList.append(msg);\n         }\n         else {\n             tasks.forEach(task => {\n                 const li = createElement(\"li\");\n                 li.id = task.id;\n\n                 /* Checkbox for toggling completion status. */\n                 const checkbox = createElement(\"input\");\n                 checkbox.type = \"checkbox\";\n                 checkbox.checked = task.complete;\n\n                 /* Task information. */\n                 const span = createElement(\"span\");\n                 span.contentEditable = true;\n                 span.classList.add(\"editable\");\n\n                 /* Strikethrough the task if complete. */\n                 if (task.complete) {\n                     const strike = createElement(\"s\");\n                     strike.textContent = task.title;\n                     span.append(strike);\n                 }\n                 else {\n                     span.textContent = task.title;\n                 }\n\n                 /* Add a delete button to each task. */\n                 const deleteButton = createElement(\"button\", \"delete\");\n                 deleteButton.textContent = \"Delete\";\n                 li.append(checkbox, span, deleteButton);\n\n                 taskList.append(li);\n             });\n         }\n     }\n\n     return { initializeView, createElement, getElement, displayTasks };\n })();\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (TaskView);\n\n\n//# sourceURL=webpack:///./src/taskView.js?");

/***/ })

/******/ });