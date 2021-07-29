import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
    axios
      .post(`http://localhost:3001/users/login`, data)
      .then((result) => {
        console.log("result", result);
        dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
        const auth = result.headers["x-auth"];
        localStorage.setItem("x-auth", JSON.stringify(auth));
        let token = JSON.parse(localStorage.getItem("x-auth"));
        axios.defaults.headers.common["x-auth"] = token;
        if (result.status == 200) {
          setRedirect(true);
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
    <div>
      {redirect ? <Redirect to="/" /> : ""}
      <div className="container">
        <h2 className="text-center">Login</h2>
        <form action="#" onSubmit={handleSubmit(submit)}>
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
              placeholder="password"
            />
            {errors.password && <span>This field is required</span>}
          </label>

          <div className="text-center text-danger">{err}</div>
          <button type="submit" className="green">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
