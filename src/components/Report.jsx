/* eslint-disable react/prop-types */
import "../css/Tables.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ReportCard from "./ReportCard";

function Report(props) {
  const [bikes, setBikes] = useState([""]);
  let reports = [];
  useEffect(() => {
    axios
      .get("https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/")
      .then((res) => {
        setBikes(res.data);
        console.log(res.data);
        res.data.map((item) => {
          item.reports.length === 0 ? null : console.log(item.reports);
          item.reports.length === 0
            ? null
            : reports.push({
                category: item.reports.category,
                details: item.reports.details,
              });
        });
      });
  }, []);

  setTimeout(() => {
    console.log(reports.category + "reports");
  }, 2000);
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
      </div>
      {bikes.map((item, index) => {
        item.reports?.map((report) => {
          return (
            <>
              <div
                style={{
                  borderBottom: `1px solid rgba(${props.secondaryColor})`,
                }}
              >
                {console.log(report.category)}
                {report.category}
              </div>
              ;<div>bbb</div>;
            </>
          );
        });
      })}
      <div>test</div>
    </>
  );
}

export default Report;
