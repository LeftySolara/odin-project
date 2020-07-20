import initHomeTab from './homepage.js'
import initContactTab from './contact.js'
import initMenuTab from './menu.js'
import initAboutTab from './about.js'

function initTabBar() {
    let tabBar = document.createElement("div");
    tabBar.id = "tabBar";
    tabBar.classList = ["tabs"];

    let pageContent = document.querySelector("#content");
    pageContent.appendChild(tabBar);

    initHomeTab();
    initMenuTab();
    initContactTab();
    initAboutTab();
}

initTabBar();
