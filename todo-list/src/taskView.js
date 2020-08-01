/**
 * taskView.js
 * 
 * View for displaying task items.
 */

 let taskView = (function() {
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

     return { initializeView, createElement, getElement };
 })();

 export default taskView;
