function initMenuTab() {
    let tabButton = document.createElement("input");
    tabButton.type = "radio";
    tabButton.name = "tabGroup";
    tabButton.id = "menuTab";
    tabButton.checked = false;

    let tabLabel = document.createElement("label");
    tabLabel.setAttribute("for", "menuTab");
    tabLabel.innerHTML = "Menu";

    let tabBar = document.querySelector("#tabBar");
    tabBar.appendChild(tabButton);
    tabBar.appendChild(tabLabel);
}

export default initMenuTab;
