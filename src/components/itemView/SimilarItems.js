import { React, useContext } from "react";
import SimlerScreen from "./SimlerScreen";
import { prodactsConext } from "../context/contextData";
import {SimilaerTitleSvg} from "../watchList/TitleSvg";

const SimilarItems = () => {
  const { recent } = useContext(prodactsConext);




  return (
    <div>
      {recent.length ? <SimilaerTitleSvg/> : ""}
     { recent.length ?<div className="sections row mt-3">
        <div className="row cardRow p-5">
          <div className="masonry">
                      {recent.map((el) => <SimlerScreen key={el._id} el={el} />)}
          </div>
        </div>
      </div> :""}
    </div>
  );
};

export default SimilarItems
