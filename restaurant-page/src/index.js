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

initTabBar();
