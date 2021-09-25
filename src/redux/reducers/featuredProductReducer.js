const initialState = {
  product: [],
  loading: true,
};

export const featuredProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FEATURED_PRODUCTS":
      return {
        product: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
