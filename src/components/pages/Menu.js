import React from "react";
import Item from "../Item";
import Order from "../layout/Order";

const Menu = ({ orderItem, menu, order, resetOrder }) => {
  const keys = Object.keys(menu);
  return (
    <div className="menu-page">
      <div className="menu">
        {keys.map(key => (
          <Item key={key} item={menu[key]} orderItem={orderItem} />
        ))}
      </div>
      <Order order={order} menu={menu} resetOrder={resetOrder} />
    </div>
  );
};

export default Menu;
