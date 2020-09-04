import React from 'react';
import ReactDOM from 'react-dom';

function Header(props) {
  const { text } = props;
  return <h1>{text}</h1>;
}

ReactDOM.render(
  <Header text="Julianne's Breakfast Cafe" />,
  document.getElementById('root'),
);
