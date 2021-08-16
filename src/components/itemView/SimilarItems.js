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

 


  return (
    <>
    {recent.length ? (
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        pagination={true}
        className="mySwiper"
      >
          {recent.length ? <SimilaerTitleSvg/> : ""}
        {recent.map((el) => (
          <SwiperSlide>
            <SimlerScreen el={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      ""
    )}
  </>
  );
};

export default SimilarItems
