import React, {useEffect,useContext}from 'react'
import DiscountsScreen from './DiscountsScreen'
import {prodactsConext} from '../context/contextData'
import axios from 'axios'
import { auth } from '../api/rest-helper'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import {API_ROOT} from '../api/service-info'




const DiscountsList = () => {
  const { discounts, dispatch } = useContext(prodactsConext);
  

  

  useEffect(() => {
    auth()
    axios.get(`${API_ROOT}/deals`).then(response => {
      console.log("deal",response)
      dispatch({ type: "FATCH_SUCCESS_DISCOUNTS", payload: response.data })
    })
    }, [])

  return (
    <div className="Discount-section">
      {discounts.length ? (
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          pagination={true}
          className="mySwiper"
        >
           <h2>Most Discount</h2>
          {discounts.map((el) => (
            <SwiperSlide>
              <DiscountsScreen el={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}
    </div>
      );
}

export default DiscountsList
