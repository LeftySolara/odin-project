function populateMenuTab() {
    let tabContent = document.createElement("p");
    tabContent.innerHTML = "Menu Page Placeholder";

    let tabContentContainer = document.querySelector("#tabContent");
    tabContentContainer.appendChild(tabContent);
}

export default populateMenuTab;

