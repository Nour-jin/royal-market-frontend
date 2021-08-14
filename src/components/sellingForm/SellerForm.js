import { React, useState, useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, postReq } from "../api/rest-helper";
import { prodactsConext } from "../context/contextData";

const SellerForm = () => {
  const [inputText, setInputText] = useState({ img: [] });
  const [message, setmessage] = useState("")
  const { user } = useContext(prodactsConext);


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
    setmessage("Loading...")
    postReq(onData).then(response => {
      if (response.data) {
        setmessage("The product has been added, you can see it in the products list")
      }
    }).catch((error) => {
      if (error.response.status === 500) {
        setmessage("Please Fill all the Field");
      }
    });
  };

  return (
    <div className="containerSeller">
      <div className="container-innit-seller">
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
          <label htmlFor="category"
           >
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
        <button onClick={handleSubmit} className="btnSubmit" type="button">
          Submit
        </button>
        </form>
        {message ? <div className="sell-message">
          <div><div>{message}</div> Do you want go back to <Link to="/">Home Page</Link> </div>
        </div>:""}
        
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
    </div>
  );
};

export default SellerForm;
