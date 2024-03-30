"use client";

import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("en", enGB);

const RequestForm = ({ isOrderForm }) => {
  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    parcelType: "",
    dispatchDate: new Date(),
    parcelDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fromCity: "",
      toCity: "",
      parcelType: "",
      dispatchDate: "",
      parcelDescription: "",
    });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2>Request Creation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fromCity" className="form-label">
            From City*
          </label>
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
        <div className="mb-3">
          <label htmlFor="toCity" className="form-label">
            To City*
          </label>
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
        <div className="mb-3">
          <label htmlFor="parcelType" className="form-label">
            Parcel Type
          </label>
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
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="dispatchDate" className="form-label">
            Dispatch Date
          </label>
          <ReactDatePicker
            className="form-control"
            id="dispatchDate"
            name="dispatchDate"
            dateFormat="dd.MM.yyyy"
            showIcon
            toggleCalendarOnIconClick
            selected={formData.dispatchDate}
            onChange={handleChange}
            locale="en"
          />
        </div>
        <div>
          <label htmlFor="parcelDescription" className="form-label">
            Parcel Description
          </label>
          <textarea
            className="form-control"
            id="parcelDescription"
            name="parcelDescription"
            value={formData.parcelDescription}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <p className="mb-3">* - required field</p>
        <button type="submit" className="btn btn-primary float-end btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
