import { useDocumentTitle } from "../../utilities/setDocumentTitle";

const ContactComponent = () => {
  // ignore the returned values since we don't need to update it programmatically
  useDocumentTitle("Contact");

  return <div className="pw-contact-container">contact Me</div>;
};

export default ContactComponent;
