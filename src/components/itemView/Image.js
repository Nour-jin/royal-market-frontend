import React, { useState, useEffect,CSSProperties } from "react";
import "./item.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



const Image = ({ el }) => {
  const [images, setImages] = React.useState([]);
const [count, setCount] = useState(0)
  useEffect(() => {
    setImages(
      el.img
        ? el.img.map((url) => ({
            original: `http://localhost:3001/${url.original}`,
            thumbnail: `http://localhost:3001/${url.original}`,
            originalClass: "featured-slide",
            thumbnailClass: "featured-thumb",
            description: "",
          }))
        : ""
    );
  }, [el]);

const colors = el.img && el.img.map(el => el)

console.log("images", colors, count)

  return (
    <>
      <div className="item" >
        <div className="gallery-main">
          {images ? <ImageGallery items={images} additionalClass="app-image-gallery " onSlide={(e => setCount(e))} /> : null}
         <div className="appShadowGallery" style={{backgroundColor: colors[count].color.Muted}}/>
        </div>
      </div>
    </>
  );
};

export default Image;
