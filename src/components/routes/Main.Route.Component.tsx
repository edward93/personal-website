import { useDocumentTitle } from "../../utilities/setDocumentTitle";

import "../../styles/home.scss";

const MainComponent = () => {
  // ignore the returned values since we don't need to update it programmatically
  useDocumentTitle("Home");

  return (
    <div className="pw-main-container">
      <h2 className="pw-main-page-title anim-typewriter line-1">Hi, my name is Edward</h2>
      <div className="pw-main-content"></div>
    </div>
  );
};

export default MainComponent;
