function setup() {
    let headerText = document.createElement("h1");
    headerText.innerHTML = "Anna's Breakfast Cafe";

    let header = document.querySelector("header");
    header.appendChild(headerText);

    let paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "Located in the heart of the arts district, Anna's Cafe is the perfect spot for a relaxing breakfast atmosphere."

    let paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "Established in 2020, our cafe strives to provide the best traditional, experimental, and fun options for the most important meal of the day!"

    let content = document.querySelector("#content")
    content.appendChild(paragraph1);
    content.appendChild(paragraph2);
}

export default setup;
