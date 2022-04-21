import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home/Home";
import Laptops from "../../pages/laptops/Laptops";
import Phones from "../../pages/phones/Phones";
import Accessories from "../../pages/accessoriess/Accessories";
import Cart from "../../pages/cart/Cart";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/laptops" component={Laptops} />
        <Route path="/phones" component={Phones} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
};
export default Routes;
