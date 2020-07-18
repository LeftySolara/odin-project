function initializeHeader() {
    let header = document.getElementsByTagName("header")[0];
    let tabs = ["Home", "Menu", "About", "Contact"];
    tabs.forEach((tabName) => {
        let tab = document.createElement("a");
        tab.id = tabName.toLowerCase();
        tab.innerHTML = tabName;
        tab.href = "#";
        header.appendChild(tab);
    });
}

export default initializeHeader;
