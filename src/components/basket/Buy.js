import { React,useState,useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { prodactsConext } from '../context/contextData'

const Buy = ({ card }) => {
  const { user } = useContext(prodactsConext)
const [redirect, setredirect] = useState(false)


  const buyItem = () => {
    if (user.loggedIn) {
    const order = {
      products: [],
    };
    
    card.forEach(element => {
      order.products.push({
        product: element._id,
        amount: element.quantity
      });
    });


    console.log("order", card);
    axios.post(`http://localhost:3001/orders/`, order).then((result) => {
      console.log("result", result.data);
    })
  }else {
    setredirect(true) 
    }
  };

  return (
   <>
      {redirect ? <Redirect to="/login" /> : ""}
      <button className="btn-primary" onClick={buyItem}>
        Buy Now
      </button> 
</>
  );
};

export default Buy;
