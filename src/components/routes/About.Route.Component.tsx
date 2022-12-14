import { useDocumentTitle } from "../../utilities/setDocumentTitle";

import "../../styles/about.scss";

const AboutComponent = () => {
  // ignore the returned values since we don't need to update it programmatically
  useDocumentTitle("About");

  return (
    <div className="pw-about-container">
      <h1 className="pw-about-title">About me</h1>
      <div className="pw-about-content">
        <section className="pw-about-section-summary">
          <p>Hi! I'm Edward, Software Engineer with 10+ experience</p>
          <p>I design and build enterprise applications using modern technologies and cloud solutions</p>
        </section>
        <div className="pw-about-mid-container">
          <section className="pw-about-section-exp">
            <h3>Past Experience</h3>
            <h4>Lead Software Engineer | 02/2019 - Present | EPAM systems | Boston, MA</h4>
            <p>Full stack developer (.NET + React JS)</p>
            <h4>Lead Software Engineer | 02/2019 - Present | EPAM systems | Boston, MA</h4>
            <p>Full stack developer (.NET + React JS)</p>
          </section>
          <section className="pw-about-section-skills">
            <h3>Skills</h3>
            <p>
              .NET, ReactJS, C#, JavaScript, TypeScript, SQL, Algorithms and Data Structures, TDD, BDD, DDD,,
              Microservices, SOLID, Design Patterns, Agile, Scrum, Kanban, Machine Learning, PostgreSQL, SQL Server,
              Oracle, Azure, AWS
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
