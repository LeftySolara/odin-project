/**
 * taskController.js
 * 
 * Implementation of the controller for the task model and view.
 */

let TaskController = (function() {
    "use strict";

    let _model = null;
    let _view = null;

    let _onTaskListChanged = () => {
        _view.displayTasks(_model.tasks);
    };

    let _onProjectListChanged = () => {
        _view.displayProjects(_model.projects);
    }

    let _handleAddTask = (title, description, priority, dueDate) => {
        _model.addTask(title, description, priority, dueDate);
    };

    let _handleAddProject = (name) => {
        _model.addProject(name);
    }

    let _handleEditTask = (id, newTitle, newDescription, newPriority, newDueDate) => {
        _model.editTask(id, newTitle, newDescription, newPriority, newDueDate);
    };

    let _handleDeleteTask = (id) => {
        _model.deleteTask(id);
    };

    let _handleToggleTask = (id) => {
        _model.toggleTask(id);
    };

    let _handleShowTaskDetails = (id) => {
        _view.showTaskDetails(_model.getTask(id));
    }

    function initialize(model, view) {
        _model = model;
        _view = view;

        _model.bindTaskListChanged(_onTaskListChanged);
        _model.bindProjectListChanged(_onProjectListChanged);

        _view.bindAddTask(_handleAddTask);
        _view.bindAddProject(_handleAddProject);
        _view.bindEditTask(_handleEditTask);
        _view.bindDeleteTask(_handleDeleteTask);
        _view.bindToggleTask(_handleToggleTask);
        _view.bindShowTaskDetails(_handleShowTaskDetails);

        _onTaskListChanged();
        _onProjectListChanged();
    }

    return {initialize};
})();

export default TaskController;
