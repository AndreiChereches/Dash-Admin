import CheckmarkSVG from "../../assets/svg/CheckmarkSVG.jsx";
import InUseSVG from "../../assets/svg/InUseSVG.jsx";
import DischargedSVG from "../../assets/svg/DischargedSVG.jsx";
import MaintenanceSVG from "../../assets/svg/MaintenanceSVG.jsx";
import StorageSVG from "../../assets/svg/StorageSVG.jsx";
import StolenSVG from "../../assets/svg/StolenSVG.jsx";
import BikeBlueSVG from "../../assets/svg/BikeBlueSVG.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function DashboardVehiclesTable() {
  const [inUse, setInUse] = useState(0);
  const [available, setAvailable] = useState(0);
  const [discharged, setDischarged] = useState(0);
  const [maintanance, setMaintanance] = useState(0);
  const [storage, setStorage] = useState(0);
  const [stolen, setStolen] = useState(0);
  useEffect(() => {
    axios
      .get("https://dash-backend-372ad5525a1d.herokuapp.com/api/bike/")
      .then((res) => {
        res.data.map((item) => {
          item.status === "available"
            ? setAvailable((available) => available + 1)
            : null;
          item.status === "discharged"
            ? setDischarged((discharged) => discharged + 1)
            : null;
          item.status === "in use" ? setInUse((inUse) => inUse + 1) : null;
          item.status === "maintanance"
            ? setMaintanance((maintanance) => maintanance + 1)
            : null;
          item.status === "storage"
            ? setStorage((storage) => storage + 1)
            : null;
          item.status === "stolen" ? setStolen((stolen) => stolen + 1) : null;
        });
      });
  }, []);

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
            <h3 className="number">{available}</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <InUseSVG />
              <div>In use</div>
            </div>
            <h3 className="number">{inUse}</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <DischargedSVG />
              <div>Discharged</div>
            </div>
            <h3 className="number">{discharged}</h3>
          </div>

          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <MaintenanceSVG />
              <div>Maintanance</div>
            </div>
            <h3 className="number">{maintanance}</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <StorageSVG />
              <div>Storage</div>
            </div>
            <h3 className="number">{storage}</h3>
          </div>
          <div className="dashboard-stats-grid-card">
            <div className="flex aling-items-center">
              <StolenSVG />
              <div>Stolen</div>
            </div>
            <h3 className="number">{stolen}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardVehiclesTable;
