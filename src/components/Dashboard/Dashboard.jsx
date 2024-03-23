/* eslint-disable react/prop-types */
import DashboardRidesTable from "./DashboardRidesTable.jsx";
import DashboardVehiclesTable from "./DashboardVehiclesTable.jsx";
import DashboardOpenReportsTable from "./DashboardOpenReportsTable.jsx";
import DashboardLatestFeedbackTable from "./DashboardLatestFeedbackTable.jsx";
function Dashboard(props) {
  return (
    <>
      <div className="dashboard-grid">
        <DashboardRidesTable />
        <DashboardVehiclesTable />
        <DashboardLatestFeedbackTable secondaryColor={props.secondaryColor} />
        <DashboardOpenReportsTable secondaryColor={props.secondaryColor} />
      </div>
    </>
  );
}

export default Dashboard;
