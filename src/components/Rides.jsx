import "../css/Tables.css";
import RidesCard from "./RidesCard.jsx";

function Rides() {
  return (
    <>
      <div className="flex column width100">
        <div className="rides-top">
          <div>ID</div>
          <div>Start time</div>
          <div>End time</div>
          <div>Vehicle No.</div>
          <div>Room No.</div>
          <div>Distance(Km)</div>
          <div>Duration(Min)</div>
          <div>Rating</div>
          <div>Report</div>
        </div>
        <RidesCard />
        <RidesCard />
        <RidesCard />
        <RidesCard />
        <RidesCard />
        <RidesCard />
        <RidesCard />
        <div>
          adauga end time + dropdown la ruta cu iconita de harta(google maps) +
          room no. + feedback la rating
        </div>
      </div>
    </>
  );
}

export default Rides;
