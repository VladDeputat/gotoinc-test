"use client";

import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "@/redux/hooks";
import { crateRequest } from "@/redux/operations";
import { useParams } from "next/navigation";

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

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(crateRequest(formData));
    setFormData(initialState);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h1 style={{ fontSize: "40px" }}>
        {isOrderForm ? "Create Order Request" : "Create Delivery Request"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="fromCity">From City*</label>
          <input
            type="text"
            className="form-control"
            id="fromCity"
            name="fromCity"
            value={formData.fromCity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="toCity">To City*</label>
          <input
            type="text"
            className="form-control"
            id="toCity"
            name="toCity"
            value={formData.toCity}
            onChange={handleChange}
            required
          />
        </div>
        {isOrderForm && (
          <div className="mb-1">
            <label htmlFor="parcelType">Parcel Type</label>
            <select
              className="form-select"
              id="parcelType"
              name="parcelType"
              value={formData.parcelType}
              onChange={handleChange}
            >
              <option value="">Select Parcel Type</option>
              <option value="gadgets">Gadgets</option>
              <option value="drinks">Drinks</option>
              <option value="clothes">Clothes</option>
              <option value="medicines">Medicines</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}
        <div className="mb-1 d-flex flex-column">
          <label htmlFor="dispatchDate">Dispatch Date</label>
          <ReactDatePicker
            className="form-control ps-5"
            id="dispatchDate"
            name="dispatchDate"
            dateFormat="dd.MM.yyyy"
            minDate={new Date()}
            showIcon
            toggleCalendarOnIconClick
            selected={formData.dispatchDate}
            onChange={(value) =>
              setFormData({
                ...formData,
                dispatchDate: value,
              })
            }
            locale="en"
            // customInput={<CustomInput />}
          />
        </div>
        {isOrderForm && (
          <div>
            <label htmlFor="parcelDescription">Parcel Description</label>
            <textarea
              className="form-control"
              id="parcelDescription"
              name="parcelDescription"
              value={formData.parcelDescription}
              onChange={handleChange}
              rows="2"
            ></textarea>
          </div>
        )}
        <p className="mb-3">* - required field</p>
        <button type="submit" className="btn btn-primary float-end btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
