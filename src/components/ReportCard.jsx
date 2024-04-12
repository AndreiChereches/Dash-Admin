/* eslint-disable react/prop-types */
import "../css/Tables.css";

function ReportCard(props) {
  return (
    <>
      <div className="feedback-card">
        <div>{props.index}</div>
        <div>
          {props.client != null ? (
            <div>{props.client}</div>
          ) : (
            <div style={{ color: "#aaa", fontStyle: "italic" }}>unknown</div>
          )}
        </div>
        <div>
          {props.feedbacks != "" ? (
            <div>{props.feedbacks}</div>
          ) : (
            <div style={{ color: "#aaa", fontStyle: "italic" }}>no message</div>
          )}
        </div>
        <div>{props.bikeNumber}</div>
        <div>15</div>
        <div>45</div>
        <div>5/5</div>
        <div>none</div>
      </div>
    </>
  );
}

export default ReportCard;
