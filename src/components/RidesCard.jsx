/* eslint-disable react/prop-types */
import "../css/Tables.css";

function RidesCard(props) {
  return (
    <>
      <div className="rides-card">
        <div>{props.id}</div>
        <div>{props.timestamp}</div>
        <div>{props.timestamp}</div>
        <div>{props.bike}</div>
        <div>{props.userRoom}</div>
        <div>{props.distanceTraveled}</div>
        <div>{props.duration}</div>
        <div>{props.rating}/5</div>
        <div>{props.report}</div>
      </div>
    </>
  );
}

export default RidesCard;
