/* eslint-disable react/prop-types */
import OpenReportsSVG from "../../assets/svg/OpenReportsSVG.jsx";

function DashboardOpenReportsTable(props) {
  const reports = [
    {
      id: 1,
      Category: "Tires",
      Details: "The ride was okay, nothing too good or bad.",
      BikeID: "OKRB01",
    },
    {
      id: 2,
      Category: "Lights",
      Details: "",
      BikeID: "OKRB12",
    },
    {
      id: 3,
      Category: "Tires",
      Details:
        "The bike lights were not working and I could barely see where I was going. Also, the front wheel seemed unstable.",
      BikeID: "OKRB09",
    },
    {
      id: 4,
      Category: "Brakes",
      Details: "Everything worked as expected!",
      BikeID: "OKRB34",
    },
    {
      id: 5,
      Category: "Acceleration",
      Details: "",
      BikeID: "OKRB05",
    },
  ];
  return (
    <>
      <div className="width100">
        <div className="">
          <div className="open-reports-flex">
            <div>
              <div className="flex gap-small">
                <OpenReportsSVG />
                <div className="open-reports-title">Open Reports</div>
              </div>
            </div>
            <div className="feedback-table">
              <div
                className="feedback-table-header"
                style={{
                  backgroundColor: `rgba(${props.secondaryColor},0.5)`,
                  borderRadius: "4px",
                }}
              >
                <div>Category</div>
                <div>Details</div>
                <div>Bike ID</div>
              </div>
              <div>
                {reports.map((report, index) => (
                  <>
                    <div
                      className="feedback"
                      key={index}
                      style={{
                        borderBottom: `1px solid rgba(${props.secondaryColor})`,
                      }}
                    >
                      <div>{report.Category}</div>
                      <div>{report.Details}</div>
                      <div>{report.BikeID}</div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardOpenReportsTable;
