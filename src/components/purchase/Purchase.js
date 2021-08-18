import { React, useContext,useEffect } from "react";
import { prodactsConext } from "../context/contextData";
import { getReq, putReq, deleteReq, auth } from "../api/rest-helper";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import PurchaseSview from './PurchaseSview'
const Purchase = () => {
  const { user, order, dispatch } = useContext(prodactsConext);

  useEffect(() => {
  oneTime()
  }, [])
  
  const oneTime = () => {
    auth()
    axios.get("https://online-shop-by-jin.herokuapp.com/orders/").then(response => {
      console.log("order", response)
      dispatch({ type: "GET_ORDER", payload: response.data })
    })
  }
    console.log("purchase",order)
  return (
    <div className="watch-continar">

        <div className="watch-card-continar">
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200:4 }}
            >
            <Masonry gutter={50}>
              {order.length ? order.map(items => items.products.map(el => <PurchaseSview el={el.product} oneTime={oneTime} />)) :  <h3 className="title-list">Purchase List is Empty</h3>}
            </Masonry>
            </ResponsiveMasonry>
        </div> 
    </div>
  );
};
export default Purchase
