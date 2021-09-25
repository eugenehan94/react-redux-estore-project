export const fetchProducts = (products) => {
  return {
    type: "FETCH_PRODUCTS",
    payload: products,
  };
};

export const filterProducts = (category) => {
  return {
    type: "FILTER_PRODUCTS",
    payload: category,
  };
};

export const selectedCategory = (category) => {
  return {
    type: "SELECTED_CATEGORY",
    payload: category,
  };
};
