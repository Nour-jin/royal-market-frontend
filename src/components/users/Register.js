import React, { useRef,useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import Adress from "../adress/Adress";
const Register = () => {
  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const submit = (data) => {
    axios.post(`https://online-shop-by-jin.herokuapp.com/users/`, data).then((response) => {
      if (response.data) {
        setRedirect(true)
      }
      console.log("result", response.data);
    }).catch((err)=> {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
       if (err.response.status === 500) {
        setErr("User Name or Email already exists")
         console.log(err.response.status);
     
       }
     })
  };

  return (
    <div className="containerSeller">
      <h2 className="segment">Register</h2>
      <form  action="#" onSubmit={handleSubmit(submit)}>
        <div className="formRegister">

       
        <div className="userForm">

        
        <label htmlFor="firstName">
          <input
            {...register("firstName", { required: true })}
            id="firstName"
            placeholder="firstName"
          />
        </label>
        {errors.firstName && <span>This field is required</span>}
        <label htmlFor="lastName">
          <input
            {...register("lastName", { required: true })}
            id="lastName"
            placeholder="lastName"
          />
        </label>
        {errors.lastName && <span>This field is required</span>}
        <label htmlFor="email">
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            id="email"
            placeholder="email"
          />
        </label>
        {errors.email && <span>This field is required</span>}
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
        </label>
        {errors.password && <p>{errors.password.message}</p>}
        <label>
          <input
            placeholder="Password repeat"
            type="password"
            {...register("password_repeat", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
        </label>
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
        <label htmlFor="userName">
          <input
            {...register("userName", { required: true , pattern: /^[A-Za-z]+$/i})}
            id="userName"
            placeholder="userName"
          />
        </label>
        {errors.userName && <span>Please don't use `!@#$%^&*()_+\-=\[\]{};':"\\|,.\/?~</span>}
        </div>
        <div className="adressForm">
           <Adress register={register} errors={ errors}/>
        </div>
        </div>
        <button className="btnRegister" type="submit">
          Sing Up
        </button>
        {err ?<div className="register-message">
        {err}
        </div> :""}
      </form>
     
      {redirect ? <Redirect to="/" /> : ""}
    </div>
  );
};

export default Register;
