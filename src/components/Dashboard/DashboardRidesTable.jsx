import ReportBlueSVG from "../../assets/svg/ReportBlueSVG.jsx";
function DashboardRidesTable() {
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
