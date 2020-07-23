function populateAboutTab() {
    let tabContent = document.createElement("p");
    tabContent.innerHTML = "About Page Placeholder";

    let tabContentContainer = document.querySelector("#tabContent");
    tabContentContainer.appendChild(tabContent);
}

export default populateAboutTab;

