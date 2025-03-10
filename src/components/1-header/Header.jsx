import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-th-menu flex"
      >
        {" "}
      </button>

      <nav>
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
          <li className="resume-button">
            <a href="/Khaled_Mlihan_Resume.pdf" download className="download-btn">
              Download Resume
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-x"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li onClick={() => { setshowModal(false); }}>
              <a href="#hero">About</a>
            </li>
            <li onClick={() => { setshowModal(false); }}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={() => { setshowModal(false); }}>
              <a href="#experience">Experience</a>
            </li>
            <li onClick={() => { setshowModal(false); }}>
              <a href="#contact">Contact</a>
            </li>
            <li onClick={() => { setshowModal(false); }} className="resume-button-mobile">
              <a href="/Khaled_Mlihan_Resume.pdf" download>
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;