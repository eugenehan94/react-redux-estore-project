import React from "react";
import Navbar from "../components/Navbar";
import NavbarSmaller from "../components/NavbarSmaller";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import EmailSubscription from "../components/EmailSubscription";
import Footer from "../components/Footer";
// import { useSelector } from "react-redux";

const Home = () => {
  // const navState = useSelector((state) => state);
  // const { open } = navState.toggleNavbar;

  return (
    <div>
      <NavbarSmaller />
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <EmailSubscription />
      <Footer />
    </div>
  );
};

export default Home;
