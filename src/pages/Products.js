import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  filterProducts,
  selectedCategory,
} from "../redux/actions/productAction";
import {
  ascending,
  descending,
  alphabetical,
  reverseAlphabetical,
} from "../redux/actions/sortAction";
import Navbar from "../components/Navbar";
import NavbarSmaller from "../components/NavbarSmaller";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Products = () => {
  const products = useSelector((state) => state);

  const { loading, category, productFiltered, selected } = products.allProduct;
  const { sort } = products.sort;
  console.log(productFiltered);
  const dispatch = useDispatch();

  if (sort === "price-lowest") {
    productFiltered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-highest") {
    productFiltered.sort((a, b) => b.price - a.price);
  } else if (sort === "name-a-z") {
    productFiltered.sort((a, b) => {
      let titleA = a.title.toUpperCase();
      let titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  } else {
    productFiltered.sort((a, b) => {
      let titleA = a.title.toUpperCase();
      let titleB = b.title.toUpperCase();
      if (titleA > titleB) {
        return -1;
      }
      if (titleA < titleB) {
        return 1;
      }
      return 0;
    });
  }
  // Descending and ascending controlled by using console.log below
  // console.log(productFiltered.sort((a, b) => b.price - a.price));

  //function to remove any duplicate category
  // const newArray = (product) => {
  //   let array = ["All"];
  //   product.forEach((item) => array.push(item.category));
  //   let uniqueCategories = Array.from(new Set(array));
  //   return uniqueCategories;
  // };

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(fetchProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
    window.scrollTo(0, 0);
    return () => {
      dispatch(selectedCategory("All"));
      fetchProducts(fetchProduct());
    };
  }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <h1>LOADING...</h1>
  //     </div>
  //   );
  // }
  const uniqueCategories = Array.from(new Set(category));

  const allCategoryClicked = (item) => {
    fetchProducts(fetchProduct());
    dispatch(selectedCategory("All"));
  };

  const categoryClicked = (item) => {
    dispatch(filterProducts(item));
    dispatch(selectedCategory(item));
  };

  const sortHandler = (choice) => {
    if (choice === "price-lowest") {
      dispatch(ascending());
      return;
    } else if (choice === "price-highest") {
      dispatch(descending());
    } else if (choice === "name-a-z") {
      dispatch(alphabetical());
    } else {
      dispatch(reverseAlphabetical());
    }
  };

  return (
    <div>
      <NavbarSmaller />
      <Navbar />
      <div className="products-all-wrapper">
        <div>
          <h3>Categories</h3>
          <div className="products-left-categories-wrapper">
            <p
              className={
                selected === "All" || selected === undefined
                  ? "products-left-categories-active"
                  : null
              }
              onClick={() => {
                allCategoryClicked("All");
              }}
            >
              All
            </p>
            {uniqueCategories.map((item, id) => {
              return (
                <div key={id}>
                  <p
                    className={
                      selected === item
                        ? "products-left-categories-active"
                        : null
                    }
                    onClick={() => categoryClicked(item)}
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {loading === true || loading === undefined ? (
          <Loading />
        ) : (
          <div>
            <div className="products-sort-wrapper">
              <div>
                <p>{productFiltered.length} Products Found</p>
              </div>

              <div>
                <form>
                  <label>Sort By </label>
                  <select
                    value={sort}
                    onChange={(e) => sortHandler(e.target.value)}
                  >
                    <option value="price-lowest">Price (Lowest) </option>
                    <option value="price-highest">Price (Highest)</option>
                    <option value="name-a-z">Name (A-Z)</option>
                    <option value="name-z-a">Name (Z-A)</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="products-item-wrapper">
              {productFiltered.map((item, id) => {
                return (
                  <div key={id} className="products-item">
                    <Link to={`/products/${item.id}`}>
                      <img src={item.image} alt={item.title} />
                    </Link>
                    <p>{item.title}</p>
                    <p id="products-item-price">${item.price.toFixed(2)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
