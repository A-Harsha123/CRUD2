import React, { useState } from 'react';
import ItemList from './ItemList';
import AddItemForm from './Additem';

function App() {
    const [items, setItems] = useState([]);

    const addItem = (name) => {
      const newItem = {
        id: items.length + 1,
        name,
      };
      
      setItems([...items, newItem]);
    };

    const handleItem = (id, newName) => {
      const updatedItems = items.map(item =>
        item.id === id ? { ...item, name: newName } : item
      );
      setItems(updatedItems);
    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    return (
        <div className="App">
            <h1>It is a simple CRUD application</h1>
            <AddItemForm addItem={addItem} />
            <ItemList items={items} updateItem={handleItem} deleteItem={deleteItem} />
        </div>
    );
}

export default App;