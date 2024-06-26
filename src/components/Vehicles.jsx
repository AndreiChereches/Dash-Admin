/* eslint-disable react/prop-types */
import { USER_KEY, BIKE_IMEI } from "../constants/constants";
import "../css/Tables.css";
import VehiclesCard from "./VehiclesCard";
import axios from "axios";
import { useState, useEffect } from "react";

function Vehicles(props) {
  const [editing, setEditing] = useState("false");
  const [bikeData, setBikeData] = useState("");
  const [bikes, setBikes] = useState([""]);
  const IsEditing = (value) => {
    setEditing(value);
    props.callbackIsEditing(editing);
    setTimeout(() => {
      console.log(editing);
    }, 500); //test
  };
  useEffect(() => {
    axios
      .get(
        `https://iot-api.okai.co/shareos-device/scooter/query/status?userKey=${USER_KEY}&timestamp=000&sign=000&imei=${BIKE_IMEI}`
      )
      .then((res) => {
        setBikeData(res.data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/")
      .then((res) => {
        setBikes(res.data);
      });
  }, []);

  return (
    <>
      <button
        className="add-vehicle-btn"
        style={{
          backgroundColor: `rgba(${props.primaryColor})`,
          borderRadius: "4px",
        }}
        onClick={() => {
          props.AddingABike(true);
        }}
      >
        Add a new bike
      </button>
      <div className="flex column width100 vehicles-flex">
        <div
          className="vehicles-top"
          style={{
            backgroundColor: `rgba(${props.secondaryColor},0.5)`,
            borderRadius: "4px",
          }}
        >
          <div>Imei</div>
          <div>Vehicle No.</div>
          <div>Battery</div>
          <div>IOT Battery</div>
          <div>Hotel</div>
          <div>Location</div>
          <div>Total Rides</div>
          <div>Online</div>
          <div>Qr</div>
          <div>Edit</div>
        </div>
        {bikes.map((item, index) => (
          <>
            <div
              style={{
                borderBottom: `1px solid rgba(${props.secondaryColor})`,
              }}
            >
              <VehiclesCard
                key={index}
                index={index}
                bikeNumber={item.bike_number}
                imei={item.imei}
                battery={item.own_battery_percentage}
                iotBattery={item.iot_battery_percentage}
                client={item.client}
                status={item.status}
                online={bikeData.online}
                qr={item.qr_code}
                secondaryColor={props.secondaryColor}
                callbackEdit={IsEditing}
                total_trips={item.total_trips}
              />
            </div>
          </>
        ))}
        {/* <div>
          report(cu popup unde se poate scrola si se vad toate reporturile)
        
        </div> */}
      </div>
    </>
  );
}

export default Vehicles;
