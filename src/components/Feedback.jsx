/* eslint-disable react/prop-types */
import "../css/Tables.css";
import { BIKES } from "../constants/constants";
import FeedbackCard from "./FeedbackCard";

function Feedback(props) {
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
          <div>Stars</div>
          <div>Distance(Km)</div>
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
              <FeedbackCard key={index} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Feedback;
