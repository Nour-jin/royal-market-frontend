import { React, useContext } from "react";
import SimlerScreen from "./SimlerScreen";
import { prodactsConext } from "../context/contextData";
import {SimilaerTitleSvg} from "../watchList/TitleSvg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
const SimilarItems = () => {
  const { recent } = useContext(prodactsConext);

  const pagination = {
    "clickable": true,
    "renderBullet": function (index, className) {
            return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
          }
  }


  return (
    <div>
      {recent.length ? <SimilaerTitleSvg/> : ""}
     { recent.length ?<div className="sections row mt-3">
        <div className="row cardRow p-5">
        
        <Swiper      slidesPerView={4}
      spaceBetween={50} pagination={pagination}  className="mySwiper">
              {recent.map((el) => <SwiperSlide><SimlerScreen el={el} /></SwiperSlide>)}
              </Swiper>

        </div>
      </div> :""}
    </div>
  );
};

export default SimilarItems
