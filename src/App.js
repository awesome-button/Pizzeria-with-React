import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Contacts from "./components/pages/Contacts";

const App = () => {
  const [backClass, setBackClass] = useState("home-back");
  const [order, setOrder] = useState({});
  const [menu, setMenu] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(res => {
      const items = { ...menu };
      res.data.map(item => {
        items[`pizza${item.id}`] = item;
        setMenu(items);
      });
    });
  }, []);

  const orderItem = id => {
    const items = { ...order };
    items[`pizza${id}`] = order[`pizza${id}`] + 1 || 1;
    setOrder(items);
  };

  const changeClass = name => {
    setBackClass(name);
  };

  const resetOrder = () => {
    setOrder({});
  };

  return (
    <div className={backClass}>
      <BrowserRouter>
        <NavBar changeClass={changeClass} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/menu"
          component={() => (
            <Menu
              order={order}
              orderItem={orderItem}
              menu={menu}
              resetOrder={resetOrder}
            />
          )}
        />
        <Route path="/contacts" component={Contacts} />
      </BrowserRouter>
    </div>
  );
};

export default App;
