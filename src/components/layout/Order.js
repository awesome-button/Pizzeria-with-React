import React from "react";

const Order = ({ order, menu, resetOrder }) => {
  const keys = Object.keys(order);

  const exp = /\d+/g;

  const total = keys.reduce((prevTotal, key) => {
    return prevTotal + parseInt(menu[key].price.match(exp)[0]) * order[key];
  }, 0);

  return (
    <div className="order">
      <span>
        <button onClick={resetOrder}>Reset</button>
      </span>
      <p>
        <strong>Your order:</strong>
      </p>
      <ul>
        {keys.map(key => (
          <li key={key}>
            🍕 {order[key]} * {menu[key].name} ={" "}
            {parseInt(menu[key].price.match(exp)[0]) * order[key]} rubles
          </li>
        ))}
      </ul>
      <p>Total: {total === 0 ? total : <strong>{total} rubles</strong>}</p>
    </div>
  );
};

export default Order;
