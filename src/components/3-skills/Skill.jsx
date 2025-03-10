import React from "react";
import "./skill.css";

export default function Skill() {
  return (
    <section className="skills">
      <h2>Skills</h2>

      {/* Frontend Skills */}
      <h3>Frontend</h3>
      <div className="frontend">
        <div className="skill-item">
          <div className="icon-html5"></div>
          <span>HTML5</span>
        </div>
        <div className="skill-item">
          <div className="icon-css3"></div>
          <span>CSS3</span>
        </div>
        <div className="skill-item">
          <div className="icon-javascript"></div>
          <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <div className="icon-bootstrap"></div>
          <span>Bootstrap</span>
        </div>
        <div className="skill-item">
          <div className="icon-angular"></div>
          <span>Angular</span>
        </div>
        <div className="skill-item">
          <div className="icon-react"></div>
          <span>React</span>
        </div>
      </div>

      {/* Backend Skills */}
      <h3>Backend</h3>
      <div className="backend">
        <div className="skill-item">
          <div className="icon-mongodb"></div>
          <span>MongoDB</span>
        </div>
        <div className="skill-item">
          <div className="icon-mysql"></div>
          <span>MySQL</span>
        </div>
        <div className="skill-item">
          <div className="icon-postgresql"></div>
          <span>PostgreSQL</span>
        </div>
        <div className="skill-item">
          <div className="icon-csharp"></div>
          <span>C#</span>
        </div>
        <div className="skill-item">
          <div className="icon-java"></div>
          <span>Java</span>
        </div>
        <div className="skill-item">
          <div className="icon-php"></div>
          <span>PHP</span>
        </div>
        <div className="skill-item">
          <div className="icon-node-dot-js"></div>
          <span>Node.js</span>
        </div>
      </div>

      {/* Tools */}
      <h3>Tools</h3>
      <div className="tools">
        <div className="skill-item">
          <div className="icon-swagger"></div>
          <span>Swagger</span>
        </div>
        <div className="skill-item">
          <div className="icon-postman"></div>
          <span>Postman</span>
        </div>
        <div className="skill-item">
          <div className="icon-intellijidea"></div>
          <span>IntelliJ IDEA</span>
        </div>
        <div className="skill-item">
          <div className="icon-visualstudio"></div>
          <span>Visual Studio</span>
        </div>
        <div className="skill-item">
          <div className="icon-visualstudiocode"></div>
          <span>VS Code</span>
        </div>
        <div className="skill-item">
          <div className="icon-git"></div>
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}