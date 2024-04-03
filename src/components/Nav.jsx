import { motion } from "framer-motion";

import BikeSVG from "../assets/svg/nav-svg/BikeSVG";
import BikeActiveSVG from "../assets/svg/nav-svg/BikeActiveSVG";
import HomeSVG from "../assets/svg/nav-svg/HomeSVG";
import HomeActiveSVG from "../assets/svg/nav-svg/HomeActiveSVG";
import ReportSVG from "../assets/svg/ReportSVG";
import FavoriteSVG from "../assets/svg/nav-svg/FavoriteSVG";
import FavoriteActiveSVG from "../assets/svg/nav-svg/FavoriteActiveSVG";
import ReportActiveSVG from "../assets/svg/nav-svg/ReportActiveSVG";
import SettingsSVG from "../assets/svg/nav-svg/SettingsSVG";
import SettingsActiveSVG from "../assets/svg/nav-svg/SettingsActiveSVG";
import LogOutSVG from "../assets/svg/nav-svg/LogOutSVG";
import "../css/Nav.css";

// eslint-disable-next-line react/prop-types
function Nav({ callback, active, secondaryColor }) {
  return (
    <>
      <motion.nav className="main-nav">
        <motion.li
          initial={{ transform: "translateX(-150px)" }}
          animate={{ transform: "translateX(0px)" }}
        >
          <button
            style={
              active === "Dashboard"
                ? { backgroundColor: `rgba(${secondaryColor})` }
                : { backgroundColor: `rgba(${secondaryColor},0.5)` }
            }
            onClick={() => callback("Dashboard")}
            href="/"
          >
            {active === "Dashboard" ? <HomeActiveSVG /> : <HomeSVG />}
          </button>
        </motion.li>
        <motion.li
          initial={{ transform: "translateX(-150px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ delay: 0.1 }}
        >
          <button
            style={
              active === "Vehicles"
                ? { backgroundColor: `rgba(${secondaryColor})` }
                : { backgroundColor: `rgba(${secondaryColor},0.5)` }
            }
            onClick={() => callback("Vehicles")}
            href="/"
          >
            {active === "Vehicles" ? <BikeActiveSVG /> : <BikeSVG />}
          </button>
        </motion.li>
        <motion.li
          initial={{ transform: "translateX(-150px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ delay: 0.2 }}
        >
          <button
            style={
              active === "Rides"
                ? { backgroundColor: `rgba(${secondaryColor})` }
                : { backgroundColor: `rgba(${secondaryColor},0.5)` }
            }
            onClick={() => callback("Rides")}
            href="/"
          >
            {active === "Rides" ? <ReportActiveSVG /> : <ReportSVG />}
          </button>
        </motion.li>
        <motion.li
          initial={{ transform: "translateX(-150px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ delay: 0.3 }}
        >
          <button
            style={
              active === "Feedback"
                ? { backgroundColor: `rgba(${secondaryColor})` }
                : { backgroundColor: `rgba(${secondaryColor},0.5)` }
            }
            onClick={() => callback("Feedback")}
            href="/"
          >
            {active === "Feedback" ? <FavoriteActiveSVG /> : <FavoriteSVG />}
          </button>
        </motion.li>
        <motion.li
          initial={{ transform: "translateX(-150px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ delay: 0.4 }}
        >
          <button
            style={
              active === "Settings"
                ? { backgroundColor: `rgba(${secondaryColor})` }
                : { backgroundColor: `rgba(${secondaryColor},0.5)` }
            }
            onClick={() => callback("Settings")}
            href="/"
          >
            {active === "Settings" ? <SettingsActiveSVG /> : <SettingsSVG />}
          </button>
        </motion.li>
        <motion.li
          initial={{ transform: "translateX(-150px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ delay: 0.5 }}
        >
          <button
            style={{ backgroundColor: `#FFDDDD` }}
            onClick={() => callback("Analytics")}
            href="/"
          >
            <LogOutSVG />
          </button>
        </motion.li>
      </motion.nav>
    </>
  );
}

export default Nav;
