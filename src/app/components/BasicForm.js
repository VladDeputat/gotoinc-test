"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BasicForm = ({ isOrderForm, handleSubmit, initialStateWithData }) => {
  const { userId } = useParams();

  const initialState = initialStateWithData || {
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

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit" className="btn btn-primary float-end">
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
