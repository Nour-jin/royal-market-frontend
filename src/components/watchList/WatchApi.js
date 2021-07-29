import { React, useContext,useEffect } from "react";
import WatchList from "./WatchList";
import { prodactsConext } from "../context/contextData";
import { getReq, putReq, deleteReq, auth } from "../api/rest-helper";
import axios from "axios";
import {TitleSvg} from "./TitleSvg";

const WatchApi = () => {
  const { user, watch, dispatch } = useContext(prodactsConext);
console.log(user)

  useEffect(() => {
  oneTime()
  }, [watch])
  

  const oneTime = () => {
    auth()
    axios.get("http://localhost:3001/products/watch").then(response => {
      console.log("watch", response.data)
      dispatch({ type: "GET_WATCH_LOCAL", payload: response.data })
    })
  }

  console.log("watch List", watch)

  return (
    <div>
      <TitleSvg/>
      <div className="sections row mt-3">
        <div className="row cardRow p-5">
          <div className="masonry">
            {watch.length ?  watch.map((el) =>  <WatchList el={el} />) :  <h3 className="text-center">Watch List is Empty</h3>}
          </div>
        </div>
      </div>
       
    </div>
  );
};

export default WatchApi;
