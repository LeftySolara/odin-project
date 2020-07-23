import populateHomeTab from './homeTab';
import populateMenuTab from './menuTab';
import populateAboutTab from './aboutTab';
import populateContactTab from './contactTab';

function clearTabContent() {
    const tabContent = document.getElementById("tabContent");
    while (tabContent.firstChild) {
        tabContent.removeChild(tabContent.lastChild);
    }
}

function initTabBar() {
    let tabBar = document.createElement("div");
    tabBar.id = "tabBar";

    let tabs = [
        {name: "Home", populatefunction: populateHomeTab},
        {name: "Menu", populatefunction: populateMenuTab},
        {name: "About", populatefunction: populateAboutTab},
        {name: "Contact", populatefunction: populateContactTab}
    ];

    tabs.forEach((tab) => {
        let tabButton = document.createElement("input");
        tabButton.id = tab.name.toLowerCase();
        tabButton.setAttribute("type", "radio");
        tabButton.name = "mainNav";
        tabButton.value = tab.name;

        tabButton.addEventListener("change", function() {
            clearTabContent();
            tab.populatefunction();
        });

        let tabLabel = document.createElement("label");
        tabLabel.setAttribute("for", tab.name.toLowerCase());
        tabLabel.innerHTML = tab.name;

        if (tab.name === "Home") {
            tabButton.checked = true;
        }

        tabBar.appendChild(tabButton);
        tabBar.appendChild(tabLabel);
    });

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
