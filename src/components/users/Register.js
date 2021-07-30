import React, { useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Adress from "../adress/Adress";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const submit = (data) => {
   

  
    
    console.log("input", data);
    axios.post(`https://online-shop-by-jin.herokuapp.com/users/`, data).then((result) => {
      console.log("result", result);
    });
  };

  return (
    <div className="container">
      <h2 className="text-center">Register</h2>
      <form action="#" onSubmit={handleSubmit(submit)}>
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
            {...register("userName", { required: true , pattern: /[A-Za-z]{3}/,
            message: 'Please enter a valid email',})}
            id="userName"
            placeholder="userName"
          />
        </label>
        {errors.userName && <span>Please don't use `!@#$%^&*()_+\-=\[\]{};':"\\|,.\/?~</span>}
 
        <Adress register={register} errors={ errors}/>
        <button className="green" type="submit">
          Sing Up
        </button>
      </form>
    </div>
  );
};

export default Register;
