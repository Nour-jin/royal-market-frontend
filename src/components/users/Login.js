import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Redirect,Link } from "react-router-dom";
import { prodactsConext } from "../context/contextData";
import { useForm } from "react-hook-form";


const Login = () => {
  const { dispatch } = useContext(prodactsConext);
  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const submit = (data) => {
setErr("Please Wait Loding...")
    axios
      .post(`https://online-shop-by-jin.herokuapp.com/users/login`, data)
      .then((result) => {
        console.log("result", result);
        dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
        const auth = result.headers["x-auth"];
        localStorage.setItem("x-auth", JSON.stringify(auth));
        let token = JSON.parse(localStorage.getItem("x-auth"));
        axios.defaults.headers.common["x-auth"] = token;
        if (result.status == 200) {
          setErr("Done.")
          setRedirect(true);
          dispatch({ type: "RECENT_ITEM_EMPTY"});
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setErr("Email is Not Registed");
        } else if (error.response.status === 401) {
          setErr("Wrong Passward");
        }
      });
  };

  return (
    <>
     
      <div className="containerSeller">
     
        <div className="segment">
        {redirect ? <Redirect to="/" /> : ""}
          <h1>Welcome to Royal Market</h1>
          <h4>It's your own online store, your comfort is important to us</h4>
        </div>
        <form className="logginForm" action="#" onSubmit={handleSubmit(submit)}>
          <label htmlFor="email">
            <input
              {...register("email", { required: true })}
              id="email"
              placeholder="email"
            />
          </label>
          {errors.email && <span>This field is required</span>}
          <label htmlFor="password">
            <input
              {...register("password", { required: true })}
              id="password"
              type="password"
              placeholder="password"
            />
            {errors.password && <span>This field is required</span>}
          </label>

          <button type="submit" className="btnlogin">
            Login
          </button>
          <div className="singUp-link">You dont have an Acount ? <Link className="" to="/register">Create Account</Link></div>

          {err ?<div className="register-message">
        {err}
        </div> :""}
          </form>
          
      </div>
     </>
      
  );
};

export default Login;
