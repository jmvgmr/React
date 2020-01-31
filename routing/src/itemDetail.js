import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const API_KEY = "656d20a7-adc7f022-2967a579-b89fcb4b";
    const fetchItem = await fetch(
      `https://fortniteapi.io/items/get?id=${match.params.id}&lang=en`,
      {
        headers: { Authorization: "656d20a7-adc7f022-2967a579-b89fcb4b" }
      }
    );

    const item = await fetchItem.json();
    setItem(item.item);
    console.log(item.item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.full_background} alt="" />
    </div>
  );
}

export default ItemDetail;
