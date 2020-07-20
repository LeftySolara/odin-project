function initContactTab() {
    let tabButton = document.createElement("input");
    tabButton.type = "radio";
    tabButton.name = "tabGroup";
    tabButton.id = "contactTab";
    tabButton.checked = false;

    let tabLabel = document.createElement("label");
    tabLabel.setAttribute("for", "contactTab");
    tabLabel.innerHTML = "Contact";

    let tabBar = document.querySelector("#tabBar");
    tabBar.appendChild(tabButton);
    tabBar.appendChild(tabLabel);
}

export default initContactTab;
