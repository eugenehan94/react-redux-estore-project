const initialState = {
  open: false,
};

export const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAVBAR_TOGGLE": {
      return { ...state, open: action.payload };
    }
    default:
      return state;
  }
};
