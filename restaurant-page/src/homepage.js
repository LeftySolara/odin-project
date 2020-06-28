function initializeTabs() {
    let tabBar = document.createElement("div");
    tabBar.id = "tabBar";

    let tabs = ["Home", "Menu", "About", "Contact"];
    tabs.forEach((tabName) => {
        let tab = document.createElement("a");
        tab.id = tabName.toLowerCase();
        tab.innerHTML = tabName;
        tab.href = "#";
        tabBar.appendChild(tab);
    });

    let content = document.querySelector("#content");
    content.appendChild(tabBar);
}

function initializeHeading() {
    let headingText = document.createElement("h1");
    headingText.innerHTML = "Anna's Breakfast Cafe";

    let heading = document.createElement("div");
    heading.appendChild(headingText);

    let content = document.querySelector("#content");
    content.appendChild(heading);
}

function initializeDescription() {
    let paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "Located in the heart of the arts district, Anna's Cafe is the perfect spot for a relaxing breakfast atmosphere."

    let paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "Established in 2020, our cafe strives to provide the best traditional, experimental, and fun options for the most important meal of the day!"

    let descriptionContainer = document.createElement("div");
    descriptionContainer.id = "description";
    descriptionContainer.appendChild(paragraph1);
    descriptionContainer.appendChild(paragraph2);

    let content = document.querySelector("#content");
    content.appendChild(descriptionContainer);
}

function initializeHomepage() {
    initializeTabs();
    initializeHeading();
    initializeDescription();
}

export default initializeHomepage;
