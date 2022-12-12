import { useEffect } from "react";

const titlePrefix = process.env.REACT_APP_TITLE_PREFIX

const ContactComponent = () => {
  useEffect(() => {
    document.title = `${titlePrefix} Contact`;
  }, []);
  return <div className="pw-contact-container">contact Me</div>;
};

export default ContactComponent;
