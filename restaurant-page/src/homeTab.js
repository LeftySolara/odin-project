function populateHomeTab() {
    let paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "Located in the heart of the arts district, Anna's Cafe is the perfect spot for a relaxing breakfast atmosphere."

    let paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "Established in 2020, our cafe strives to provide the best traditional, experimental, and fun options for the most important meal of the day!"

    let tabContentContainer = document.querySelector("#tabContent");
    tabContentContainer.appendChild(paragraph1);
    tabContentContainer.appendChild(paragraph2);
}

export default populateHomeTab;
