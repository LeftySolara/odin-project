import initHomepage from './homepage.js'

function initTabBar() {
    let tabBar = document.createElement("div");
    tabBar.id = "tabBar";
    tabBar.classList = ["tabs"];

    let pageContent = document.querySelector("#content");
    pageContent.appendChild(tabBar);
}

initTabBar();
initHomepage();
