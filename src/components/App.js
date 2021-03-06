import React from "react";
import "../App.css";
import HomeApi from "./cardsList/HomeApi";
import SellerForm from "./sellingForm/SellerForm";
import Item from "./itemView/Item";
import WatchApi from "./watchList/WatchApi";
import BasketApi from "./basket/BasketApi";
import Register from "./users/Register";
import Login from "./users/Login";
import CheckLogIn from "./CheckLogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import SearchList from "./search/SearchList";
import PurchaseEnd from "./basket/PurchaseEnd";
import Purchase from'./purchase/Purchase'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <NavBar />
          <CheckLogIn path="/sellerForm" component={SellerForm} />
          <Route path="/" exact>
            <HomeApi />
            </Route>
            <Route path="/purchaseEnd" exact>
            <PurchaseEnd/>
          </Route>
          <Route path="/item/:id">
            <Item />
          </Route>
          <Route path="/watch">
            <WatchApi />
          </Route>
          <Route path="/purchase">
          <CheckLogIn path="/purchase" component={Purchase} />
          </Route>
          <Route path="/search">
            <SearchList />
          </Route>
          <Route path="/basketList">
            <BasketApi />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
