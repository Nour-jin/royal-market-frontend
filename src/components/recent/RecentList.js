import { React, useContext } from "react";
import RecentScreen from "./RecentScreen";
import { prodactsConext } from "../context/contextData";
import {RecentTitleSvg} from "../watchList/TitleSvg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const RecentList = () => {
  const { recent } = useContext(prodactsConext);



  return (
    <div>
      {recent.length ? < RecentTitleSvg /> :""}
      {recent.length ? <div className="sections row mt-3">
        <div className="row cardRow p-5">
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200:4 }}
            
            >
                <Masonry gutter={50}>
              {recent.map((el) => <RecentScreen key={el._id} el={el} />)}
              </Masonry>
            </ResponsiveMasonry>
        </div>
      </div> :""}
    </div>
  );
};


export default RecentList