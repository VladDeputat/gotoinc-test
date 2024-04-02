"use client";

import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "@/redux/hooks";
import { crateRequest } from "@/redux/operations";
import { useParams } from "next/navigation";
import BasicForm from "./BasicForm";

registerLocale("en", enGB);

const RequestForm = ({ isOrderForm }) => {
  const dispatch = useAppDispatch();
  const { userId } = useParams();

  const initialState = {
    fromCity: "",
    toCity: "",
    parcelType: "",
    dispatchDate: new Date(),
    parcelDescription: "",
    requestType: isOrderForm ? "order" : "deliver",
    userId: userId,
  };

  // const [formData, setFormData] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleCreateSubmit = (formData) => {
    // e.preventDefault();
    dispatch(crateRequest(formData));
    // setFormData(initialState);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h1 style={{ fontSize: "40px" }}>
        {isOrderForm ? "Create Order Request" : "Create Delivery Request"}
      </h1>

      <BasicForm
        isOrderForm={isOrderForm}
        handleSubmit={handleCreateSubmit}
        initialState={initialState}
      />
    </div>
  );
};

export default RequestForm;
