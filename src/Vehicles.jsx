import "./css/Tables.css";
import VehiclesCard from "./VehiclesCard";

function Vehicles() {
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
        <VehiclesCard />
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
