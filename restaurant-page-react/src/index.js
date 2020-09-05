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

function RestaurantInfo() {
  const paragraph1 =
    "Located in the heart of the arts district, Julianne's Cafe is the perfect spot for a relaxing breakfast atmosphere.";
  const paragraph2 =
    'Established in 2020, our cafe strives to provide the best traditional, experimental, and fun options for the most important meal of the day!';

  return (
    <div>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Header text="Julianne's Breakfast Cafe" />
      <TabBar />
      <RestaurantInfo />
    </div>
  );
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
