function populateContactTab() {
    let tabContent = document.createElement("p");
    tabContent.innerHTML = "Contact Page Placeholder";

    let tabContentContainer = document.querySelector("#tabContent");
    tabContentContainer.appendChild(tabContent);
}

export default populateContactTab;

