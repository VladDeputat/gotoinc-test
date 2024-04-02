"use client";

import React from "react";
import { enGB } from "date-fns/locale";
import { registerLocale } from "react-datepicker";
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

  const handleCreateSubmit = (formData) => {
    dispatch(crateRequest(formData));
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
