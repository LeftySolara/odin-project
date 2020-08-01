/**
 * taskView.js
 * 
 * View for displaying task items.
 */

 let TaskView = (function() {
     "use strict"

     /**
      * Initializes the view for the task list.
      */
     function initializeView() {
         let domRoot = getElement("#root");

         /* Create the page title. */
         let title = createElement("h1");
         title.textContent = "Task List";

         /* Create the task creation form. */
         let form = createElement("form");

         let taskTitleInput = createElement("input");
         taskTitleInput.type = "text";
         taskTitleInput.placeholder = "Task title";
         taskTitleInput.name = "taskTitle";

         let taskDescriptionInput = createElement("input");
         taskDescriptionInput.type = "text";
         taskDescriptionInput.placeholder = "Description";
         taskDescriptionInput.name = "taskDescription";

         let submitButton = createElement("button");
         submitButton.textContent = "Add Task";

         /* Visual representation of the task list. */
         let taskList = createElement("ul", "taskList");
         taskList.id = "taskList";

         form.append(taskTitleInput, taskDescriptionInput, submitButton);
         domRoot.append(title, form, taskList);
     }

     /**
      * Helper function that creates a new element on the DOM.
      * 
      * @param {string} tag - The HTML tag of the new element.
      * @param {string} className - An optional class name to assign to the new element.
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
      * @returns {element} - The DOM element that matched the provided selector.
      */
     function getElement(selector) {
         const element = document.querySelector(selector);
         return element;
     }

     /**
      * Displays the list of tasks on the page.
      * 
      * @param {array} tasks - Array of task objects to display.
      */
     function displayTasks(tasks) {
         let taskList = getElement("#taskList");
         while (taskList.firstChild) {
             taskList.removeChild(taskList.lastChild);
         }

         if (taskList.length === 0) {
             const msg = createElement("p");
             msg.textContent = "There are currently no tasks.";
             taskList.append(msg);
         }
         else {
             tasks.forEach(task => {
                 const li = createElement("li");
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

     return { initializeView, createElement, getElement, displayTasks };
 })();

 export default TaskView;
