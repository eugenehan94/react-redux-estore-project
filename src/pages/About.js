import React from "react";
import Navbar from "../components/Navbar";
import NavbarSmaller from "../components/NavbarSmaller";
import Footer from "../components/Footer";
import "../App.css";
import eCommerceImage from "../images/ECommerceImage.jpg";
// import { useSelector } from "react-redux";
const About = () => {
  // const navState = useSelector((state) => state);
  // const { open } = navState;
  return (
    <div>
      <NavbarSmaller />
      <Navbar />
      <div className="ecommerce-about-wrapper">
        <img src={eCommerceImage} alt="E Commerce" />
        <div>
          <h1>About us</h1>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl morbi
          ridiculus dolor sagittis orci phasellus senectus sociosqu mollis.
          Luctus tempus tempus commodo; tincidunt dui maximus pellentesque.
          Quisque vivamus tempus potenti ornare sem tellus massa, vestibulum
          sed. Conubia neque est at mattis laoreet rutrum himenaeos ornare
          parturient. Dapibus ipsum inceptos nullam ultrices urna facilisis
          fames hac iaculis maximus. Habitant arcu ridiculus mus; mattis natoque
          vel dictumst sed. Egestas sapien sagittis diam lectus velit tempor
          mauris nisl. Tellus nisi ultrices sit nullam ut nostra maecenas
          magnis. Adipiscing phasellus ex est mattis duis ac facilisis sodales.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
