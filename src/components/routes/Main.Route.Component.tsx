import { useEffect } from "react";

const titlePrefix = process.env.REACT_APP_TITLE_PREFIX

const MainComponent = () => {
  useEffect(() => {
    document.title = `${titlePrefix} Home`;
  }, []);
  return <div className="pw-main-container">Main Page blah blah blah</div>;
};

export default MainComponent;
