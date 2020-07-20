function initAboutTab() {
    let tabButton = document.createElement("input");
    tabButton.type = "radio";
    tabButton.name = "tabGroup";
    tabButton.id = "aboutTab";
    tabButton.checked = false;

    let tabLabel = document.createElement("label");
    tabLabel.setAttribute("for", "aboutTab");
    tabLabel.innerHTML = "About";

    let tabBar = document.querySelector("#tabBar");
    tabBar.appendChild(tabButton);
    tabBar.appendChild(tabLabel);
}

export default initAboutTab;
