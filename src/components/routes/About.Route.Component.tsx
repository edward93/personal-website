import { useEffect } from "react";

const titlePrefix = process.env.REACT_APP_TITLE_PREFIX

const AboutComponent = () => {
  useEffect(() => {
    document.title = `${titlePrefix} About`;
  }, []);
  
  return <div className="pw-about-container">About me</div>;
};

export default AboutComponent;
