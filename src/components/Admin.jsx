import { useState } from "react";
import "../css/Admin.css";
import Nav from "./Nav.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Rides from "./Rides.jsx";
import Favorites from "./Favorites.jsx";
import Settings from "./Settings.jsx";
import Report from "./Report.jsx";
import logo from "../assets/logo.png";

function App() {
  const [table, setTable] = useState("Dashboard");
  const [secondaryColor, setSecondaryColor] = useState("204, 231, 255");
  const activeTable = (value) => {
    setTable(value);
  };
  return (
    <>
      <div
        className="flex title-flex"
        style={{
          backgroundColor: `rgba(${(secondaryColor)},0.5)`,
        }}
      >
        <a href="https://www.ridedash.eu">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <h2 className="title">{table}</h2>
      </div>
      <div className="flex">
        <Nav
          callback={activeTable}
          active={table}
          secondaryColor={secondaryColor}
        />
        <div className="flex column width100">
          <div className="table">
            {table === "Dashboard" ? (
              <Dashboard secondaryColor={secondaryColor} />
            ) : null}
            {table === "Rides" ? <Rides /> : null}
            {table === "Report" ? <Report /> : null}
            {table === "Favorites" ? <Favorites /> : null}
            {table === "Settings" ? <Settings /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
