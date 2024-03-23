import { USER_KEY, BIKE_IMEI, BIKES } from "../constants/constants";
import "../css/Tables.css";
import VehiclesCard from "./VehiclesCard";
import axios from "axios";
import { useState, useEffect } from "react";

function Vehicles() {
  const [bikeData, setBikeData] = useState("");
  const [bikeLat, setBikeLat] = useState(0);
  const [bikeLong, setBikeLong] = useState(0);
  const [bikeBattery, setBikeBattery] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://iot-api.okai.co/shareos-device/scooter/query/status?userKey=${USER_KEY}&timestamp=000&sign=000&imei=${BIKE_IMEI}`
      )
      .then((res) => {
        setBikeData(res.data.data);
        console.log(bikeData);
        setBikeBattery(res.data.data.batteryPercent);
      });
  });
  useEffect(() => {
    axios
      .get(
        "https://iot-api.okai.co/shareos-device/scooter/query/location?userKey=jzah5zxlm7mxmsl1wgbxyn2dzb6akluq&timestamp=000&sign=000&imei=868963047087986"
      )
      .then((res) => {
        setBikeLat(res.data.data.latitude);
        setBikeLong(res.data.data.longitude);
        console.log("lat: ", bikeLat);
        console.log("long: ", bikeLong);
      });
  });
  return (
    <>
      <div className="flex column width100 vehicles-flex">
        <div className="vehicles-top">
          <div>Imei</div>
          <div>Vehicle No.</div>
          <div>Battery</div>
          <div>Total Rides</div>
          <div>Online</div>
        </div>
        {BIKES.map((item, index) => (
          <VehiclesCard
            key={index}
            imei={item.imei}
            battery={bikeBattery}
            online={bikeData.online}
          />
        ))}
        <div>
          report(cu popup unde se poate scrola si se vad toate reporturile)
          iconita cu loc. + qr(poza) + iot battery + client(la ce hotel ii) +
          iconita de edit la properties (imei etc), EDIT-UL DUCE PE O SCREEN NOU CU INPUT FIELD-URI SA ADAUGI/STERGI IMAGINI + STATUS + CLIENT + IMEI + QR
        </div>
      </div>
    </>
  );
}

export default Vehicles;
