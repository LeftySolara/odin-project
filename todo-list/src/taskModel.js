/**
 * taskModel.js
 * 
 * Model for task objects. Performs basic CRUD operations.
 */

let TaskModel = (function() {
    "use strict";

    let tasks = [];
    let _onTaskListChanged = function() {};

    /**
     * Adds a new task to the list.
     * 
     * @param {string} title - The title of the new task.
     */
    function addTask(title) {
        const task = {
            id: tasks.length,
            title,
            complete: false
        };

        tasks.push(task);
        _onTaskListChanged();
    }

    /**
     * Removed a task from the list.
     * 
     * @param {number} id - The ID of the task to remove.
     */
    function deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        _onTaskListChanged();
    }

    /**
     * Toggles the completion status of a task.
     * 
     * @param {number} id - The ID of the task to toggle.
     */
    function toggleTask(id) {
        this.tasks = this.tasks.map((task) =>
            task.id === id ? {id: task.id, title: task.title, complete: !task.complete} : task,
            )
        _onTaskListChanged();
    }

    function bindTaskListChanged(callback) {
        _onTaskListChanged = callback;
    }

    return {tasks, addTask, deleteTask, toggleTask, bindTaskListChanged};
})();

export default TaskModel;
