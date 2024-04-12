/* eslint-disable react/prop-types */

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EditPage(props) {
  const [valueImei, setValueImei] = useState("");
  const [valueHotel, setValueHotel] = useState("");
  const [valueVehicleNo, setValueVehicleNo] = useState("");
  const [valueStatus, setValueStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/", {
      bike_number: valueVehicleNo,
      imei: valueImei,
      client: valueHotel,
      status: valueStatus,
    });
  };
  const handleChangeImei = (e) => {
    setValueImei(e.target.value);
  };
  const handleChangeVehicleNo = (e) => {
    setValueVehicleNo(e.target.value);
  };
  const handleChangeHotel = (e) => {
    setValueHotel(e.target.value);
  };
  const handleChangeStatus = (e) => {
    setValueStatus(e.target.value);
  };

  return (
    <>
      <div className="flex gap-md">
        <Link
          onClick={() => props.AddingABike(false)}
          className="edit-back-btn"
          to="/"
        >
          &larr; Back
        </Link>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="editform-flex">
          <div className="flex col">
            <label className="edit-form-label">Imei</label>
            <input
              className="edit-form-input"
              type="text"
              value={valueImei}
              onInput={handleChangeImei}
              required
            />
          </div>
          <div className="flex col">
            <label className="edit-form-label">Vehicle No.</label>
            <input
              className="edit-form-input"
              type="text"
              value={valueVehicleNo}
              onInput={handleChangeVehicleNo}
              required
            />
          </div>
          <div className="flex col">
            <label className="edit-form-label">Hotel</label>
            <input
              className="edit-form-input"
              type="text"
              value={valueHotel}
              onInput={handleChangeHotel}
              required
            />
          </div>
          <div className="flex col">
            <label className="edit-form-label">Status</label>
            <input
              className="edit-form-input"
              type="text"
              value={valueStatus}
              onInput={handleChangeStatus}
              required
            />
          </div>
          {/* <div className="flex col">
            <label className="edit-form-label">Qr</label>
            <input type="file" />
          </div> */}
        </div>
        <button className="edit-submit-btn" type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default EditPage;
