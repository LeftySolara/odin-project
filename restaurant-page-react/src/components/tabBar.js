import React from 'react';
import './tabBar.css';

function TabButton(props) {
  let { text } = props;
  text = String(text);

  return (
    <div className="tabButton">
      <input type="radio" name="tabBar" value={text.toLowerCase()} />
      <label htmlFor={text.toLowerCase()}>{text}</label>
    </div>
  );
}

function TabBar() {
  return (
    <div id="tabBar">
      <TabButton text="Home" />
      <TabButton text="Menu" />
      <TabButton text="Contact" />
    </div>
  );
}

export default TabBar;
