/**
 * taskView.js
 * 
 * View for displaying task items.
 */

let TaskView = (function() {
    "use strict"

    let taskTitleBuffer;

    function _initLocalListeners() {
        let taskList = getElement("#taskList");
        taskList.addEventListener("input", event => {
            if (event.target.className === "editable") {
                taskTitleBuffer = event.target.innerText;
            }
        });
    }

    /**
     * Initializes the view.
     */
    function initializeView() {
        let domRoot = getElement("#root");

        let title = createElement("h1");
        title.textContent = "Task List";

        /* Create task creation form. */
        let form = createElement("form");
        form.id = "addTaskForm";

        let taskTitleInput = createElement("input");
        taskTitleInput.id = "taskTitleInput";
        taskTitleInput.type = "text";
        taskTitleInput.placeholder = "Task title";
        taskTitleInput.name = "taskTitle";

        let submitButton = createElement("button");
        submitButton.textContent = "Add Task";
        
        /* The task list itself. */
        let taskList = createElement("ul", "taskList");
        taskList.id = "taskList";

        form.append(taskTitleInput, submitButton);
        domRoot.append(title, form, taskList);

        _initLocalListeners();
    }

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

                /* Add a delete button to each task. */
                const deleteButton = createElement("button", "delete");
                deleteButton.textContent = "Delete";
                li.append(checkbox, span, deleteButton);

                taskList.append(li);
            });
        }
    }

    /**
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
     * Helper function that retrieves an element from the DOM.
     * 
     * @param {string} selector - The CSS selector used to identify the element.
     * @returns {element} - The DOM element that matches the selector.
     */
    function getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    function bindAddTask(handler) {
        let form = getElement("#addTaskForm");
        let taskTitle = getElement("#taskTitleInput");

        form.addEventListener("submit", event => {
            event.preventDefault();

            if (taskTitle.value) {
                handler(taskTitle.value);
                form.reset();
            }
        });
    }

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

    function bindDeleteTask(handler) {
        let taskList = getElement("#taskList");
        taskList.addEventListener("click", event => {
            if (event.target.className === "delete") {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }

    function bindToggleTask(handler) {
        let taskList = getElement("#taskList");
        taskList.addEventListener("change", event => {
            if (event.target.type === "checkbox") {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }

    return {
        initializeView,
        displayTasks,
        createElement,
        getElement,
        bindAddTask,
        bindEditTask,
        bindDeleteTask,
        bindToggleTask
    };

})();

export default TaskView;
