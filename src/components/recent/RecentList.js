import { React, useContext } from "react";
import RecentScreen from "./RecentScreen";
import { prodactsConext } from "../context/contextData";
import { RecentTitleSvg } from "../watchList/TitleSvg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
const RecentList = () => {
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
          {recent.length ? <RecentTitleSvg /> : ""}
          {recent.map((el) => (
            <SwiperSlide>
              <RecentScreen el={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}
    </>
  );
};

export default RecentList;
