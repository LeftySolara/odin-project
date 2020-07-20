function initHomepage() {
    let headingText = document.createElement("h1");
    headingText.innerHTML = "Anna's Breakfast Cafe";

    let heading = document.createElement("div");
    heading.appendChild(headingText);

    let content = document.querySelector("#content");
    content.appendChild(heading);
}

function initHomeTab() {
    let tabButton = document.createElement("input");
    tabButton.type = "radio";
    tabButton.name = "tabGroup";
    tabButton.id = "homeTab";
    tabButton.checked = true;

    let tabLabel = document.createElement("label");
    tabLabel.setAttribute("for", "homeTab");
    tabLabel.innerHTML = "Home";

    let tabBar = document.querySelector("#tabBar");
    tabBar.appendChild(tabButton);
    tabBar.appendChild(tabLabel);
}

export default initHomeTab;
