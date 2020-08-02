/**
 * taskModel.js
 * 
 * Model for task items. Performs basic CRUD operations.
 */

let TaskModel = (function() {
    "use strict";

    let tasks = [];
    let _onTaskListChanged = function() {}

    /**
     * Adds a new task to the list.
     * 
     * @param {string} title - The new task's title.
     * @param {string} description - Detailed description of the new task.
     */
    function addTask(title, description) {
        const task = {
            title,
            description,
            id: tasks.length,
            complete: false
        };

        tasks.push(task);
        _onTaskListChanged();
    }

    /**
     * Updates the title and description of a task.
     * 
     * @param {number} id - The ID of the task to modify.
     * @param {string} newTitle  - The new title for the task.
     * @param {string} newDescription - The new description for the task.
     */
    function editTask(id, newTitle, newDescription) {
        tasks = tasks.map((task) =>
            task.id === id ? { id: task.id, title: newTitle, description: newDescription } : task,
        )
        _onTaskListChanged();
    }

    /**
     * Removes a task from the list.
     * 
     * @param {number} id - The ID of the task to remove.
     */
    function deleteTask(id) {
        tasks = tasks.filter((task) => task.id !== id);
        _onTaskListChanged();
    }

    /**
     * Toggles the completion status of a task.
     * 
     * @param {number} id - The ID of the task to toggle.
     */
    function toggleTask(id) {
        tasks = tasks.map((task) =>
            task.id === id ? { id: task.id, title: task.title, description: task.description, complete: !task.complete } : task,
        )
        _onTaskListChanged();
    }

    function bindTaskListChanged(callback) {
        _onTaskListChanged = callback;
    }

    return {
        tasks,
        addTask,
        editTask,
        deleteTask,
        toggleTask,
        bindTaskListChanged
    };
})();

export default TaskModel;
