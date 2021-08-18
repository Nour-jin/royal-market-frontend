import { React, useContext,useEffect } from "react";
import WatchList from "./WatchList";
import { prodactsConext } from "../context/contextData";
import { getReq, putReq, deleteReq, auth } from "../api/rest-helper";
import axios from "axios";
import {TitleSvg} from "./TitleSvg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const WatchApi = () => {
  const { user, watch, dispatch } = useContext(prodactsConext);
  console.log(user)

  useEffect(() => {
  oneTime()
  }, [])
  
  const oneTime = () => {
    auth()
    axios.get("https://online-shop-by-jin.herokuapp.com/products/watch").then(response => {
      console.log("watch", response.data)
      dispatch({ type: "GET_WATCH", payload: response.data })
    })
  }

  console.log("watch List", watch)

  return (
    <div className="watch-continar">
      <TitleSvg/>

        <div className="watch-card-continar">
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200:4 }}
            >
            <Masonry gutter={50}>
              {watch.length ? watch.map((el) => <WatchList el={el} oneTime={oneTime} />) :  <h3 className="title-list">Watch List is Empty</h3>}
            </Masonry>
            </ResponsiveMasonry>
        </div>
   
       
    </div>
  );
};

export default WatchApi;
