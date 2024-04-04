/* eslint-disable react/prop-types */
import { BIKES } from "../constants/constants";
import "../css/Tables.css";
import RidesCard from "./RidesCard.jsx";


function Rides(props) {
  return (
    <>
      <div className="flex column width100">
        <div
          className="rides-top"
          style={{
            backgroundColor: `rgba(${props.secondaryColor},0.5)`,
            borderRadius: "4px",
          }}
        >
          <div>ID</div>
          <div>Start time</div>
          <div>End time</div>
          <div>Vehicle No.</div>
          <div>Room No.</div>
          <div>Distance(Km)</div>
          <div>Route</div>
          <div>Duration(Min)</div>
          <div>Rating</div>
          <div>Report</div>
        </div>
        {BIKES.map((item, index) => (
          <>
            <div
              style={{
                borderBottom: `1px solid rgba(${props.secondaryColor})`,
              }}
            >
              <RidesCard key={index} />
            </div>
          </>
        ))}
        {/* <div>
          dropdown la ruta cu iconita de harta(google maps)
        </div> */}
      </div>
    
    </>
  );
}

export default Rides;
