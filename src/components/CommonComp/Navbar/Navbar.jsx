import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BookContext } from "../../../Context/ContextProvider";

const Navbar = ({ setShow }) => {

  const { size, setSearch, addToCart } = useContext(BookContext);
  const [C_size, setC_size] = useState(0);


  function handleInput(e) {
    let id = setInterval(() => {
      clearInterval(id);
      setSearch(e.target.value);
    }, 1000);
  }
 

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("book-list")) || [];
    setC_size(cart.length);
  }, [size, C_size,addToCart]);
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">Book Store</span>

        <div className="search">
          <input type="text" onChange={(e) => handleInput(e)} />
        </div>
        <div className="home">
          <Link to="/">Home</Link>
        </div>

        <div className="cart">
          <Link to="/cart">
            <i className="fas fa-cart-plus"></i>
          </Link>
          <span>{C_size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
