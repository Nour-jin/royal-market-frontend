import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { img_url } from "../api/service-info";

const BasketList = ({ product, dispatch }) => {
  const imgColor = product.img.map((imeEl) => imeEl.color.Vibrant);

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
        {product.img
          .map((imeEl) => (
            <img
              src={"https://online-shop-by-jin.herokuapp.com/" + imeEl.original}
              alt=""
            />
          ))
          .slice(0, 1)}

        {product.img
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
          <div
            style={{
              "text-decoration": product.oldPrice ? "line-through" : "",
            }}
          >
            {product.price}
          </div>
          <div>{product.oldPrice}</div>
          <Link to={`item/${product._id}`}></Link>
          <div className="card3DFotter">
            <div className="card3D-title">{product.title}</div>
            <div className="card3D-likeCount-watch">
              watchers {product.likeCount}
            </div>
            <div>Total Price Per Item : {product.oldPrice ? product.quantity * product.oldPrice : product.quantity * product.price }</div>
            <div>Quantity : {product.quantity}</div>
            <div
              onClick={() =>
                dispatch({ type: "DELETE_ITEM", payload: product })
              }
              className="card3D-icon-watch"
            >
              X
            </div>
            <div className="card3D-icon-basket">
              <button
                onClick={() =>
                  dispatch({ type: "DECROMENT", payload: product })
                }
              >
                {" "}
                -{" "}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "INCROMENT", payload: product })
                }
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
export default BasketList;
