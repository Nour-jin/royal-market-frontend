import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { auth, postReq } from "../api/rest-helper";
import { prodactsConext } from "../context/contextData";

const SellerForm = () => {
  const [inputText, setInputText] = useState({ img: [] });
  const { user, dispatchUser } = useContext(prodactsConext);

  const deleteHandler = (e) => {
    console.log("btn", e);
    setInputText({
      img: inputText.img.filter((el) => {
        return console.log("delete", el.name), el.name !== e;
      }),
    });
  };

  const handleChange = (e) => {
    if (e.target.name == "img") {
      [...e.target.files].forEach((el) => {
        setInputText({ ...inputText, img: [...inputText.img, el] });
      });
    } else {
      setInputText({
        ...inputText,
        [e.target.name]: e.target.value,
        owner: user.user._id,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const onData = new FormData();
    for (let key in inputText) {
      if (key == "img") {
        inputText[key].forEach((fileImg) => {
          if (typeof inputText[key] == "object")
            onData.append(key, fileImg, fileImg.name);
        });
      } else {
        onData.append(key, inputText[key]);
      }
    }
    auth();
    postReq(onData);
  };

  return (
    <div className="container">
      <Link to="/">Home</Link>
      <div className="segment">
        <h1>Selling</h1>
      </div>
      <form className="sellingForm" action="#">
        <label htmlFor="Title">
          <input
            id="Title"
            placeholder="Title"
            value={inputText.title}
            type="text"
            name="title"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="category">
          <input
            id="category"
            placeholder="Catorgy"
            value={inputText.type}
            type="text"
            name="category"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          <input
            id="price"
            placeholder="Price"
            value={inputText.price}
            type="text"
            name="price"
            onChange={handleChange}
          />
        </label>
        <input
          id="file"
          type="file"
          multiple
          name="img"
          onChange={handleChange}
        />
        <label htmlFor="file">add Photo</label>
        <div className="input-group">
          <label htmlFor="description">
            <input
              id="description"
              type="text"
              name="description"
              value={inputText.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </label>
        </div>
        <button onClick={handleSubmit} className="red" type="button">
          <i className="icon ion-md-lock"></i>Submit
        </button>
      </form>
      <div className="photosReview">
        {inputText.img.map((im) => (
          <div>
            <button
              className="deletebtn btn-danger"
              onClick={() => deleteHandler(im.name)}
            >
              x
            </button>
            <img className="imges" src={URL.createObjectURL(im)} alt="non" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerForm;
