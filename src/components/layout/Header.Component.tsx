import { NavLink } from "react-router-dom";

import Nav from "./Navigation.Component";

import Routes from "../../utilities/Routes";

import "../../styles/header.scss";
import logo from "../../images/logo.svg";

const HeaderComponent = () => {
  return (
    <div className="pw-app-header">
      <div className="pw-header-name">
        <NavLink to={Routes.Home}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className="pw-header-nav-container">
        <Nav />
      </div>
    </div>
  );
};

export default HeaderComponent;
