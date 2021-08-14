import React, { createContext, useReducer, useEffect } from "react";
import { profileReducer, initialProfile } from "../reducers/reducer";
import { asyncLocalStorage } from "../api/rest-helper";
export const prodactsConext = createContext();

export const ProductsProvider = (props) => {
  const [state, dispatch] = useReducer(profileReducer, initialProfile);
  const { watch, user, products, product, basket, recent, discounts, search, like } = state;

  useEffect(() => {
    getLocal();
  }, []);


  useEffect(() => localStorage.setItem("basket", JSON.stringify(basket)), [basket]);
  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem("recent", JSON.stringify(recent)), [recent]);


  const getLocal = () => {
    let keysToAdd = ["user", "basket", "recent"];
    for (let key of keysToAdd) {
        if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, JSON.stringify([]));
        } else {
          let dataLocal = JSON.parse(localStorage.getItem(key));
          dispatch({ type: `GET_${key.toUpperCase()}_LOCAL`, payload: dataLocal });
  
        }
    }
  };

  return (
    <prodactsConext.Provider
      value={{
        state,
        dispatch,
        basket,
        watch,
        user,
        products,
        product,
        discounts,
        recent,
        search,
        like
      }}
    >
      {props.children}
    </prodactsConext.Provider>
  );
};
