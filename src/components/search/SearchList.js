import { React, useContext } from "react";
import WatchList from "../watchList/WatchList";
import { prodactsConext } from "../context/contextData";
import {SearchTitleSvg} from "../watchList/TitleSvg";

const SearchList = () => {
  const { watch } = useContext(prodactsConext);


  console.log("watch List", watch)

  return (
    <div>
      <SearchTitleSvg/>
      <div className="sections row mt-3">
        <div className="row cardRow p-5">
          <div className="masonry">
                      {watch.map((el) => <WatchList key={el._id} el={el} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList
