import { useEffect } from "react";
import "../css/Tables.css";
import RidesCard from "./RidesCard.jsx";
import axios from "axios";
import { useState } from "react";

function Rides() {

  return (
    <>
      <div className="flex column width100 rides-flex">
        <div className="rides-top">
          <div>ID</div>
          <div>Start time</div>
          <div>Vehicle No.</div>
          <div>Distance(Km)</div>
          <div>Duration(Min)</div>
          <div>Rating</div>
          <div>Report</div>
        </div>
        <RidesCard/>
        <RidesCard />
        <RidesCard />
        <RidesCard />
        <RidesCard />
        <RidesCard />
        <RidesCard />
      </div>
    </>
  );
}

export default Rides;
