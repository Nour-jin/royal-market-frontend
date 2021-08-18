import { React,useState,useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { prodactsConext } from '../context/contextData'

const Buy = ({ card }) => {
  const { user } = useContext(prodactsConext)
const [redirect, setredirect] = useState(false)
const [redirectPurchase, setredirectPruchase] = useState(false)

  const buyItem = () => {
    if (user.loggedIn) {
      const order = {
        products: [],
      };
      
      console.log("userId", user.user._id)
    
    card.forEach(element => {
      order.products.push({
        product: element._id,
        user: user.user._id,
        amount: element.quantity
      });
    });
      axios.post(`https://online-shop-by-jin.herokuapp.com/orders`, order).then((result) => {
        if (result.status === 200) {
          setredirectPruchase(true)
        }
      console.log("result", result.data);
    })
  }else {
    setredirect(true) 
    }
  };

  console.log(redirectPurchase)
  
  return (
    <>
      
      {redirect ? <Redirect to="/login" /> : ""}
      {redirectPurchase ? <Redirect to="/purchaseEnd" /> : ""}
      <button className="btn-primary" onClick={buyItem}>
        Buy Now
      </button> 
</>
  );
};

export default Buy;
