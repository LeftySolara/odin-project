import createTask from './task';

let taskNumber = 0;
let tasks = [];

let testButton = document.querySelector("#testButton");
testButton.addEventListener("click", function() {
    tasks.push(createTask({ title: taskNumber++, description: "desc" }));
    console.log(tasks);
});
