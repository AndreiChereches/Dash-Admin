/* eslint-disable react/prop-types */
import { USER_KEY, BIKE_IMEI, BIKES } from "../constants/constants";
import "../css/Tables.css";
import VehiclesCard from "./VehiclesCard";
import axios from "axios";
import { useState, useEffect } from "react";

function Vehicles(props) {
  const [editing, setEditing] = useState("false");
  const [bikeData, setBikeData] = useState("");
  const [bikes, setBikes] = useState([""]);
  const [bikeLat, setBikeLat] = useState(0);
  const [bikeLong, setBikeLong] = useState(0);
  const [bikeBattery, setBikeBattery] = useState(0);
  const IsEditing = (value) => {
    setEditing(value);
    props.callbackIsEditing(editing);
  };
  useEffect(() => {
    axios
      .get(
        `https://iot-api.okai.co/shareos-device/scooter/query/status?userKey=${USER_KEY}&timestamp=000&sign=000&imei=${BIKE_IMEI}`
      )
      .then((res) => {
        setBikeData(res.data.data);
        // console.log(bikeData);
        setBikeBattery(res.data.data.batteryPercent);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://iot-api.okai.co/shareos-device/scooter/query/location?userKey=jzah5zxlm7mxmsl1wgbxyn2dzb6akluq&timestamp=000&sign=000&imei=868963047087986"
      )
      .then((res) => {
        setBikeLat(res.data.data.latitude);
        setBikeLong(res.data.data.longitude);
        // console.log("lat: ", bikeLat);
        // console.log("long: ", bikeLong);
      });
  }, []);

  const fetchData = async () => {
    const jsonData = JSON.stringify({ bike_number: "220", status: "online" });
    const res = await axios.post(
      "https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/",
      jsonData
    );
    console.log(res.error.response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    axios
      .get("https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/")
      .then((res) => {
        setBikes(res.data);
        console.log(res.data);
      });
  }, []);
  useEffect(() => {
    axios.put("https://dash-backend-372ad5525a1d.herokuapp.com/api/bike"),
      {
        bike_number: "231",
      };
  }, []);
  return (
    <>
      <button>Add vehicle</button>
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
