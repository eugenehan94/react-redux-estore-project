import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import { singleProductReducer } from "./singleProductReducer";
import { featuredProductReducer } from "./featuredProductReducer";
import { navbarReducer } from "./navbarReducer";
import { sortReducer } from "./sortReducer";
const reducer = combineReducers({
  allProduct: productReducers,
  oneItem: singleProductReducer,
  featuredItem: featuredProductReducer,
  toggleNavbar: navbarReducer,
  sort: sortReducer,
});

export default reducer;
