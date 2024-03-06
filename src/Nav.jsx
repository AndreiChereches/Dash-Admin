import "./css/Nav.css";
import logo from "./assets/logo.jpg";

// eslint-disable-next-line react/prop-types
function Nav({ callback }) {
  return (
    <>
      <nav className="main-nav">
        <li>
          <a href="https://www.ridedash.eu">
            <img className="main-nav-logo" src={logo} alt="logo" />
          </a>
        </li>
        <li>
          <button onClick={() => callback("Dashboard")} href="/">
            Dashboard
          </button>
        </li>
        <li>
          <button onClick={() => callback("Rides")} href="/">
            Rides
          </button>
        </li>
        <li>
          <button onClick={() => callback("Vehicles")} href="/">
            Vehicles
          </button>
        </li>
        <li>
          <button onClick={() => callback("Analytics")} href="/">
            Analytics
          </button>
        </li>
      </nav>
    </>
  );
}

export default Nav;
