import TaskModel from "./taskModel";
import TaskView from "./taskView";
import TaskController from "./taskController";

TaskView.initializeView();

TaskController.initialize(TaskModel, TaskView);
