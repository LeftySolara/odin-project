import React from 'react';
import images from '../images/menu/index';
import './menuTab.css';
import '../index.css';

const menuItems = [
  { title: 'Bagel', image: images.bagel, price: 1.99 },
  { title: 'Banana Nut Oatmeal', image: images.bananaNutOatmeal, price: 2.99 },
  { title: 'Egg on Toast', image: images.eggOnToast, price: 2.79 },
  { title: 'French Toast', image: images.frenchToast, price: 6.99 },
  { title: 'Blueberry Pancakes', image: images.blueberryPancakes, price: 6.79 },
  { title: 'Blueberry Waffles', image: images.blueberryWaffles, price: 6.79 },
  { title: 'Breakfast Platter', image: images.breakfastPlatter, price: 9.79 },
  { title: 'Tea', image: images.tea, price: 1.99 },
  { title: 'Coffee', image: images.coffee, price: 1.99 },
];

function createMenuItemCards(items) {
  const menuCards = [];
  for (let i = 0; i < items.length; ++i) {
    menuCards.push(
      <MenuItemCard
        key={items[i].title}
        title={items[i].title}
        image={items[i].image}
        price={items[i].price}
      />,
    );
  }
  return menuCards;
}

function MenuItemCard(props) {
  const { title, image, price } = props;

  return (
    <div className="menuItem">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
    </div>
  );
}

function MenuTab() {
  return (
    <div id="menuTab" className="tabContent">
      {createMenuItemCards(menuItems)}
    </div>
  );
}

export default MenuTab;
