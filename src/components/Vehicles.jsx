import "../css/Tables.css";
import VehiclesCard from "./VehiclesCard";
import axios from "axios";
import { useState,useEffect } from "react";

function Vehicles() {
  const [bikeData , setBikeData] = useState("");
  const [bikeLat, setBikeLat] = useState(0);
  const [bikeLong, setBikeLong] = useState(0);
  const [bikeBattery, setBikeBattery] = useState(0);
  useEffect(() => {
    
    axios.get("https://iot-api.okai.co/shareos-device/scooter/query/status?userKey=jzah5zxlm7mxmsl1wgbxyn2dzb6akluq&timestamp=000&sign=000&imei=868963047087986")
    .then((res) => {
        setBikeData(res.data.data);
        // console.log(bikeData);
        // console.log(res.data.data.batteryPercent);
        setBikeBattery(res.data.data.batteryPercent);
        console.log("battery: ",bikeBattery)
    })
  })
  useEffect(() => {
    
    axios.get("https://iot-api.okai.co/shareos-device/scooter/query/location?userKey=jzah5zxlm7mxmsl1wgbxyn2dzb6akluq&timestamp=000&sign=000&imei=868963047087986")
    .then((res) => {
      setBikeLat(res.data.data.latitude);
      setBikeLong(res.data.data.longitude);   
      console.log("lat: ", bikeLat);
      console.log("long: ", bikeLong);
    })
  })
  return (
    
    <>
      <div className="flex column width100 vehicles-flex">
        <div className="vehicles-top">
          <div>ID</div>
          <div>Vehicle No.</div>
          <div>Battery</div>
          <div>Total Rides</div>
          <div>Status</div>
        </div>
        <VehiclesCard battery={bikeBattery}  />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
      </div>
    </>
  );
}

export default Vehicles;
