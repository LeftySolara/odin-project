function populateHomeTab() {
    let tabContent = document.createElement("p");
    tabContent.innerHTML = "Home Page Placeholder";

    let tabContentContainer = document.querySelector("#tabContent");
    tabContentContainer.appendChild(tabContent);
}

export default populateHomeTab;
