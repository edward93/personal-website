import { useDocumentTitle } from "../../utilities/setDocumentTitle";

const ProjectsComponent = () => {
  // ignore the returned values since we don't need to update it programmatically
  useDocumentTitle("Projects");
  
  return <div className="pw-projects-container">My Projects</div>;
};

export default ProjectsComponent;
