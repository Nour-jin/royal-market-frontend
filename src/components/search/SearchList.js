import { React, useContext } from "react";
import { prodactsConext } from "../context/contextData";
import {SearchTitleSvg} from "../watchList/TitleSvg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SearchSview from './SearchSview'

const SearchList = () => {
  const { search } = useContext(prodactsConext);

  return (
    <div>
      <SearchTitleSvg/>
      <div className="sections row mt-3">
        <div className="row cardRow p-5">
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200:4 }}
            
            >
                <Masonry gutter={50}>
                      {search.map((el) => <SearchSview key={el._id} el={el} />)}
                      </Masonry>
            </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default SearchList
