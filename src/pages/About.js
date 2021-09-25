import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Navbar from "../components/Navbar";
import NavbarSmaller from "../components/NavbarSmaller";
import Footer from "../components/Footer";
import "../App.css";
import eCommerceImage from "../images/ECommerceImage.jpg";
import { useSelector } from "react-redux";
const About = () => {
  const navState = useSelector((state) => state);
  const { open } = navState;
  return (
    <div>
      <NavbarSmaller />
      <Navbar />
      <div className="ecommerce-about-wrapper">
        <img src={eCommerceImage} alt="E Commerce Image" />
        <div>
          <h1>About us</h1>
          <LoremIpsum avgWordsPerSentence={10} avgSentencesPerParagraph={8} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
