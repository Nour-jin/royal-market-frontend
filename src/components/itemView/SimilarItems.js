import { React, useContext } from "react";
import SimlerScreen from "./SimlerScreen";
import { prodactsConext } from "../context/contextData";
import {SimilaerTitleSvg} from "../watchList/TitleSvg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const SimilarItems = () => {
  const { recent } = useContext(prodactsConext);




  return (
    <div>
      {recent.length ? <SimilaerTitleSvg/> : ""}
     { recent.length ?<div className="sections row mt-3">
        <div className="row cardRow p-5">
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200:4 }}
            >
            <Masonry gutter={50}>
                      {recent.map((el) => <SimlerScreen key={el._id} el={el} />)}
                      </Masonry>
            </ResponsiveMasonry>
        </div>
      </div> :""}
    </div>
  );
};

export default SimilarItems
