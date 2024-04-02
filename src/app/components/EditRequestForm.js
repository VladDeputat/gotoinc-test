"use client";

import React from "react";
import BasicForm from "./BasicForm";

const EditRequestForm = ({ handleSubmit, activeRequestToEdit }) => {
  const initialStateWithData = {
    fromCity: activeRequestToEdit.fromCity,
    toCity: activeRequestToEdit.toCity,
    parcelType: activeRequestToEdit.parcelType,
    dispatchDate: activeRequestToEdit.dispatchDate,
    parcelDescription: activeRequestToEdit.parcelDescription,
    requestType: activeRequestToEdit.requestType,
    userId: activeRequestToEdit.userId,
    requestId: activeRequestToEdit.requestId,
  };

  return (
    <div className="container">
      <BasicForm
        isOrderForm={activeRequestToEdit.requestType === "order"}
        handleSubmit={handleSubmit}
        initialStateWithData={initialStateWithData}
      />
    </div>
  );
};

export default EditRequestForm;
