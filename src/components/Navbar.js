import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { IoStorefrontSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { navbarToggle } from "../redux/actions/navbarAction";
const Navbar = () => {
  // const navState = useSelector((state) => state);
  // const { open } = navState.toggleNavbar;

  const dispatch = useDispatch();
  return (
    <div className="ecommerce-navbar-container">
      <div className="ecommerce-navbar-logo-wrapper">
        <Link to="/">
          <IconContext.Provider value={{ className: "ecommerce-navbar-logo" }}>
            <IoStorefrontSharp />
          </IconContext.Provider>
        </Link>
      </div>

      <ul className="ecommerce-navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>

      <div className="ecommerce-hamburger-menu">
        <IconContext.Provider value={{ className: "ecommerce-navbar-logo" }}>
          <AiOutlineMenu onClick={() => dispatch(navbarToggle(true))} />
        </IconContext.Provider>
      </div>
    </div>
  );
};
export default Navbar;
