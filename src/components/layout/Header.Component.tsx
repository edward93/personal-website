import Nav from "./Navigation.Component";

import "../../styles/header.scss";

const HeaderComponent = () => {
  return (
    <div className="pw-app-header">
      <div className="pw-header-name">
        <h1>Edward Chopuryan</h1>
      </div>
      <div className="pw-header-nav-container">
        <Nav />
      </div>
    </div>
  );
};

export default HeaderComponent;
