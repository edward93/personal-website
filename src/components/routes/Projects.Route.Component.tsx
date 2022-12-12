import { useEffect } from "react";

const titlePrefix = process.env.REACT_APP_TITLE_PREFIX;

const ProjectsComponent = () => {
  useEffect(() => {
    document.title = `${titlePrefix} Projects`;
  }, []);
  return <div className="pw-projects-container">My Projects</div>;
};

export default ProjectsComponent;
