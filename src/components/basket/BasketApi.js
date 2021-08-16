import { React, useContext } from "react";
import BasketList from "./BasketList";
import Buy from "./Buy";
import { prodactsConext } from "../context/contextData";
import { BasketSvg } from "../watchList/TitleSvg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const BaskeApi = () => {
  const { basket, dispatch } = useContext(prodactsConext);
  const { items, total } = basket;

  return (
    <div className="basket-continar">
      <div className="basket-card-continar">
        <BasketSvg />
        <div className="watch-card-continar">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
          >
            <Masonry gutter={50}>
              {items.length ? (
                items.map((el) => (
                  <BasketList product={el} dispatch={dispatch} />
                ))
              ) : (
                <h3 className="text-center">Watch List is Empty</h3>
              )}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>

      <div className="totalPrice">
        <span>Total Price : <span>{total} €</span></span>
        <Buy card={items} />
      </div>
    </div>
  );
};

export default BaskeApi;
