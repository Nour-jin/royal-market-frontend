import React from "react";
import { useForm } from "react-hook-form";
const Adress = ({register,  errors }) => {
    
    
  return (
    <div>
      <label htmlFor="country">
        <input
          type="text"
          placeholder="Country"
          {...register("address.0.country", { required: true, maxLength: 80 })}
        />
      </label>
      <label htmlFor="city">
        <input
          type="text"
          placeholder="City"
          {...register("address.0.city", { required: true, maxLength: 100 })}
        />
        </label>
    <label htmlFor="PostalCode">
        <input
          type="number"
          placeholder="Postal Code"
          {...register("address.0.PostalCode", { required: true })}
        />
      </label>
      <label htmlFor="street">
        <input
          type="text"
          placeholder="Street"
          {...register("address.0.street", { required: true })}
        />
      </label>
      <label htmlFor="housNum">
        <input
          type="number"
          placeholder="House Num"
          {...register("address.0.housNum", {})}
        />
        </label>
    </div>
  );
};

export default Adress;
