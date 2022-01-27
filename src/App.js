import './App.css';
import Form from './Form';
import Table from './Table';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  function addItem(newItem) {
    setItems(newItem);
    console.log('New Item' + newItem);
  }
  //console.log(items);
  return (
    <div className='App'>
      <Form saveFn={addItem} />
      <Table items={items} />
    </div>
  );
}

export default App;
