/**
 * taskModel.js
 * 
 * Model for task objects. Performs basic CRUD operations.
 */

let TaskModel = (function() {
    "use strict";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let _nextID = _getNextID();
    let _onTaskListChanged = function() {};

    /**
     * Saves the list of tasks to localStorage.
     * 
     * @param {Array} tasks - A list of tasks to save.
     */
    function _commit(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        _onTaskListChanged();
    }

    /**
     * Calculates the next ID to assign to new tasks.
     * 
     * @returns {number} - The ID to be assigned to the next new task.
     */
    function _getNextID() {
        return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 0;
    }

    /**
     * Adds a new task to the list.
     * 
     * @param {string} title - The title of the new task.
     */
    function addTask(title) {
        const task = {
            id: _nextID++,
            title,
            complete: false
        };

        tasks.push(task);
        _commit(tasks);
    }

    /**
     * Updates the title of a task.
     * 
     * @param {number} id - The ID number of the task to edit.
     * @param {string} newTitle - The new title for the task.
     */
    function editTask(id, newTitle) {
        this.tasks = this.tasks.map((task) =>
            task.id === id ? {id :task.id, title: newTitle, comeplete: task.complete} : task,
        );
        _commit(this.tasks);
    }

    /**
     * Removed a task from the list.
     * 
     * @param {number} id - The ID of the task to remove.
     */
    function deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        _commit(this.tasks);
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
        _commit(this.tasks);
    }

    /**
     * Binds the given function to the model.
     * This function is called each time the task list changes.
     * 
     * @param {function} callback - The callback function to execute.
     */
    function bindTaskListChanged(callback) {
        _onTaskListChanged = callback;
    }

    return {tasks, addTask, editTask, deleteTask, toggleTask, bindTaskListChanged};
})();

export default TaskModel;
