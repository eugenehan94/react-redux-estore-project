import React from "react";
import "../App.css";
import shoppingBags from "../images/ShoppingBags.jpg";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="ecommerce-hero-container">
      <div className="ecommerce-left-wrapper">
        <h1>Buy Till Your Heart's Content</h1>
        <div className="ecommerce-left-wrapper-desc">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod primis
          pretium condimentum nisi nullam. Montes ligula nulla aenean primis
          parturient congue at netus hac. Donec lacus praesent pharetra dolor ut
          praesent tempus.
        </div>
        <Link to="/products">
          <button>SHOP NOW</button>
        </Link>
      </div>
      <div className="ecommerce-right-wrapper">
        <img id="ecommerce-hero-image" src={shoppingBags} alt="Shopping Bags" />
        <div id="ecommerce-hero-image-shape"></div>
      </div>
    </div>
  );
};

export default Hero;
