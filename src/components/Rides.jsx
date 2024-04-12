/* eslint-disable react/prop-types */
import "../css/Tables.css";
import RidesCard from "./RidesCard.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

function Rides(props) {
  const [rides, setRides] = useState([""]);
  useEffect(() => {
    axios
      .get("https://dash-backend-372ad5525a1d.herokuapp.com/api/trip/")
      .then((res) => {
        setRides(res.data);
        console.log(res.data);
      });
  }, []);
  // useEffect(() => {
  //   axios.post("https://dash-backend-372ad5525a1d.herokuapp.com/api/trip/", {
  //     client: "hotelm",
  //     bike: "BIKENOU1",
  //     start_point: {
  //       lat: 1,
  //       lng: 2,
  //     },
  //   });
  // }, []);
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
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
          <div>Duration(Min)</div>
          <div>Rating</div>
          <div>Report</div>
        </div>
        {rides.map((item, index) => (
          <>
            <div
              style={{
                borderBottom: `1px solid rgba(${props.secondaryColor})`,
              }}
            >
              <RidesCard
                key={index}
                client={item.client}
                bike={item.bike}
                distanceTraveled={item.distance_traveled}
                duration={item.duration}
                endPoint={item.end_point}
                feedback={item.feedback}
                id={item.id}
                image={item.image}
                rating={item.rating}
                startPoint={item.start_point}
                timestamp={formatDate(item.timestamp)}
                userRoom={item.user_room}
              />
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
