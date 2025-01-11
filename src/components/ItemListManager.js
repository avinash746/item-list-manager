import React, { useState } from 'react';
import ItemInput from './ItemInput';
import ItemList from './ItemList';

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Item List Manager</h1>
      <ItemInput
        inputValue={inputValue}
        onInputChange={setInputValue}
        onAddItem={handleAddItem}
      />
      <ItemList items={items} />
    </div>
  );
}

export default ItemListManager;
