import React from 'react'

const test = () => {
    return (
        <div>
            
    <nav class=" navbar navbar-expand-lg">
      <a class="navbar-brand" href="#" data-abc="true">
        Online Shop
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={()=> setOpen(!open)}
      >
        <span>
        <i className={open ? "fas faup fa-chevron-circle-up" : "fadown fas fa-chevron-circle-up"}></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            {" "}
            <a class="nav-link" href="#" data-abc="true">
              Home <span class="sr-only">(current)</span>
            </a>{" "}
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/sellerForm">
              Sell Somthing
            </Link>
          </li>
          <li class="nav-item">
            {" "}
            <Link class="nav-link" to="/watchList">
              Watched List
            </Link>
          </li>
          <li class="nav-item">
            {" "}
            <Link class="nav-link" to="/basketList">
              Basket List
            </Link>
          </li>
          <li class="nav-item">
            {" "}
            <Link class="nav-link" to="/register">
            Sing up
            </Link>
          </li>
          <li class="nav-item">
            {" "}
            {user.loggedIn && user.user ? (
              <a
                class="nav-link"
                style={{ cursor: "pointer" }}
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
              <Link class="nav-link" to="/login">
              Sing in
              </Link>
            )}{" "}
          </li>
          <li class="nav-item">
            {" "}
            {user.loggedIn && user.user ? (
              <a class="nav-link userLink">
                Hi!.. {user.user.firstName} {user.user.lastName}
              </a>
            ) : (
              ""
            )}{" "}
          </li>
        </ul>
      </div>
      <Search />
    </nav>
        </div>
    )
}

export default test
