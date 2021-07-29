import { React, useContext } from "react";
import RecentScreen from "./RecentScreen";
import { prodactsConext } from "../context/contextData";
import {RecentTitleSvg} from "../watchList/TitleSvg";

const RecentList = () => {
  const { recent } = useContext(prodactsConext);



  return (
    <div>
      {recent.length ? < RecentTitleSvg /> :""}
      {recent.length ? <div className="sections row mt-3">
        <div className="row cardRow p-5">
          <div className="masonry">
              {recent.map((el) => <RecentScreen key={el._id} el={el} />)}
          </div>
        </div>
      </div> :""}
    </div>
  );
};


export default RecentList