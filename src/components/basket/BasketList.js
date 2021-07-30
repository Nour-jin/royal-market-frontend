import { React } from "react";
import { Link } from "react-router-dom";


const BasketList = ({ product, dispatch }) => {


  return (
    <>
     
        <div key={product._id} className="col-md-4 col-sm-6">
          <div
            className="card"
          >
            <Link to={`item/${product._id}`}>
              <div className="card-header">
                {product.img == undefined
                  ? ""
                  : product.img.map((e) => (
                    <img
                      key={product._id}
                      style={{ maxWidth: "100%" }}
                      src={"http://localhost:3001/" + e.original}
                      alt={product.name}
                    />
                  )).slice(0, 1)}
              </div>
              <div className="card-body">
                <h2>{product.title}</h2>
                <h5>{product.category}</h5>
                <div>{product.price}</div>
                <div>{product.quantity * product.price}</div>
                <div>{product.quantity}</div>
              </div>
          </Link>
          <button onClick={()=> dispatch({type:"DELETE_ITEM", payload:product})}>Delete</button>
            <button onClick={() => dispatch({ type: 'DECROMENT', payload: product })}> - </button>
            <button onClick={() => dispatch({ type: 'INCROMENT', payload: product })}> + </button>
          </div>
        </div>
    </>
  );
};

export default BasketList;
