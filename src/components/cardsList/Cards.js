import { React,useEffect } from "react";
import { Link } from "react-router-dom";

const Cards = ({ card, dispatch }) => {




  return (
    <>
      
        <div className="card cardV">
         
            <div className="card-header1">
              {card.img
                .map((e) => (
                  <img
                    key={card._id}
                    style={{ maxWidth: "100%" }}
                    src={"http://localhost:3001/" + e}
                    alt={card.name}
                  />
                ))
                .slice(0, 1)}
            </div>
            <div className="card-body">
              <h6>{card.title}</h6>
              <div>{card.category}</div>
              <span style={{"textDecoration": card.oldPrice ? "line-through" :''}}>{card.price} €</span>
             {card.oldPrice ? <span> {card.oldPrice} €</span> : ""}
            </div>
          
        </div>
    </>
  );
};

export default Cards;
