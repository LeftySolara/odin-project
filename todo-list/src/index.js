import TaskModel from "./taskModel";
import TaskView from "./taskView";

TaskView.initializeView();
TaskView.displayTasks(TaskModel.tasks);
