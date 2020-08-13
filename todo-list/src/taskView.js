/**
 * taskView.js
 * 
 * View for displaying task items.
 */

let TaskView = (function() {
    "use strict"

    let taskTitleBuffer;

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
    }

    /**
     * Creates the form used to add new tasks.
     * 
     * @returns {form} - The HTML form.
     */
    function _createTaskCreationForm() {
        let form = createElement("form");
        form.id = "addTaskForm";

        let taskTitleInput = createElement("input");
        taskTitleInput.id = "taskTitleInput";
        taskTitleInput.type = "text";
        taskTitleInput.placeholder = "Task title";
        taskTitleInput.name = "taskTitle";

        let taskDescriptionInput = createElement("input");
        taskDescriptionInput.id = "taskDescriptionInput";
        taskDescriptionInput.type = "text";
        taskDescriptionInput.placeholder = "Task Description";
        taskDescriptionInput.name = "taskDescription";

        let priorityDropdown = createElement("select");
        priorityDropdown.id = "priorityDropdown";
        priorityDropdown.name = "priority";

        let highPriority = createElement("option");
        let mediumPriority = createElement("option");
        let lowPriority = createElement("option");

        highPriority.value = "1";
        mediumPriority.value = "2";
        lowPriority.value = "3";

        highPriority.textContent = "High";
        mediumPriority.textContent = "Medium";
        lowPriority.textContent = "Low";

        priorityDropdown.append(highPriority, mediumPriority, lowPriority);

        let submitButton = createElement("button");
        submitButton.textContent = "Add Task";

        form.append(taskTitleInput, taskDescriptionInput, priorityDropdown, submitButton);

        return form;
    }

    /**
     * Initializes DOM elements in the view.
     */
    function initializeView() {
        let domRoot = getElement("#root");

        let title = createElement("h1");
        title.textContent = "Task List";

        let form = _createTaskCreationForm();
        
        /* The task list itself. */
        let taskList = createElement("ul", "taskList");
        taskList.id = "taskList";

        domRoot.append(title, form, taskList);

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

                const detailsButton = createElement("button", "details");
                detailsButton.textContent = "Details";

                const deleteButton = createElement("button", "delete");
                deleteButton.textContent = "Delete";

                li.append(checkbox, span, detailsButton, deleteButton);

                taskList.append(li);
            });
        }
    }

    /**
     * Displays detailed information about a task.
     * 
     * @param {object} task - The task to display.
     */
    function showTaskDetails(task) {
        alert(task.title);
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
        let form = getElement("#addTaskForm");
        let taskTitle = getElement("#taskTitleInput");
        let taskDescription = getElement("#taskDescriptionInput");
        let taskPriority = getElement("#priorityDropdown");

        form.addEventListener("submit", event => {
            event.preventDefault();

            if (taskTitle.value) {
                handler(taskTitle.value, taskDescription.value, taskPriority.value);
                form.reset();
            }
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
                const id = parseInt(event.target.parentElement.id);
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
                const id = parseInt(event.target.parentElement.id);
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
