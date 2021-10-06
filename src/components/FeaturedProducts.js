import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeaturedProducts } from "../redux/actions/featuredProduct";
import Loading from "./Loading";
const FeaturedProducts = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const { product, loading } = products.featuredItem;

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=3");
      const data = await response.json();
      dispatch(fetchFeaturedProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="featuredProducts-container">
      <h1>Featured Products</h1>
      {loading === true || loading === undefined ? (
        <Loading />
      ) : (
        <div className="featuredProducts-wrapper">
          {product.map((item, id) => {
            return (
              <div key={id} className="featuredProducts-item-wrapper">
                <Link to={`/products/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
                <p>{item.title}</p>

                <p>${item.price.toFixed(2)}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="featuredProducts-btn-wrapper">
        <Link to="/products">
          <button>View all product</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
