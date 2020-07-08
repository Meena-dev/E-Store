import React from "react";

import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  const openMenu = () => {
    document.querySelector(".side-bar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".side-bar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">E-Store</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="side-bar">
          <h3>Shopping Categories</h3>
          <button className="side-bar-close" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Shirts</a>
            </li>
            <li>
              <a href="index.html">Pants</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
