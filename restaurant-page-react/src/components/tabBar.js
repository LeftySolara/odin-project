import React from 'react';
import './tabBar.css';

function TabButton(props) {
  const { navigate } = props;
  let { text } = props;
  text = String(text);

  return (
    <div className="tabButton">
      <input
        id={text.toLowerCase()}
        type="radio"
        name="tabBar"
        value={text.toLowerCase()}
        onChange={() => navigate(text.toLowerCase())}
      />
      <label htmlFor={text.toLowerCase()}>{text}</label>
    </div>
  );
}

function TabBar(props) {
  const { navigate } = props;
  return (
    <div id="tabBar">
      <TabButton text="Home" navigate={navigate} />
      <TabButton text="Menu" navigate={navigate} />
      <TabButton text="Contact" navigate={navigate} />
    </div>
  );
}

export default TabBar;
