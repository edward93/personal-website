import "../../styles/footer.scss";

const FooterComponent = () => {
  return (
    <div className="pw-footer-container">
      <div className="pw-footer-app-info">
        <div className="pw-footer-app-author">Designed and Made by Ed</div>
        <div className="pw-footer-app-version">version {process.env.REACT_APP_VERSION}</div>
        <div className="pw-footer-app-version">&copy; {new Date().getFullYear() === 2022 ? "2022" : `2022 - ${new Date().getFullYear()}`}</div>
      </div>
    </div>
  );
};

export default FooterComponent;
