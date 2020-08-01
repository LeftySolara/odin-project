/**
 * taskView.js
 * 
 * View for displaying task items.
 */

 let taskView = (function() {
     "use strict"

     /**
      * Helper function that creates a new element on the DOM.
      * 
      * @param {string} tag - The HTML tag of the new element.
      * @param {string} className - An optional class name to assign to the new element.
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
      */
     function getElement(selector) {
         const element = document.querySelector(selector);
         return element;
     }

     return { createElement, getElement };
 })();
