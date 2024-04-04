/* eslint-disable react/prop-types */

import { useState } from "react";

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
    setResultImei("New IMEI: " + valueImei);
    setResultHotel("New Hotel: " + valueHotel);
    setResultVehicleNo("New VehicleNo: " + valueVehicleNo);
    setResultStatus("New Status: " + valueStatus);
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
  return (
    <>
      <div className="flex column width100 vehicles-flex">
        <div
          className="vehicles-top"
          style={{
            backgroundColor: `rgba(${props.secondaryColor},0.5)`,
            borderRadius: "4px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex col">
              <label>Imei</label>
              <input type="text" value={valueImei} onInput={handleChangeImei} />
            </div>
            <div className="flex col">
              <label>Vehicle No.</label>
              <input
                type="text"
                value={valueVehicleNo}
                onInput={handleChangeVehicleNo}
              />
            </div>
            <div className="flex col">
              <label>Hotel</label>
              <input
                type="text"
                value={valueHotel}
                onInput={handleChangeHotel}
              />
            </div>
            <div className="flex col">
              <label>Status</label>
              <input
                type="text"
                value={valueStatus}
                onInput={handleChangeStatus}
              />
            </div>
            <div className="flex col">
              <label>Qr</label>
              <input type="text" />
            </div>
            <button style={{ cursor: "pointer" }} type="submit">
              SUBMIT
            </button>
          </form>
          <h4>
            {resultImei};{resultVehicleNo};{resultHotel};{resultStatus}
          </h4>
        </div>
      </div>
    </>
  );
}

export default EditPage;
