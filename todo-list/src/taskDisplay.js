/** taskDisplay.js
 * 
 * Functions for managing the visual represenction of Task objects.
 */

/* Creates a non-detailed task display. */
function createTaskListing() {
    let title = document.createElement("p");
    title.innerHTML = document.getElementById("title").value;

    let description = document.createElement("p");
    description.innerHTML = document.getElementById("description").value;

    let taskListItem = document.createElement("div");
    taskListItem.classList = ["taskListItem"];

    taskListItem.appendChild(title);
    taskListItem.appendChild(description);

    let taskList = document.querySelector("#taskList");
    taskList.appendChild(taskListItem);
}

export default createTaskListing;
