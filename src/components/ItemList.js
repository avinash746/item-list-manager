import React from 'react';

function ItemList({ items }) {
  return (
    <ul style={{ marginTop: "20px", padding: "0", listStyleType: "none" }}>
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            padding: "10px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
