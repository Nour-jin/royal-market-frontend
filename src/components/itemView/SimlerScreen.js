import React, { useState, useEffect, useContext } from "react";
import Tilt from "react-parallax-tilt";
import HartsLove from "../cardsList/HartsLove";
import { Link } from "react-router-dom";
import { prodactsConext } from "../context/contextData";
import { likes } from "../api/rest-helper";

function SimlerScreen({ el }) {
  const [like, setlike] = useState(false);
  const imgColor = el.img.map((imeEl) => imeEl.color.Vibrant);
  const { user } = useContext(prodactsConext);

  useEffect(() => {
    if (el.loggedInUserLiked > 0) {
      setlike(true);
    } else {
      setlike(false);
    }
  }, []);


const likeHandler = (postId, userId) => {
  likes(postId, userId).then((response) => {
    const hasLike = response.data.likes.some((item) => item == postId);
    if (hasLike) {
       setlike(true)
      } else {
        setlike(false)
      }
  })
}


  return (
    <Tilt
      className="TiltCard3D"
      glareEnable={false}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
       
      <div className="card3D-vertical" style={{ color: imgColor[0] }}>
      
        {el.img
          .map((imeEl) => (
            <img src={"https://online-shop-by-jin.herokuapp.com/" + imeEl.original} alt="" />
          ))
          .slice(0, 1)}
        
        {el.img
          .map((imeEl) => (
            <div
              className="shadow3d"
              style={{
                backgroundImage: `url(${
                  "https://online-shop-by-jin.herokuapp.com/" + imeEl.thumb
                })`,
              }}
            />
          ))
            .slice(0, 1)}
         
        <div className="inner-card">
        
            <div>{el.price}</div>
          <Link to={`item/${el._id}`}></Link>
          <div className="card3DFotter">
            <div className="card3D-title">{el.title}</div>
            <div className="card3D-likeCount">watchers {el.likeCount}</div>
            <i
              onClick={() => {
                likeHandler(el._id, user.user._id);
              }}
              className={ like ? "card3D-icon fas fa-heart" : "card3D-icon far fa-heart"}
            ></i>
          </div>
        </div>

        <HartsLove like={like} />
        
      </div>
     
    </Tilt>
  );
}

export default SimlerScreen
