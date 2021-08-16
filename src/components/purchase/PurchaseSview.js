import React, { useState, useEffect, useContext } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { prodactsConext } from "../context/contextData";
import { likes } from "../api/rest-helper";

function WatchList({ el, oneTime }) {
  const imgColor = el.img.map((imeEl) => imeEl.color.Vibrant);


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
            <img
              src={"https://online-shop-by-jin.herokuapp.com/" + imeEl.original}
              alt=""
            />
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
          <div style={{ "text-decoration": el.oldPrice ? "line-through" : "" }}>
            {el.price}
          </div>
          <div>{el.oldPrice}</div>
          <Link to={`item/${el._id}`}></Link>
          <div className="card3DFotter">
            <div className="card3D-title">{el.title}</div>
            <div className="card3D-likeCount-watch">
              watchers {el.likeCount}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default WatchList;