/* eslint-disable react/prop-types */
import "../css/Tables.css";
import { useEffect, useState } from "react";
import axios from "axios";
import FeedbackCard from "./FeedbackCard";

function Feedback(props) {
  const [bikes, setBikes] = useState([""]);
  useEffect(() => {
    axios
      .get("https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/")
      .then((res) => {
        setBikes(res.data);
        // console.log(res.data);
        // res.data.map((item) => {
        //   item.feedbacks === null ? null : console.log(item.feedbacks);
        // });
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://dash-backend-372ad5525a1d.herokuapp.com/api/metrics/?start=2024-3-1&end=2024-3-2"
      )
      .then((res) => {
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
          <div>Ride ID</div>
          <div>From</div>
          <div>Messaage</div>
          <div>Vehicle No.</div>
          <div>Distance(Km)</div>
          <div>Duration(Min)</div>
          <div>Rating</div>
          <div>Report</div>
        </div>
        {/* {bikes.map((item, index) => (
          <>
            {item.feedbacks === "" ? null : (
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
            )}
          </>
        ))} */}
        {/* {bikes.map((item) => {
          item.feedbacks.map((feedback) => {
            feedback === "" ? null : null;
          });
        })} */}
      </div>
    </>
  );
}

export default Feedback;
