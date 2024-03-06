import "../css/Tables.css";

function Dashboard() {
  return (
    <>
      <div className="dashboard-grid">
        <div className="width100">
          <div className="dashboard-stats-grid">
            <h4 className="dashboard-stats-grid-title">rides</h4>
            <div className="dashboard-stats-grid-card">
              <h3>56</h3>
              <div>today</div>
            </div>
            <div className="dashboard-stats-grid-card">
              <h3>117</h3>
              <div>yesterday</div>
            </div>
            <div className="dashboard-stats-grid-card">
              <h3>126</h3>
              <div>daily average</div>
            </div>
          </div>
        </div>
        <div className="width100">
          <div className="dashboard-stats-grid">
            <h4 className="dashboard-stats-grid-title">reports</h4>
            <div className="dashboard-stats-grid-card">
              <h3>0</h3>
              <div>today</div>
            </div>
            <div className="dashboard-stats-grid-card">
              <h3>1</h3>
              <div>yesterday</div>
            </div>
            <div className="dashboard-stats-grid-card">
              <h3>3</h3>
              <div>total</div>
            </div>
          </div>
        </div>
        <div className="width100">
          <div className="dashboard-stats-grid-vehicles">
            <h4 className="dashboard-stats-grid-vehicles-title">vehicles</h4>
            <div className="dashboard-stats-grid-card">
              <h3>12</h3>
              <div>Available</div>
            </div>
            <div className="dashboard-stats-grid-card">
              <h3>0</h3>
              <div>In use</div>
            </div>
            <div className="dashboard-stats-grid-card">
              <h3>3</h3>
              <div>Discharged</div>
            </div>
            <div className="dashboard-stats-grid-card">
              <h3>3</h3>
              <div>Charging</div>
            </div>
            <div className="dashboard-stats-grid-card">
              <h3>3</h3>
              <div>Maintanance</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
