import { useState } from "react";
import "./css/Admin.css";
import Nav from "./Nav.jsx";
import Dashboard from "./Dashboard.jsx";
import Rides from "./Rides.jsx";
import Vehicles from "./Vehicles.jsx";
import Analytics from "./Analytics.jsx";

function App() {
  const [table, setTable] = useState("Dashboard");
  const callThis = (value) => {
    setTable(value);
  };
  return (
    <>
      <div className="flex">
        <Nav callback={callThis} />
        <div className="flex column width100">
          <h2 className="title">{table}</h2>
          <div className="table">
            {table === "Dashboard" ? <Dashboard /> : null}
            {table === "Rides" ? <Rides /> : null}
            {table === "Vehicles" ? <Vehicles /> : null}
            {table === "Analytics" ? <Analytics /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
