import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="resume-button-footer">
          <a href="/Khaled_Mlihan_Resume.pdf" download>
            Download Resume
          </a>
        </li>
      </ul>

      <p>© {new Date().getFullYear()} Khaled Mlihan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
