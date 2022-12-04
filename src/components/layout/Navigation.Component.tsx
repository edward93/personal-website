import { NavLink } from "react-router-dom";

import Routes from "../../utilities/Routes";

const Navigation = () => {
  return (
    <nav className="pw-header-nav">
      <ul>
        <li>
          <div className="pw-header-nav-element">
            <NavLink
              to={Routes.Home}
              className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
            >
              Home
            </NavLink>
          </div>
        </li>
        <li>
          <div className="pw-header-nav-element">
            <NavLink
              to={Routes.About}
              className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
            >
              About
            </NavLink>
          </div>
        </li>
        <li>
          <div className="pw-header-nav-element">
            <NavLink
              to={Routes.Projects}
              className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
            >
              Projects
            </NavLink>
          </div>
        </li>
        <li>
          <div className="pw-header-nav-element">
            <NavLink
              to={Routes.Contact}
              className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
            >
              Contact
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
