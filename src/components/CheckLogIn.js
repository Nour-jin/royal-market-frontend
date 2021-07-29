import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { prodactsConext } from "./context/contextData";

const CheckLogIn = ({ component: Component, ...rest }) => {
  const { user } = useContext(prodactsConext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.loggedIn == false ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default CheckLogIn;
