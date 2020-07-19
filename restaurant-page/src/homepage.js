function initHomepage() {
    let headingText = document.createElement("h1");
    headingText.innerHTML = "Anna's Breakfast Cafe";

    let heading = document.createElement("div");
    heading.appendChild(headingText);

    let content = document.querySelector("#content");
    content.appendChild(heading);
}

function initHomeTab() {
    let tab = document.createElement("div");
    tab.classList = ["tab"];

    let tabButton = document.createElement("input");
    tabButton.type = "radio";
    tabButton.name = "tabGroup";
    tabButton.id = "tab1";
    tabButton.checked = true;

    let tabInput = document.createElement("label");
    tabInput.setAttribute("for", "tab1");
    tabInput.innerHTML = "Home";

    let tabContentContainer = document.createElement("div");
    tabContentContainer.classList = ["tabContent"];

    let tabHeading = document.createElement("h4");
    tabHeading.classList = ["tabHeading"];
    tabHeading.innerHTML = "Heading Placeholder";

    let tabContent = document.createElement("p");
    tabContent.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt libero ipsum, veniam magni modi exercitationem debitis ducimus assumenda ratione corporis, illum eius, laborum tempore cumque amet id perspiciatis nostrum unde?";

    tabContentContainer.appendChild(tabHeading);
    tabContentContainer.appendChild(tabContent);
    tab.appendChild(tabButton);
    tab.appendChild(tabInput);
    tab.appendChild(tabContentContainer);

    let content = document.querySelector("#content");
    content.appendChild(tab);
}

export default initHomeTab;
