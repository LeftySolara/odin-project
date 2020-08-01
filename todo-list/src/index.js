import createTask from "./task";
import createTaskListing from "./taskDisplay"

let newTaskForm = document.getElementById("newTaskForm");
newTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createTaskListing();
    this.reset();
});
