import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const API_KEY = "656d20a7-adc7f022-2967a579-b89fcb4b";
    const data = await fetch("https://fortniteapi.io/items/upcoming?lang=en", {
      headers: { Authorization: "656d20a7-adc7f022-2967a579-b89fcb4b" }
    });

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
