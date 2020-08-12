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

    let _handleAddTask = (title, description, priority) => {
        _model.addTask(title, description, priority);
    };

    let _handleEditTask = (id, newTitle, newDescription, newPriority) => {
        _model.editTask(id, newTitle, newDescription, newPriority);
    };

    let _handleDeleteTask = (id) => {
        _model.deleteTask(id);
    };

    let _handleToggleTask = (id) => {
        _model.toggleTask(id);
    };

    function initialize(model, view) {
        _model = model;
        _view = view;

        _model.bindTaskListChanged(_onTaskListChanged);

        _view.bindAddTask(_handleAddTask);
        _view.bindEditTask(_handleEditTask);
        _view.bindDeleteTask(_handleDeleteTask);
        _view.bindToggleTask(_handleToggleTask);

        _onTaskListChanged();
    }

    return {initialize};
})();

export default TaskController;
