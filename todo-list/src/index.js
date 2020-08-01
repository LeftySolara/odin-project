import createTask from "./task";
import createTaskListing from "./taskDisplay"

let taskNumber = 0;
let tasks = [];

let testButton = document.querySelector("#testButton");
testButton.addEventListener("click", function() {
    tasks.push(createTask({ title: taskNumber, description: "desc" }));
    createTaskListing(tasks[taskNumber++]);
});
