/** taskDisplay.js
 * 
 * Functions for managing the visual represenction of Task objects.
 */

/* Creates a non-detailed task display. */
function createTaskListing(task) {

    let title = document.createElement("p");
    title.innerHTML = task.title;

    let description = document.createElement("p");
    description.innerHTML = task.description;

    let taskListItem = document.createElement("div");
    taskListItem.classList = ["taskListItem"];

    taskListItem.appendChild(title);
    taskListItem.appendChild(description);

    let taskList = document.querySelector("#taskList");
    taskList.appendChild(taskListItem);
}

export default createTaskListing;
