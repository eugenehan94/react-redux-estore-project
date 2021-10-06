import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import NavbarSmaller from "../components/NavbarSmaller";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import "../App.css";
import {
  fetchSingleProduct,
  clearSingleProduct,
} from "../redux/actions/singleProductAction";
const Item = () => {
  const { itemId } = useParams();
  const singleItem = useSelector((state) => state);
  const dispatch = useDispatch();
  const { item, loading } = singleItem.oneItem;
  // const { open } = singleItem.toggleNavbar;

  const fetchSingleItem = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${itemId}`
      );
      const data = await response.json();
      dispatch(fetchSingleProduct(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleItem();
    window.scrollTo(0, 0);
    return () => {
      dispatch(clearSingleProduct());
    };
  }, [itemId]);

  return (
    <div>
      <NavbarSmaller />
      <Navbar />

      {loading === true || loading === undefined ? (
        <Loading />
      ) : (
        <div className="item-display-wrapper">
          <div className="item-display-left-wrapper">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="item-display-right-wrapper">
            <h1>{item.title}</h1>
            <h3>${item.price.toFixed(2)}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Item;
