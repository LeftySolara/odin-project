/**
 * taskView.js
 * 
 * View for displaying task items.
 */

import {format, parseISO, sub} from "date-fns";

let TaskView = (function() {
    "use strict"

    let _addTaskForm = getElement("#addTaskForm");
    let taskTitleBuffer;
    let deleteIcon = "../node_modules/tabler-icons/icons/trash.svg";
    let detailsIcon = "../node_modules/tabler-icons/icons/edit.svg";

    /**
     * Initializes event listeners for the view.
     */
    function _initLocalListeners() {
        let taskList = getElement("#taskList");
        taskList.addEventListener("input", event => {
            if (event.target.className === "editable") {
                taskTitleBuffer = event.target.innerText;
            }
        });

        let modal = getElement("#detailsModal");
        let span = getElement("#modalClose");
        span.addEventListener("click", event => {
            modal.style.display = "none";
            document.querySelectorAll(".detail").forEach(function(a) {
                a.remove();
            });
        });
    }

    /**
     * Sets attributes for a DOM element.
     * 
     * @param {element} element - The DOM element.
     * @param {object} attrs - An object containing the new set of attributes.
     */
    function _setAttributes(element, attrs) {
        for (let key in attrs) {
            element.setAttribute(key, attrs[key]);
        }
    }

    /**
     * Creates the "Add task" item that appears at the bottom of each task list.
     */
    function _createAddTaskRow() {
        let plus = createElement("p", "plus");
        plus.textContent = "+";

        let text = createElement("p");
        text.textContent = "Add task";

        let item = createElement("li", "task");
        item.classList.add("addTask");
        item.append(plus, text);

        item.addEventListener("click", _displayAddTaskForm);

        return item;
    }

    /**
     * Replaces the "Add task" list item with the "Add task" form.
     */
    function _displayAddTaskForm() {
        let taskList = getElement("#taskList");

        this.remove();
        taskList.append(_addTaskForm);
    }

    /**
     * Initializes DOM elements in the view.
     */
    function initializeView() {
        let taskList = getElement("#taskList");
        taskList.append(_createAddTaskRow());
        _initLocalListeners();
    }

    /**
     * Displays a list of tasks on the page.
     * 
     * @param {Array} tasks - The list of tasks to display.
     */
    function displayTasks(tasks) {
        let taskList = getElement("#taskList");
        while (taskList.firstChild) {
            taskList.removeChild(taskList.lastChild);
        }

        if (tasks.length === 0) {
            const msg = createElement("p");
            msg.textContent = "There are currently no tasks.";
            taskList.append(msg);
        }
        else {
            tasks.forEach(task => {
                const li = createElement("li", "task");
                li.id = task.id;

                /* Checkbox for toggling completion status. */
                const checkbox = createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = task.complete;

                /* Task information. */
                const span = createElement("span");
                span.contentEditable = true;
                span.classList.add("editable");

                /* Strikethrough the task if complete. */
                if (task.complete) {
                    const strike = createElement("s");
                    strike.textContent = task.title;
                    span.append(strike);
                }
                else {
                    span.textContent = task.title;
                }

                const detailsButton = createElement("img", "details");
                detailsButton.setAttribute("src", detailsIcon);

                const deleteButton = createElement("img", "delete");
                deleteButton.setAttribute("src", deleteIcon);

                let buttonContainer = createElement("div", "taskButtonContainer");
                buttonContainer.append(detailsButton, deleteButton);

                li.append(checkbox, span, buttonContainer);

                taskList.append(li);
            });
        }

        taskList.append(_createAddTaskRow());
    }

    /**
     * Displays detailed information about a task.
     * 
     * @param {object} task - The task to display.
     */
    function showTaskDetails(task) {
        let title = createElement("h2", "detail");
        title.textContent = task.title;

        let description = createElement("p", "detail");
        description.textContent = task.description ? task.description : "No description given.";

        let priority = createElement("p", "detail");
        if (task.priority == 1) {
            priority.textContent = "Priority: High";
        }
        else if (task.priority == 2) {
            priority.textContent = "Priority: Medium";
        }
        else {
            priority.textContent = "Priority: Low";
        }

        let dueDate = createElement("p", "detail");
        if (task.dueDate) {
            let formattedDate = format(parseISO(task.dueDate), "MMM d");
            dueDate.textContent = "Due: " + formattedDate;
        }
        else {
            dueDate.textContent = "No due date";
        }

        let modalContent = getElement("#detailsModalContent");
        modalContent.append(title, description, priority, dueDate);

        let modal = getElement("#detailsModal");
        modal.style.display = "block";
    }

    /**
     * Creates a new element on the DOM.
     * 
     * @param {string} tag - The HTML tag of the new element.
     * @param {string} className - An optional class name for the new element.
     * @returns {element} - The newly created element.
     */
    function createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        }

        return element;
    }

    /**
     * Retrieves an element from the DOM.
     * 
     * @param {string} selector - The CSS selector used to identify the element.
     * @returns {element} - The DOM element that matches the selector.
     */
    function getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    /**
     * Sets up the event listener that fires when a task is added.
     * 
     * The provided callback function is responsible for passing the
     * title of a new task to the controller.
     * 
     * @param {function} handler - Callback function that executes when a task is created.
     */
    function bindAddTask(handler) {
        _addTaskForm.addEventListener("submit", event => {
            event.preventDefault();

            const title = _addTaskForm.elements["title"].value;
            const description = _addTaskForm.elements["description"].value;
            const priority = _addTaskForm.elements["priority"].value;
            const dueDate = _addTaskForm.elements["dueDate"].value;

            handler(title, description, priority, dueDate);
            _addTaskForm.remove();
            _addTaskForm.reset();
        });
    }

    /**
     * Sets up the event listener that fires when a task is modified.
     * 
     * The provided callback function is responsible for passing the
     * updated title of a task to the controller.
     * 
     * @param {function} handler - Callback function that executes when a task is modified.
     */
    function bindEditTask(handler) {
        let taskList = getElement("#taskList");
        taskList.addEventListener("focusout", event => {
            if (taskTitleBuffer) {
                const id = parseInt(event.target.parentElement.id);
                handler(id, taskTitleBuffer);
                taskTitleBuffer = "";
            }
        });
    }

    /**
     * Sets up the event listener that fires when a task is deleted.
     * 
     * The provided callback function is responsible for passing the
     * ID of the task to the controller.
     * 
     * @param {function} handler - Callback function that executes when a task is deleted.
     */
    function bindDeleteTask(handler) {
        let taskList = getElement("#taskList");
        taskList.addEventListener("click", event => {
            if (event.target.className === "delete") {
                const id = parseInt(event.target.parentElement.parentElement.id);
                handler(id);
            }
        });
    }

    /**
     * Sets up the event listener that fires when a task's status is changed.
     * 
     * The provided callback function is responsible for passing the
     * ID of the task to the controller.
     * 
     * @param {function} handler - Callback function that executes when a task's status is toggled.
     */
    function bindToggleTask(handler) {
        let taskList = getElement("#taskList");
        taskList.addEventListener("change", event => {
            if (event.target.type === "checkbox") {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }

    /**
     * Sets up the event listener that displays a task's details.
     * 
     * @param {function} handler - Callback function for the event.
     */
    function bindShowTaskDetails(handler) {
        let taskList = getElement("#taskList");
        taskList.addEventListener("click", event => {
            if (event.target.className === "details") {
                const id = parseInt(event.target.parentElement.parentElement.id);
                handler(id);
            }
        });
    }

    return {
        initializeView,
        displayTasks,
        showTaskDetails,
        createElement,
        getElement,
        bindAddTask,
        bindEditTask,
        bindDeleteTask,
        bindToggleTask,
        bindShowTaskDetails
    };

})();

export default TaskView;
