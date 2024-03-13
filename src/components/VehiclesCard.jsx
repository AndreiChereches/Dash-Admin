import "../css/Tables.css";

function VehiclesCard(props) {
  return (
    <>
      <div className="vehicles-card">
        <div>056</div>
        <div>1</div>
        <div>{props.battery}%</div>
        <div>12</div>
        <div>Active</div>
      </div>
    </>
  );
}

export default VehiclesCard;
