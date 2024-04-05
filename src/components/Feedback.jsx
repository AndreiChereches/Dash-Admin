/* eslint-disable react/prop-types */
import "../css/Tables.css";
import { useEffect, useState } from "react";
import axios from "axios";
import FeedbackCard from "./FeedbackCard";

function Feedback(props) {
  const [bikes, setBikes] = useState([""]);

  // copy from vehicles.jsx
  // must be moved to a higher component later
  const fetchData = async () => {
    const jsonData = JSON.stringify({ bike_number: "220", status: "online" });
    const res = await axios.post(
      "https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/",
      jsonData
    );
    console.log(res.error.response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    axios
      .get("https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/")
      .then((res) => {
        setBikes(res.data);
        console.log(res.data);
      });
  }, []);
  //
  //
  return (
    <>
      <div className="flex column width100">
        <div
          className="feedback-top"
          style={{
            backgroundColor: `rgba(${props.secondaryColor},0.5)`,
            borderRadius: "4px",
          }}
        >
          <div>ID</div>
          <div>From</div>
          <div>Messaage</div>
          <div>Vehicle No.</div>
          <div>Distance(Km)</div>
          <div>Duration(Min)</div>
          <div>Rating</div>
          <div>Report</div>
        </div>
        {bikes.map((item, index) => (
          <>
            <div
              style={{
                borderBottom: `1px solid rgba(${props.secondaryColor})`,
              }}
            >
              <FeedbackCard
                key={index}
                index={index + 1}
                client={item.client}
                feedbacks={item.feedbacks}
                bikeNumber={item.bike_number}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Feedback;
