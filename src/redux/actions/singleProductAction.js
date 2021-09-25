export const fetchSingleProduct = (data) => {
  return {
    type: "FETCH_SINGLE_ITEM",
    payload: data,
  };
};

export const clearSingleProduct = () => {
  return {
    type: "CLEAR_SINGLE_ITEM",
  };
};
