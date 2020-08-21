/**
 * taskModel.js
 * 
 * Model for task objects. Performs basic CRUD operations.
 */

let TaskModel = (function() {
    "use strict";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    let _nextTaskID = _getNextTaskID();
    let _nextProjectID = _getNextProjectID();
    let _onTaskListChanged = function() {};
    let _onProjectListChanged = function() {};

    /**
     * Saves the list of tasks to localStorage.
     */
    function _commit() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        localStorage.setItem("projects", JSON.stringify(projects));
        _onTaskListChanged();
        _onProjectListChanged();
    }

    /**
     * Calculates the next ID to assign to new tasks.
     * 
     * @returns {number} - The ID to be assigned to the next new task.
     */
    function _getNextTaskID() {
        return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 0;
    }

    /**
     * Calculates the next ID to assign to new projects.
     * 
     * @returns {number} - The ID to be assigned to the next new project.
     */
    function _getNextProjectID() {
        return projects.length > 0 ? Math.max(...projects.map(project => project.id)) + 1 : 0;
    }

    /**
     * Returns details about the requested task.
     * 
     * @param {number} id - The ID number of the task.
     * @returns {object} - The task matching the given ID number.
     */
    function getTask(id) {
        return this.tasks.find(task => task.id === id);
    }

    /**
     * Returns details about a project.
     * 
     * @param {number} id - The ID number of the project.
     * @returns {object} - The project matching the given ID number.
     */
    function getProject(id) {
        return this.projects.find(project => project.id === id);
    }

    /**
     * Adds a new task to the list.
     * 
     * @param {string} title - The title of the new task.
     * @param {string} description - Detailed description of the task.
     * @param {number} priority - The priority of the task.
     * @param {date} dueDate - The due date of the task.
     */
    function addTask(title, description, priority, dueDate) {
        const task = {
            id: _nextTaskID++,
            title,
            description,
            priority,
            complete: false,
            dueDate
        };

        tasks.push(task);
        _commit();
    }

    /**
     * Creates a new project.
     * 
     * @param {string} name - The name of the new project.
     */
    function addProject(name) {
        const project = {
            id: _nextProjectID++,
            name
        };

        projects.push(project);
        _commit();
    }

    /**
     * Updates the title of a task.
     * 
     * @param {number} id - The ID number of the task to edit.
     * @param {string} newTitle - The new title for the task.
     * @param {string} newDescription - The new description for the task.
     * @param {number} newPriority - The new priority of the task.
     * @param {date} newDueDate - The new due date of the task.
     */
    function editTask(id, newTitle, newDescription, newPriority, newDueDate) {
        this.tasks = this.tasks.map((task) =>
            task.id === id ? {id :task.id, title: newTitle, description: newDescription, priority: newPriority, dueDate: newDueDate, comeplete: task.complete} : task,
        );
        _commit();
    }

    function editProject(id, newName) {
        this.projects = this.projects.map((project) =>
            project.id === id ? {id: project.id, name: newName} : project,
        );
        _commit();
    }

    /**
     * Removed a task from the list.
     * 
     * @param {number} id - The ID of the task to remove.
     */
    function deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        _commit();
    }

    function deleteProject(id) {
        this.projects = this.projects.filter((project) => project.id !== id);
        _commit();
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
        _commit();
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

    /**
     * Binds the given function to the model.
     * This function is called each time the project list changes.
     * 
     * @param {function} callback - The callback function to execute.
     */
    function bindProjectListChanged(callback) {
        _onProjectListChanged = callback;
    }

    return {tasks, projects, getTask, addTask, addProject,  editTask, deleteTask, toggleTask, bindTaskListChanged, bindProjectListChanged};
})();

export default TaskModel;
