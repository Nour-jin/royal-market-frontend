import { React, useContext } from "react";
import WatchList from "../watchList/WatchList";
import { prodactsConext } from "../context/contextData";
import {SearchTitleSvg} from "../watchList/TitleSvg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const SearchList = () => {
  const { watch } = useContext(prodactsConext);


  console.log("watch List", watch)

  return (
    <div>
      <SearchTitleSvg/>
      <div className="sections row mt-3">
        <div className="row cardRow p-5">
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200:4 }}
            
            >
                <Masonry gutter={50}>
                      {watch.map((el) => <WatchList key={el._id} el={el} />)}
                      </Masonry>
            </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default SearchList
