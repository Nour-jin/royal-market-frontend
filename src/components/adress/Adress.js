import React from "react";
import { useForm } from "react-hook-form";
const Adress = ({register,  errors }) => {
    
    
  return (
    <div>
        <input
          type="text"
          placeholder="Country"
          {...register("address.0.country", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="City"
          {...register("address.0.city", { required: true, maxLength: 100 })}
        />
        <input
          type="number"
          placeholder="Postal Code"
          {...register("address.0.PostalCode", { required: true })}
        />
        <input
          type="text"
          placeholder="Street"
          {...register("address.0.street", { required: true })}
        />
        <input
          type="number"
          placeholder="House Num"
          {...register("address.0.housNum", {})}
        />
    </div>
  );
};

export default Adress;
