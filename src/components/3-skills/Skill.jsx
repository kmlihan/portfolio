import React from "react";
import "./skill.css";

export default function Skill() {
  return (
    <section className="skills ">
      <h2>Skills</h2>
      <h3>Frontend</h3>
      <div className="frontend ">
        <div className="icon-html5 "></div>
        <div className="icon-css3 "></div>
        <div className="icon-javascript "></div>
        <div className="icon-bootstrap "></div>
        <div className="icon-angular "></div>
        <div className="icon-react "></div>
      </div>
      <h3 >Backend</h3>
      <div className="backend  ">
        <div className="icon-mongodb "></div>
        <div className="icon-mysql "></div>
        <div className="icon-postgresql "></div>
        <div className="icon-csharp "></div>
        <div className="icon-java "></div>
        <div className="icon-php "></div>
        <div className="icon-node-dot-js "></div>
      </div>

      <h3 >Tools</h3>
      <div className="tools">
        <div className="icon-swagger "></div>
        <div className="icon-postman "></div>
        <div className="icon-intellijidea"></div>
        <div className="icon-visualstudio "></div>
        <div className="icon-visualstudiocode "></div>
        <div className="icon-git "></div>
      </div>
    </section>
  );
}
