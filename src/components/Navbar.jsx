import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="wrappr_nav">
          <div className="first_div">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1875/1875674.png"
              alt=""
            />
            <h2>SAFTWARE</h2>
          </div>
          <ul className="second_div">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">BLOGS</a>
            </li>
            <li>
              <a href="#">WORKS</a>
            </li>
            <li>
              <a href="#">DESIGN</a>
            </li>
            <li>
              <a href="#">TEST</a>
            </li>
          </ul>
          <div className="third_div">
            <button>JOIN US</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
