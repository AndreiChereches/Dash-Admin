/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Tables.css";

function VehiclesCard(props) {
  const [imei, setImei] = useState(props.imei);
  const [vehicleNo, setVehicleNo] = useState("4");
  const [battery, setbattery] = useState(props.battery);
  const [iotbattery, setIotBattery] = useState("68");
  const [hotel, setHotel] = useState("Radisson");
  const [totalRides, setTotalRides] = useState("12");
  const [online, setOnline] = useState("Off");
  const [qr, setQr] = useState(props.qr);
  const [edit, setEdit] = useState(false);
  const locationClick = () => {
    console.log("location clicked!");
  };
  const editClick = () => {
    setHotel("GH Napoca");
    edit === false ? setEdit(true) : setEdit(false);
  };
  return (
    <>
      <div className="vehicles-card">
        <div>{imei}</div>
        <div>{vehicleNo}</div>
        <div>{battery}%</div>
        <div>{iotbattery}%</div>
        <div>{hotel}</div>
        <div>
          <button onClick={locationClick}>loc</button>
        </div>
        <div>{totalRides}</div>
        <div>{online}</div>
        <div style={{ height: "50px", paddingBlock: "10px" }}>
          <img
            style={{ height: "50px", aspectRatio: "1", alignSelf: "center" }}
            src={qr}
            alt=""
          />
        </div>
        <div>
          <Link to="/edit-bike" onClick={editClick}>
            edit
          </Link>
        </div>
      </div>
    </>
  );
}

export default VehiclesCard;
