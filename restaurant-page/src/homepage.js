function initHomepage() {
    let headingText = document.createElement("h1");
    headingText.innerHTML = "Anna's Breakfast Cafe";

    let heading = document.createElement("div");
    heading.appendChild(headingText);

    let content = document.querySelector("#content");
    content.appendChild(heading);
}

export default initHomepage;
