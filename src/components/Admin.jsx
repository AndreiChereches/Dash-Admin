import { useState, useEffect } from "react";
import "../css/Admin.css";
import Nav from "./Nav.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Rides from "./Rides.jsx";
import Vehicles from "./Vehicles.jsx";
import Feedback from "./Feedback.jsx";
import Settings from "./Settings.jsx";
import EditPage from "./EditPage.jsx";
import logo from "../assets/logo.png";

function Admin() {
  const [editing, setEditing] = useState("false");
  const [table, setTable] = useState("Dashboard");
  const [secondaryColor, setSecondaryColor] = useState("204, 231, 255");
  useEffect(() => {
    setSecondaryColor("204, 231, 255");
  }, []);
  useEffect(() => {
    editing === true ? setTable("Editing") : null;
  }, [editing]);

  const activeTable = (value) => {
    setTable(value);
  };
  const Editing = (value) => {
    setEditing(value);
    value === false ? setTable("Vehicles") : null;
  };
  return (
    <>
      <div
        className="flex title-flex"
        style={{
          backgroundColor: `rgba(${secondaryColor},0.5)`,
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
            {table === "Vehicles" ? (
              <Vehicles
                secondaryColor={secondaryColor}
                callbackIsEditing={Editing}
              />
            ) : null}
            {table === "Rides" ? (
              <Rides secondaryColor={secondaryColor} />
            ) : null}
            {table === "Feedback" ? (
              <Feedback secondaryColor={secondaryColor} />
            ) : null}
            {table === "Settings" ? (
              <Settings secondaryColor={secondaryColor} />
            ) : null}
            {table === "Editing" ? <EditPage Editing={Editing} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
