function populateContactTab() {
    let paragraph1 = document.createElement("p");
    tabContent.innerHTML = "For questions, concerns, and reservations:";

    let address = document.createElement("p");
    address.innerHTML = "123 Example St., New York, NY";

    let contactInfo = document.createElement("p");
    contactInfo.innerHTML = "abc@example.com<br/>(123) 456-789";


    let tabContentContainer = document.querySelector("#tabContent");
    tabContentContainer.appendChild(paragraph1);
    tabContentContainer.appendChild(address);
    tabContentContainer.appendChild(contactInfo);
    tabContentContainer.classList = ["overlay"];
    tabContentContainer.style.width = "60%";
}

export default populateContactTab;

