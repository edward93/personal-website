import { Outlet } from "react-router-dom";

import Header from "./layout/Header.Component";
import Footer from "./layout/Footer.Component";

import "../styles/App.scss";

function App() {
  return (
    <div className="pw-app-container">
      <Header />
      <div className="pw-app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
