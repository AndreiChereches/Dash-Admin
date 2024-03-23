/* eslint-disable react/prop-types */
import LatestFeedbackSVG from "../../assets/svg/LatestFeedbackSVG.jsx";
import FeedbackFullStar from "../../assets/svg/FeedbackFullStar.jsx";
import FeedbackEmptyStar from "../../assets/svg/FeedbackEmptyStar.jsx";

function DashboardLatestFeedbackTable(props) {
  const feedback = [
    {
      id: 1,
      Rating: 1,
      Feedback: "The ride was okay, nothing too good or bad.",
      BikeID: "OKRB01",
      RideID: "129",
    },
    { id: 2, Rating: 2, Feedback: "", BikeID: "OKRB12", RideID: "125" },
    {
      id: 3,
      Rating: 3,
      Feedback:
        "The bike lights were not working and I could barely see where I was going. Also, the front wheel seemed unstable.",
      BikeID: "OKRB09",
      RideID: "109",
    },
    {
      id: 4,
      Rating: 4,
      Feedback: "Everything worked as expected!",
      BikeID: "OKRB34",
      RideID: "096",
    },
    { id: 5, Rating: 5, Feedback: "", BikeID: "OKRB05", RideID: "092" },
  ];
  return (
    <>
      <div className="width100">
        <div className="latest-feedback-flex">
          <div className="flex gap-small">
            <LatestFeedbackSVG />

            <div className=" latest-feedback-title">Latest Feedback</div>
          </div>
          <div className="feedback-table">
            <div
              className="feedback-table-header"
              style={{
                backgroundColor: `rgba(${props.secondaryColor},0.5)`,
                borderRadius: "4px",
              }}
            >
              <div>Rating</div>
              <div>Feedback</div>
              <div>Bike ID</div>
              <div>Ride ID</div>
            </div>
            <div>
              {feedback.map((feedback, index) => (
                <>
                  <div
                    className="feedback"
                    style={{
                      borderBottom: `1px solid rgba(${props.secondaryColor})`,
                    }}
                  >
                    <div key={index}>
                      {feedback.Rating === 1 ? (
                        <>
                          <div className="flex">
                            <FeedbackFullStar />
                            <FeedbackEmptyStar />
                            <FeedbackEmptyStar />
                            <FeedbackEmptyStar />
                            <FeedbackEmptyStar />
                          </div>
                        </>
                      ) : null}
                      {feedback.Rating === 2 ? (
                        <>
                          <div className="flex">
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                            <FeedbackEmptyStar />
                            <FeedbackEmptyStar />
                            <FeedbackEmptyStar />
                          </div>
                        </>
                      ) : null}
                      {feedback.Rating === 3 ? (
                        <>
                          <div className="flex">
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                            <FeedbackEmptyStar />
                            <FeedbackEmptyStar />
                          </div>
                        </>
                      ) : null}
                      {feedback.Rating === 4 ? (
                        <>
                          <div className="flex">
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                            <FeedbackEmptyStar />
                          </div>
                        </>
                      ) : null}
                      {feedback.Rating === 5 ? (
                        <>
                          <div className="flex">
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                            <FeedbackFullStar />
                          </div>
                        </>
                      ) : null}
                    </div>
                    <div key={index}>{feedback.Feedback}</div>
                    <div key={index}>{feedback.BikeID}</div>
                    <div key={index}>{feedback.RideID}</div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLatestFeedbackTable;
