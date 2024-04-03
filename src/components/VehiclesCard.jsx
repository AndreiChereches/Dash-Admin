/* eslint-disable react/prop-types */
import "../css/Tables.css";

function VehiclesCard(props) {
  return (
    <>
      <div className="vehicles-card">
        <div>{props.imei}</div>
        <div>1</div>
        <div>{props.battery}%</div>
        <div>{props.battery}%</div>
        <div>Radisson</div>
        <div>12</div>
        <div>{props.online}</div>
      </div>
    </>
  );
}

export default VehiclesCard;
