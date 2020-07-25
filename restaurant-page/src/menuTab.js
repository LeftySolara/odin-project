/* Normally this information would be kept in a database or other storage medium,
   but we're keeping it here since the course hasn't gotten to the database chapter yet. */
let menuItems = [
    {name: "Bagel", price: 1.99, image: "images/menu/kreated-media-CO5GqJi47dY-unsplash.jpg"},
    {name: "Banana Nut Oatmeal", price: 2.99, image: "images/menu/alexandru-acea-Vk044I3w1gI-unsplash.jpg"},
    {name: "Egg on Toast", price: 2.79, image: "images/menu/ben-kolde-FFqNATH27EM-unsplash.jpg"},
    {name: "French Toast", price: 6.99, image: "images/menu/randy-fath-SQ20tWzxXO0-unsplash.jpg"},
    {name: "Blueberry Pancakes", price: 6.79, image: "images/menu/calum-lewis-8Nc_oQsc2qQ-unsplash.jpg"},
    {name: "Blueberry Waffles", price: 6.79, image: "images/menu/cristina-matos-albers-S4dXp25NiLg-unsplash.jpg"},
    {name: "Breakfast Platter", price: 9.79, image: "images/menu/eiliv-sonas-aceron-An6cTgmC8yk-unsplash.jpg"},
    {name: "Tea", price: 1.99, image: "images/menu/reyhaneh-mehrnejad-AZxyTjkz3-g-unsplash.jpg"}
]

function createMenuItemDisplay(item) {
    let itemImage = document.createElement("img");
    itemImage.src = item.image;

    let itemName = document.createElement("p");
    itemName.innerHTML = item.name;

    let itemPrice = document.createElement("p");
    itemPrice.innerHTML = "$" + item.price;

    let display = document.createElement("div");
    display.classList = ["menuItem"];

    display.appendChild(itemImage);
    display.appendChild(itemName);
    display.appendChild(itemPrice);

    return display;
}

function populateMenuTab() {
    let menuDiv = document.createElement("div");
    menuDiv.id = "menuDisplay";

    menuItems.forEach((item) => {
        let itemDisplay = createMenuItemDisplay(item);
        menuDiv.appendChild(itemDisplay);
    });

    let tabContentContainer = document.querySelector("#tabContent");
    tabContentContainer.appendChild(menuDiv);
    tabContentContainer.classList = [];
    tabContentContainer.style.width = "80%";
}

export default populateMenuTab;

