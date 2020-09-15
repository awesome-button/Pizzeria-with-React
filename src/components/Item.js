import React from "react";

const Item = ({ item, orderItem }) => {
  return (
    <div className="pizza">
      <h2>{item.name}</h2>
      <div>
        <img
          className="image"
          src={require(`../assets/images/pizza${item.id}.png`)}
          alt={item.name}
        />
      </div>
      <p>Ingredients: {item.ingredients}</p>
      <p className="price">{item.price}</p>
      <button onClick={() => orderItem(item.id)}>order</button>
    </div>
  );
};

export default Item;
