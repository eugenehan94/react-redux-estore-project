//Create a drop down Navbar for a smaller screen - component
//Crate a state in reduce to see if open/closed
//Add it to each page
//Set media screen to automatically display none the overlay
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoStorefrontSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { navbarToggle } from "../redux/actions/navbarAction";
const NavbarSmaller = () => {
  const navState = useSelector((state) => state);

  const { open } = navState.toggleNavbar;

  const dispatch = useDispatch();

  return (
    <div
      className={
        open === true
          ? "ecommerce-navbarSmaller-container navbarSmaller-active"
          : "ecommerce-navbarSmaller-container"
      }
    >
      <div className="ecommerce-navbarSmaller-top-wrapper">
        <IconContext.Provider
          value={{ className: "ecommerce-navbarSmaller-logo" }}
        >
          <IoStorefrontSharp />
        </IconContext.Provider>
        <span
          className="ecommerce-navbarSmaller-close-btn"
          onClick={() => dispatch(navbarToggle(false))}
        >
          X
        </span>
      </div>
      <div>
        <ul className="ecommerce-navbarSmaller-links">
          <li>
            <Link to="/" onClick={() => dispatch(navbarToggle(false))}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => dispatch(navbarToggle(false))}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => dispatch(navbarToggle(false))}>
              Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarSmaller;
