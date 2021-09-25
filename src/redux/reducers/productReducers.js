const initialState = {
  product: [],
  loading: true,
  category: [],
  productFiltered: [],
  selected: "All",
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        product: action.payload,
        category: action.payload.map((items) => items.category),
        loading: false,
        productFiltered: action.payload,
        selected: "All",
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        productFiltered: state.product.filter(
          (item) => item.category === action.payload
        ),
      };
    case "SELECTED_CATEGORY":
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};
