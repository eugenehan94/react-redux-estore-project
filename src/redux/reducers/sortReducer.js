const initialState = {
  sort: "price-lowest",
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ASCENDING":
      return {
        sort: "price-lowest",
      };
    case "DESCENDING":
      return {
        sort: "price-highest",
      };
    case "ALPHABETICAL":
      return {
        sort: "name-a-z",
      };
    case "REVERSE-ALPHABETICAL":
      return {
        sort: "name-z-a",
      };
    default:
      return state;
  }
};
