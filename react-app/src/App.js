import React, { useState } from 'react';
import './App.css';
import { getItems } from './service/getItems';

const App = () => {
  const [items, setItems] = useState();
  const displayItems = () => {
    getItems
    .then(response => response.json())
    then(data => setItems(data));
  };

  return (
    <React.Fragment>
     <h1>Hay {items} en la base de datos de Redis</h1><hr/>
      <button onClick= {displayItems}></button>
    </React.Fragment>
  );
};

export default App;
