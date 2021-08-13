import { React, useState, useEffect, useContext } from "react";
import Edit from "./Edit";
import Buy from "../basket/Buy";
import { auth, getReq, likes } from "../api/rest-helper";
import { useParams,Redirect } from "react-router-dom";
import { prodactsConext } from "../context/contextData";
import CheckLogIn from "../CheckLogIn";
import "./item.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SimilarItems from "./SimilarItems";

const Item = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const { user, dispatch, product } = useContext(prodactsConext);
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [like, setlike] = useState(false);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    auth();
    getReq(id).then((result) => {
      dispatch({ type: "RECENT_ITEM", payload: result.data });
      dispatch({ type: "FATCH_SUCCESS_ITEM", payload: result.data });
    });
  }, [id, edit]);

  useEffect(() => {
    setImages(
      product.img
        ? product.img.map((url) => ({
            original: `https://online-shop-by-jin.herokuapp.com/${url.original}`,
            thumbnail: `https://online-shop-by-jin.herokuapp.com/${url.original}`,
            originalClass: "featured-slide",
            thumbnailClass: "featured-thumb",
            description: "",
          }))
        : ""
    );
    if (product.loggedInUserLiked > 0) {
      setlike(true);
    } else {
      setlike(false);
    }
    if (product.price) {
      const fullPrice = product.price.toString().split(".");
      console.log("price", fullPrice);
      const price = fullPrice[0];
      const cent = fullPrice[1];
      product.cent = cent;
      product.price = price;
    }
  }, [product]);


  const likeHandler = (postId, userId) => {
    if (user.loggedIn === true) {
      setRedirect(false)
      likes(postId, userId).then((response) => {
        const hasLike = response.data.likes.some((item) => item == postId);
        if (hasLike) {
          setlike(true)
        } else {
          setlike(false)
        }
      })
    } else {
      setRedirect(true)
    }
  };



  console.log(product)

  return (
    <>
      {redirect ? <Redirect to="/login" /> : ""} 
    <div className="item">
      <div className="gallery">
        {images ? (
          <ImageGallery
            items={images}
            additionalClass="app-image-gallery "
            onSlide={(e) => setCount(e)}
          />
        ) : null}
      </div>
      <div
        className="appShadowGallery"
        style={{
          backgroundColor: product.img ? product.img[count].color.Muted : "black",
        }}
      />
      {edit ? (
        <Edit key={product._id} setEdit={setEdit} dispatchOneItem={dispatch} />
      ) : (
        <div className="item-info">
          <h1>{product.title}</h1>
          <div className="item-body">
            <div className="item-price">
              <h5>
                  {product.price},<span className="cent">{product.cent}</span>
                <span>€</span>
              </h5>
              <div>
                <button onClick={() => dispatch({ type: "DECROMENT_ITEM" })}>
                  {" "}
                  -{" "}
                </button>
                <div>Quantity: {product.quantity}</div>
                <button onClick={() => dispatch({ type: "INCROMENT_ITEM" })}>
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
          {user.loggedIn &&
          user.user &&
          product.owner &&
          product.owner._id == user.user._id ? (
            <button onClick={() => setEdit(!edit)} className="">
              {" "}
              update
            </button>
          ) : (
            <Buy key={product._id} card={[product]} />
          )}
          <button
            style={{
              backgroundColor: like ? "blueviolet" : "",
              color: like ? "#fff" : "",
            }}
            className=""
            onClick={() => likeHandler(product._id, user.user._id)}
          >
            {like ? "This Item is Watched" : "Watch"}
          </button>
          <button
            className=""
            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
          >
            Add to Basket
          </button>
        </div>
      )}
      <div className="item-descraption">
        <h3>Descraption</h3>
        <p>{product.description}</p>
      </div>
      <div className="item-specifics">
        <h5>Type</h5>
        <p>Lorem, ipsum.</p>
        <h5>Color</h5>
        <p>Lorem ipsum dolor sit.</p>
        <h5>Features</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          necessitatibus.
        </p>
        <h5>MPN</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <h5>Connectivity</h5>
        <p>Lorem ipsum dolor sit.</p>
        <h5>Model</h5>
        <p>Lorem, ipsum.</p>
        <h5>Brand</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h5> Form Factor</h5>
        <p>Lorem, ipsum dolor.</p>
        <h5>Country/Region of Manufacture</h5>
        <p>Lorem, ipsum.</p>
        <h5>Manufacturer</h5>
        <p>Lorem ipsum dolor sit.</p>
        <h5> Number of Earpieces</h5>
        <p>Lorem, ipsum.</p>
      </div>
      
      </div>
      <SimilarItems/>
      </>
  );
};

export default Item;
