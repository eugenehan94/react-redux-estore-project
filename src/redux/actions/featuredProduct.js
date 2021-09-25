export const fetchFeaturedProducts = (product) => {
  return {
    type: "FETCH_FEATURED_PRODUCTS",
    payload: product,
  };
};
