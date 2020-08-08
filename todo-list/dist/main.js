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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModel */ \"./src/taskModel.js\");\n/* harmony import */ var _taskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskView */ \"./src/taskView.js\");\n/* harmony import */ var _taskController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskController */ \"./src/taskController.js\");\n\n\n\n\n_taskView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeView();\n_taskController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initialize(_taskModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _taskView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/taskController.js":
/*!*******************************!*\
  !*** ./src/taskController.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * taskController.js\n * \n * Implementation of the controller for the task model and view.\n */\n\nlet TaskController = (function() {\n    \"use strict\";\n\n    let _model = null;\n    let _view = null;\n\n    let _onTaskListChanged = () => {\n        _view.displayTasks(_model.tasks);\n    };\n\n    let _handleAddTask = (title) => {\n        _model.addTask(title);\n    };\n\n    let _handleDeleteTask = (id) => {\n        _model.deleteTask(id);\n    };\n\n    let _handleToggleTask = (id) => {\n        _model.toggleTask(id);\n    };\n\n    function initialize(model, view) {\n        _model = model;\n        _view = view;\n\n        _model.bindTaskListChanged(_onTaskListChanged);\n\n        _view.bindAddTask(_handleAddTask);\n        _view.bindDeleteTask(_handleDeleteTask);\n        _view.bindToggleTask(_handleToggleTask);\n\n        _onTaskListChanged();\n    }\n\n    return {initialize};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskController);\n\n\n//# sourceURL=webpack:///./src/taskController.js?");

/***/ }),

/***/ "./src/taskModel.js":
/*!**************************!*\
  !*** ./src/taskModel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * taskModel.js\n * \n * Model for task objects. Performs basic CRUD operations.\n */\n\nlet TaskModel = (function() {\n    \"use strict\";\n\n    let tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n    let _onTaskListChanged = function() {};\n\n    function _commit(tasks) {\n        _onTaskListChanged();\n        localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n    }\n\n    /**\n     * Adds a new task to the list.\n     * \n     * @param {string} title - The title of the new task.\n     */\n    function addTask(title) {\n        const task = {\n            id: tasks.length,\n            title,\n            complete: false\n        };\n\n        tasks.push(task);\n        _commit(tasks);\n    }\n\n    /**\n     * Removed a task from the list.\n     * \n     * @param {number} id - The ID of the task to remove.\n     */\n    function deleteTask(id) {\n        this.tasks = this.tasks.filter((task) => task.id !== id);\n        _commit(this.tasks);\n    }\n\n    /**\n     * Toggles the completion status of a task.\n     * \n     * @param {number} id - The ID of the task to toggle.\n     */\n    function toggleTask(id) {\n        this.tasks = this.tasks.map((task) =>\n            task.id === id ? {id: task.id, title: task.title, complete: !task.complete} : task,\n            )\n        _commit(this.tasks);\n    }\n\n    function bindTaskListChanged(callback) {\n        _onTaskListChanged = callback;\n    }\n\n    return {tasks, addTask, deleteTask, toggleTask, bindTaskListChanged};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskModel);\n\n\n//# sourceURL=webpack:///./src/taskModel.js?");

/***/ }),

/***/ "./src/taskView.js":
/*!*************************!*\
  !*** ./src/taskView.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * taskView.js\n * \n * View for displaying task items.\n */\n\nlet TaskView = (function() {\n    \"use strict\"\n\n    /**\n     * Initializes the view.\n     */\n    function initializeView() {\n        let domRoot = getElement(\"#root\");\n\n        let title = createElement(\"h1\");\n        title.textContent = \"Task List\";\n\n        /* Create task creation form. */\n        let form = createElement(\"form\");\n        form.id = \"addTaskForm\";\n\n        let taskTitleInput = createElement(\"input\");\n        taskTitleInput.id = \"taskTitleInput\";\n        taskTitleInput.type = \"text\";\n        taskTitleInput.placeholder = \"Task title\";\n        taskTitleInput.name = \"taskTitle\";\n\n        let submitButton = createElement(\"button\");\n        submitButton.textContent = \"Add Task\";\n        \n        /* The task list itself. */\n        let taskList = createElement(\"ul\", \"taskList\");\n        taskList.id = \"taskList\";\n\n        form.append(taskTitleInput, submitButton);\n        domRoot.append(title, form, taskList);\n    }\n\n    function displayTasks(tasks) {\n        let taskList = getElement(\"#taskList\");\n        while (taskList.firstChild) {\n            taskList.removeChild(taskList.lastChild);\n        }\n\n        if (tasks.length === 0) {\n            const msg = createElement(\"p\");\n            msg.textContent = \"There are currently no tasks.\";\n            taskList.append(msg);\n        }\n        else {\n            tasks.forEach(task => {\n                const li = createElement(\"li\");\n                li.id = task.id;\n\n                /* Checkbox for toggling completion status. */\n                const checkbox = createElement(\"input\");\n                checkbox.type = \"checkbox\";\n                checkbox.checked = task.complete;\n\n                /* Task information. */\n                const span = createElement(\"span\");\n                span.contentEditable = true;\n                span.classList.add(\"editable\");\n\n                /* Strikethrough the task if complete. */\n                if (task.complete) {\n                    const strike = createElement(\"s\");\n                    strike.textContent = task.title;\n                    span.append(strike);\n                }\n                else {\n                    span.textContent = task.title;\n                }\n\n                /* Add a delete button to each task. */\n                const deleteButton = createElement(\"button\", \"delete\");\n                deleteButton.textContent = \"Delete\";\n                li.append(checkbox, span, deleteButton);\n\n                taskList.append(li);\n            });\n        }\n    }\n\n    /**\n     * \n     * @param {string} tag - The HTML tag of the new element.\n     * @param {string} className - An optional class name for the new element.\n     * @returns {element} - The newly created element.\n     */\n    function createElement(tag, className) {\n        const element = document.createElement(tag);\n        if (className) {\n            element.classList.add(className);\n        }\n\n        return element;\n    }\n\n    /**\n     * Helper function that retrieves an element from the DOM.\n     * \n     * @param {string} selector - The CSS selector used to identify the element.\n     * @returns {element} - The DOM element that matches the selector.\n     */\n    function getElement(selector) {\n        const element = document.querySelector(selector);\n        return element;\n    }\n\n    function bindAddTask(handler) {\n        let form = getElement(\"#addTaskForm\");\n        let taskTitle = getElement(\"#taskTitleInput\");\n\n        form.addEventListener(\"submit\", event => {\n            event.preventDefault();\n\n            if (taskTitle.value) {\n                handler(taskTitle.value);\n                form.reset();\n            }\n        });\n    }\n\n    function bindDeleteTask(handler) {\n        let taskList = getElement(\"#taskList\");\n        taskList.addEventListener(\"click\", event => {\n            if (event.target.className === \"delete\") {\n                const id = parseInt(event.target.parentElement.id);\n                handler(id);\n            }\n        });\n    }\n\n    function bindToggleTask(handler) {\n        let taskList = getElement(\"#taskList\");\n        taskList.addEventListener(\"change\", event => {\n            if (event.target.type === \"checkbox\") {\n                const id = parseInt(event.target.parentElement.id);\n                handler(id);\n            }\n        });\n    }\n\n    return {\n        initializeView,\n        displayTasks,\n        createElement,\n        getElement,\n        bindAddTask,\n        bindDeleteTask,\n        bindToggleTask\n    };\n\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskView);\n\n\n//# sourceURL=webpack:///./src/taskView.js?");

/***/ })

/******/ });