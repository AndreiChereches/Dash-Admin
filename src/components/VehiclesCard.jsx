/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "../css/Tables.css";

function VehiclesCard(props) {
  return (
    <>
      <div className="vehicles-card">
        <div>{props.imei}</div>
        <div>{props.bikeNumber}</div>
        <div>{props.battery}%</div>
        <div>{props.iotBattery}%</div>
        <div>{props.client}</div>
        <div>
          <Link to="https://www.google.com/maps/@46.7773942,23.6313877,18z?entry=ttu">
            loc
          </Link>
        </div>
        <div>totalRides</div>
        <div>{props.status}</div>
        <div style={{ height: "50px", paddingBlock: "10px" }}>
          <img
            style={{ height: "50px", aspectRatio: "1", alignSelf: "center" }}
            src={props.qr}
            alt=""
          />
        </div>
        <div>
          <Link
            onClick={() => props.callbackEdit(true)}
            state={{ vehicleNo: `${props.bikeNumber}` }}
          >
            edit
          </Link>
        </div>
      </div>
    </>
  );
}

export default VehiclesCard;
