import { useDocumentTitle } from "../../utilities/setDocumentTitle";
import SkillsChart from "../about/SkillsChart.Component";
import "../../styles/about.scss";

const AboutComponent = () => {
  // ignore the returned values since we don't need to update it programmatically
  useDocumentTitle("About");

  return (
    <div className="pw-about-container">
      <h1 className="pw-about-title">About me</h1>
      <div className="pw-about-content">
        <section className="pw-about-section-summary">
          <p>
            Hi! I'm Edward, Software Engineer with 10+ experience.
            <br />I design and build enterprise applications using modern technologies and cloud solutions
          </p>
        </section>
        <div className="pw-about-mid-container">
          <section className="pw-about-section-exp">
            <h2 className="pw-about-section-header">Past Experience</h2>
            <div className="pw-about-section-content">
              <h4>Lead Software Engineer | 02/2019 - Present | EPAM systems | Boston, MA</h4>
              <p>Full stack developer (.NET + React JS)</p>
              <h4>Sr Software Engineer | 01/2015 - 01/2019 | EPAM systems | Yerevan, Armenia</h4>
              <p>.NET Developer</p>
              <h4>Software Engineer | 04/2014 - 12/2014 | EPAM systems | Yerevan, Armenia</h4>
              <p>Ruby on Rails backend developer</p>
              <h4>Jr Software Engineer | 03/2012 - 02/2014 | Instigate CJSC | Yerevan, Armenia</h4>
              <p>Creating and maintaining software for operating drones using C/C++</p>
            </div>
          </section>
          <section className="pw-about-section-skills">
            <h2 className="pw-about-section-header">Skills</h2>
            <div className="pw-about-section-content">
              <SkillsChart />
              {/* .NET, ReactJS, C#, JavaScript, TypeScript, SQL, Algorithms and Data Structures, TDD, BDD, DDD,
              Microservices, SOLID, Design Patterns, Agile, Scrum, Kanban, Machine Learning, PostgreSQL, SQL Server,
              Oracle, Azure, AWS */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
