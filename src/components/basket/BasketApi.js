import { React, useContext } from "react";
import BasketList from "./BasketList";
import Buy from "./Buy";
import { prodactsConext } from "../context/contextData";
import { BasketSvg } from "../watchList/TitleSvg";
import img_url from "../api/service-info"
const BaskeApi = () => {
  const { basket, dispatch } = useContext(prodactsConext);
const {items, total} = basket


  return (
    <div>
      <BasketSvg/>
      {items.length ? (
        <div className="container">
          <div className="row">
            {items.map((el) => {
              return (
                <BasketList
                  key={el._id}
                  product={el}
                  dispatch={dispatch}
                />
              );
            })}
          </div>
          <div className="text-danger">Total Price: {total}</div>
          <Buy card={items} />
        </div>
      ) : (
        <h3 className="text-center">your Basket is Empty</h3>
      )}
    </div>
  );
};

export default BaskeApi;
