import { React, useState,useEffect } from "react";
import { getReq, putReq, deleteReq,auth } from "../api/rest-helper";
import { Redirect, useParams } from "react-router-dom";

const Edit = ({ setEdit, dispatchOneItem }) => {
  const [input, setInput] = useState(false);
  const [redirect, setredirect] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    auth()
    getReq(id).then((result) => {
      setInput(result.data)
    })
  }, [id])


  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleUpdate = (e) => {
    e.preventDefault();
    auth()
    putReq(input, id).then((result) => {
      console.log('edit',result.data)
      dispatchOneItem({ type: "UPDATA_ITEM", payload: result.data })
      setEdit(false);
    })
  };


  const handleDelete = (e) => {
    e.preventDefault();
    deleteReq(id).then((result) =>
    dispatchOneItem({ type: "DELETE_ITEM", payload: result.data})
    );
    setredirect(true);
  };

  return (
    <>
     
      {redirect ? <Redirect to="/" /> : ""}
      <div className="col-md-4 col-sm-6">
        <div className="card" style={{ borderColor: "" ? "" : "red" }}>
          <div className="card-header">
            <img style={{ maxWidth: "100%" }} src="#" alt="" />
          </div>
          <div className="card-body">
            <input
              placeholder="update your data"
              value={input.title}
              onChange={handleChange}
              name="title"
              // ref={inputRef}
              className="todo-input edit"
            />
            <input
              placeholder="update your data"
              value={input.category}
              onChange={handleChange}
              name="category"
              // ref={inputRef}
              className="todo-input edit"
            />

            <input
              placeholder="update your data"
              value={input.price}
              onChange={handleChange}
              name="price"
              // ref={inputRef}
              className="todo-input edit"
            />
            <input
              placeholder="update your data"
              value={input.oldPrice}
              onChange={handleChange}
              name="oldPrice"
              // ref={inputRef}
              className="todo-input edit"
            />
            <div></div>
            <div></div>
          </div>
        </div>
        <button className="btn btn-warning" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          delete
        </button>
      </div>
    </>
  );
};

export default Edit;
