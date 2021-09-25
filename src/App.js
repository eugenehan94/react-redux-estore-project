//E-Commerce Website
// 3 pages - Home , About,  Products
//Fetch Data from Api - Fake Store

import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Item from "./pages/Item";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:itemId">
          <Item />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
