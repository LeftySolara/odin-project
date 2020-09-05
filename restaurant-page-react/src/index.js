import React from 'react';
import ReactDOM from 'react-dom';

function Header(props) {
  const { text } = props;
  return <h1>{text}</h1>;
}

function TabButton(props) {
  let { text } = props;
  text = String(text);

  return (
    <div>
      <input type="radio" name="tabBar" value={text.toLowerCase()} />
      <label htmlFor={text.toLowerCase()}>{text}</label>
    </div>
  );
}

function TabBar() {
  return (
    <div>
      <TabButton text="Home" />
      <TabButton text="Menu" />
      <TabButton text="Contact" />
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Header text="Julianne's Breakfast Cafe" />
      <TabBar />
    </div>
  );
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
