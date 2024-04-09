/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EditPage(props) {
  const [valueImei, setValueImei] = useState("");
  const [resultImei, setResultImei] = useState("");
  const [valueHotel, setValueHotel] = useState("");
  const [resultHotel, setResultHotel] = useState("");
  const [valueVehicleNo, setValueVehicleNo] = useState("");
  const [resultVehicleNo, setResultVehicleNo] = useState("");
  const [valueStatus, setValueStatus] = useState("");
  const [resultStatus, setResultStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setResultImei(valueImei);
    setResultHotel(valueHotel);
    setResultVehicleNo(valueVehicleNo);
    setResultStatus(valueStatus);
  };
  const handleChangeImei = (e) => {
    setValueImei(e.target.value);
    setResultImei("");
  };
  const handleChangeVehicleNo = (e) => {
    setValueVehicleNo(e.target.value);
    setResultVehicleNo("");
  };
  const handleChangeHotel = (e) => {
    setValueHotel(e.target.value);
    setResultHotel("");
  };
  const handleChangeStatus = (e) => {
    setValueStatus(e.target.value);
    setResultStatus("");
  };
  const fetchData = async () => {
    const jsonData = JSON.stringify({
      bike_number: "2201111",
      status: "online",
    });
    const res = await axios.post(
      `https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/`,
      jsonData
    );
    console.log(res.error.response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    axios.post("https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/"),
      {
        bike_number: resultVehicleNo,
        imei: resultImei,
        client: resultHotel,
        status: resultStatus,
      };
  }, [resultStatus, resultImei, resultVehicleNo, resultHotel]);
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
        {resultStatus === "" ? null : (
          <h4 style={{ position: "absolute", color: "#008000" }}>Success</h4>
        )}
      </form>
    </>
  );
}

export default EditPage;
