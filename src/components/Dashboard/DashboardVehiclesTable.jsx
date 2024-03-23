import CheckmarkSVG from "../../assets/svg/CheckmarkSVG.jsx";
import InUseSVG from "../../assets/svg/InUseSVG.jsx";
import DischargedSVG from "../../assets/svg/DischargedSVG.jsx";
import MaintenanceSVG from "../../assets/svg/MaintenanceSVG.jsx";
import StorageSVG from "../../assets/svg/StorageSVG.jsx";
import StolenSVG from "../../assets/svg/StolenSVG.jsx";
import BikeBlueSVG from "../../assets/svg/BikeBlueSVG.jsx";
function DashboardVehiclesTable() {
  return (
    <>
      <div className="width100">
        <div className="dashboard-stats-grid">
          <div className="flex dashboard-stats-grid-vehicles-title">
            <BikeBlueSVG />
            <div className="dashboard-stats-grid-vehicles-title">Vehicles</div>
          </div>
          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <CheckmarkSVG />
              <div>Available</div>
            </div>
            <h3 className="number">12</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <InUseSVG />
              <div>In use</div>
            </div>
            <h3 className="number">0</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <DischargedSVG />
              <div>Discharged</div>
            </div>
            <h3 className="number">3</h3>
          </div>

          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <MaintenanceSVG />
              <div>Maintanance</div>
            </div>
            <h3 className="number">3</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <StorageSVG />
              <div>Storage</div>
            </div>
            <h3 className="number">1</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <StolenSVG />
              <div>Stolen</div>
            </div>
            <h3 className="number">3</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardVehiclesTable;
