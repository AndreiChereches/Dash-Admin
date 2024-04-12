import ReportBlueSVG from "../../assets/svg/ReportBlueSVG.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function DashboardRidesTable() {
  const [rides, setRides] = useState([""]);
  useEffect(() => {
    axios
      .get("https://dash-backend-372ad5525a1d.herokuapp.com/api/trip/")
      .then((res) => {
        setRides(res.data);
        console.log(res.data);
        // res.data.map((ride) => {
        //   formatDate(ride.timestamp) ===
        // });
      });
  }, []);
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  function Today() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  console.log(Today) + "today";
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://dash-backend-372ad5525a1d.herokuapp.com/api/metrics?start=2024-4-1&end=2024-4-10"
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       console.log("Success!");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });

  //   console.log("OK");
  // }, []);
  return (
    <>
      <div className="width100">
        <div className="dashboard-stats-grid">
          <div className="flex dashboard-stats-grid-title">
            <ReportBlueSVG />
            <h4 className="dashboard-stats-grid-title">Rides</h4>
          </div>
          <div className="dashboard-stats-grid-card">
            <div>Today</div>
            <h3 className="number">56</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div>Yesterday</div>
            <h3 className="number">48</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div>Last 7d</div>
            <h3 className="number">123</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div>Daily average</div>
            <h3 className="number">52</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div>Last 30d</div>
            <h3 className="number">512</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardRidesTable;
