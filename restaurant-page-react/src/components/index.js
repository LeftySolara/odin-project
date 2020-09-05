import React from 'react';

import TabBar from './tabBar';
import InfoTab from './infoTab';
import ContactTab from './contactTab';
import MenuTab from './menuTab';

import '../index.css';

function Header(props) {
  const { text } = props;
  return <h1 id="header">{text}</h1>;
}

function HomePage() {
  return (
    <div>
      <Header text="Julianne's Breakfast Cafe" />
      <TabBar />
      <InfoTab />
    </div>
  );
}

export default HomePage;
