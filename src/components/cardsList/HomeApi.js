import { React, useContext, useEffect, useState, useRef } from "react";
import { prodactsConext } from "../context/contextData";
import Cards from "./Cards";
import {auth, getsReq } from "../api/rest-helper";
import RecentList from "../recent/RecentList";
import DescountsList from "../discounts/DiscountsList";
import ImgTest from "./ImgTest";
import Slider from "react-animated-slider";
import "./slider-animations.css";
import "react-animated-slider/build/horizontal.css";
import Card3D from "./Card3D";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

function HomeApi() {
  const { dispatch, products, user } = useContext(prodactsConext);
  const [curent, setcurent] = useState(Number);

console.log("user", user)
  SwiperCore.use([Pagination]);
  // Creat Fack User if there is no real User
  if (!user.user) {
    const _id = Date.now();
    dispatch({ type: "FACK_USER", payload: { _id: _id } });
  }

  useEffect(() => {
    auth()
    getsReq().then((result) => {
      dispatch({ type: "FATCH_SUCCESS", payload: result.data });
    });
  }, []);

  /*
     <Slider {...settings}>  
     {products.map((event) => {
       return <Cards key={event._id} card={event} dispatch={dispatch} />;
            })
        }
        
      </Slider>
      */

  let settings = {
    className: "slideCard",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  let settings1 = {
    className: "slideCardS1",
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: 1000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    cssEase: "ease-out",
    slidesToScroll: 1,
    afterChange: function (currentSlide) {
      setcurent(currentSlide);
      // console.log("after change", currentSlide);
      return currentSlide;
    },
  };

  const imagesTest = [
    {
      img: "/images/fashion/cool-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-drinking-coffee-shopaholic-min.jpg",
      title: "Apple Watch",
      par: "odels promote, advertise, and showcase clothing, footwear, and other products. They participate in photoshoots, fashion shows, commercials, trade shows, and conventions as well as pose for sculptors, artists, and painters.",
      id: 1,
      scetion: "Model",
    },
    {
      img: "/images/fashion/surprised-girl-pink-culottes-posing-with-trolley-full-multi-colored-packages-with-new-clothes-min.jpg",
      title: "Don't Miss",
      par: "Fashion also alludes to the way in which things are made; to fashion something is to make it in a particular form. ... Most commonly, fashion is defined as the prevailing style of dress or behavior at any given time, with the strong implication that fashion is characterized by change.",
      id: 2,
      scetion: "fashionnn",
    },
    {
      img: "/images/svg/nour1.jpg",
      title: "Living Room",
      par: "A comfortable sofa has a frame designed in such a way that it's easy to get up and down from the seated position. The frame needs to be sturdy enough to support the weight of several people. Look for sofa frames constructed of hardwood, such as kiln-dried ash, oak ",
      id: 3,
      scetion: "Comfortble",
    },
    { img: "/images/svg/11.jpg", title: "live you'r Live", par: "Entertainment walls have become an important living room feature, and now provide stiff competition for the traditional feature fireplace. TV lovers want their box in pride of place to achieve the optimum viewing angle, so increasingly the lounge fireplace is being bumped to a side wall or corner adornment. This interior reshuffle leaves space to imagine a new living room feature wall with the TV at its centre. It also presents extra requirements for storage of receiver and recorder equipment", id: 4, scetion: "Vision" },
    {
      img: "/images/svg/Living_room_Wall_1.jpg",
      title: "Furniture",
      par: "As the centerpiece of any social area, a stylish sofa often serves as a functional focal point – it's important to balance comfort with aesthetics to get the best possible effect. This post outlines twenty fabulous sofa designs for any style, from Scandinavian chic to industrial minimalism. You'll find sofas for every budget, every interior color scheme, and every type of space whether you're looking to outfit an open layout living room or a fully-equipped home theater.",
      id: 5,
      scetion: "Classic",
    },
    {
      img: "/images/svg/digital-laptop-working-global-business-concept.jpg",
      title: "classic Decore",
      par: "Classic style includes well-made furniture with detailing such as inlay and carved or turned legs, as well as pieces with ornate detailing, sometimes with a floral or fauna influence. Fabrics that have texture and subtle patterns, and stripes mixed with block colours, are popular choices.",
      id: 6,
      scetion: "Mobel",
    },
  ];

  const imagesSlide = [
    {
      img: "/images/Apple/apple1.jpg",
      title: "iPhone 12",
      par: "International Collection",
    },
    {
      img: "/images/samsung/01.jpg",
      title: "Samsung",
      par: "Ultimate Collectios",
    },
    {
      img: "/images/svg/Untitled-1.jpg",
      title: "Huawei Mate",
      par: "life your Moment",
    },
  ];

  const images5 = [
    {
      img: "/images/samsung/galaxy2.jpg",
      title: "Apple Watch",
      par: "International Collection",
    },
    { img: "/images/samsung/bet room.jpg", title: "", par: "" },
    { img: "/images/ikea/ein-bettgestell.jpg", title: "", par: "" },
    { img: "/images/svg/dining-tabel1.jpg", title: "", par: "" },
    { img: "/images/svg/white-livingroom.jpg", title: "", par: "" },
  ];

  const content = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "/images/Apple/apple1.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "/images/samsung/01.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },
    {
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "/images/svg/Untitled-1.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
  ];

  const pagination = {
    "clickable": true,
    "renderBullet": function (index, className) {
            return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
          }
  }
  

console.log("products", products)

  return (
    <div className="container1">
      <div className="shadowMainBordR" />
      <div className="shadowMainBordL" />
      <Slider className="slider-wrapper" autoplay={4000}>
      
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
<RecentList/>
      <div className="wideCardViwer">
        <div className="textCardViwers">
          <h1>iPad Pro</h1>
          <p>Supercharged By Apple M1 chip</p>
        </div>
        
        <img width="100%" src="/images/Apple/apple3.jpg" alt="" />
      </div>

      <div className="row ">
        {imagesTest.map((el, i) => (
          <ImgTest el={el} i={i} products={products}/>
        ))}
      </div>

     
     

         
        <Swiper      slidesPerView={4}
      spaceBetween={50} pagination={pagination}  className="mySwiper">
              {products.map((el) => <SwiperSlide><Card3D el={el} /></SwiperSlide>)}
              </Swiper>

     < DescountsList/>
    </div>
  );
}

export default HomeApi;
