import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { prodactsConext } from "../context/contextData";
import Search from "../search/Search";

const NavBar = () => {
  const { user, dispatch } = useContext(prodactsConext);
  const [open, setOpen] = useState(false)


const searchToggle = (e) => {
  setOpen(!open)
}
  return (

<nav>
    <div class="menu">
        <ul>
          <li>{user.loggedIn && user.user ? (
              <a className={ open ? "menu-item hide-item" :"menu-item"}>
                Hi!.. {user.user.firstName} {user.user.lastName}
              </a>
            ) : (
              ""
            )}{" "}</li>
            <li><Link className={ open ? "menu-item hide-item" :"menu-item"}  to="/sellerForm">Sell</Link></li>
            <li><Link className={ open ? "menu-item hide-item" :"menu-item"} to="/watch">Watch</Link></li>
            <li><Link className={ open ? "menu-item hide-item" :"menu-item"} to="/register">Sing up</Link></li>
            <li><Link className={ open ? "menu-item hide-item" :"menu-item"} to="/basketList">Basket</Link></li>
            <li><a href="#" className={ open ? "menu-item hide-item" :"menu-item"}>Notifaction</a></li>
            <li> {user.loggedIn && user.user ? (
              <a
              className={ open ? "menu-item hide-item" :"menu-item"}
                onClick={() => {
                  dispatch({ type: "LOGOUT_USER", payload: "" });
                  let keysToRemove = ["user", "x-auth"];
                  for (let key of keysToRemove) {
                    localStorage.removeItem(key);
                  }
                }}
              >
                Sing out
              </a>
            ) : (
              <Link className={ open ? "menu-item hide-item" :"menu-item"} to="/login">
              Sing in
              </Link>
            )}</li>
          <li><a href="#" id="search" onClick={searchToggle}><i class={ open ? "fa fa-times" : "fa fa-search"}></i></a></li>
            <li><a href="#"><i class="fa fa-shopping-basket"></i></a></li>
        </ul>
        <Search open={open} />
       
        <a class="close"><i class="fa fa-times"></i></a>
    </div>
</nav>



  );
};

export default NavBar;
