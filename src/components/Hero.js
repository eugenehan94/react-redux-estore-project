import React from "react";
import "../App.css";
import shoppingBags from "../images/ShoppingBags.jpg";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="ecommerce-hero-container">
      <div className="ecommerce-left-wrapper">
        <h1>Buy Till Your Heart's Content</h1>
        <div className="ecommerce-left-wrapper-desc">
          <LoremIpsum avgWordsPerSentence={8} avgSentencesPerParagraph={4} />
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
