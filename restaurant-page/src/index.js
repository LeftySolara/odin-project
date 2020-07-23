import populateHomeTab from './homeTab';

function initTabBar() {
    let tabBar = document.createElement("div");
    tabBar.id = "tabBar";

    let tabNames = ["Home", "Menu", "About", "Contact"];
    for (name of tabNames) {
        let tabButton = document.createElement("input");
        tabButton.id = name.toLowerCase();
        tabButton.setAttribute("type", "radio");
        tabButton.name = "mainNav";
        tabButton.value = name;

        let tabLabel = document.createElement("label");
        tabLabel.setAttribute("for", name.toLowerCase());
        tabLabel.innerHTML = name;

        if (name === "Home") {
            tabButton.checked = true;
        }

        tabBar.appendChild(tabButton);
        tabBar.appendChild(tabLabel);
    }

    let mainContent = document.querySelector("#content");
    mainContent.appendChild(tabBar);
}

function initTabContent() {
    let tabContent = document.createElement("div");
    tabContent.id = "tabContent";

    let mainContent = document.querySelector("#content");
    mainContent.appendChild(tabContent);

    populateHomeTab();
}

function initHomepage() {
    let header = document.createElement("h1");
    header.innerHTML = "Anna's Breakfast Cafe";

    let mainContent = document.querySelector("#content");
    mainContent.appendChild(header);

    initTabBar();
    initTabContent();
}

initHomepage();
