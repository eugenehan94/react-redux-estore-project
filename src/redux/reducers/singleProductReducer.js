const initialState = {
  item: {},
  loading: true,
};

export const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_ITEM":
      return {
        item: action.payload,
        loading: false,
      };
    case "CLEAR_SINGLE_ITEM":
      return {
        item: {},
      };
    default:
      return state;
  }
};
