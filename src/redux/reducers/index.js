import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import { singleProductReducer } from "./singleProductReducer";
import { featuredProductReducer } from "./featuredProductReducer";
import { navbarReducer } from "./navbarReducer";
const reducer = combineReducers({
  allProduct: productReducers,
  oneItem: singleProductReducer,
  featuredItem: featuredProductReducer,
  toggleNavbar: navbarReducer,
});

export default reducer;
