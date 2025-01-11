import React from 'react';

function ItemInput({ inputValue, onInputChange, onAddItem }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        style={{
          padding: "10px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={onAddItem}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default ItemInput;
