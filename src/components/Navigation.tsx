import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = (props) => {
  const location = useLocation();

  const active: React.CSSProperties = {
    backgroundColor: "#ffffff30",
  };

  return (
    <nav
      className={`nav 
      ${
        // pageContent[page]["background"].charAt(0) === "#" ? "" : "nav__blurred"
        "a"
      }
      `}
      style={{
        background: "#fd5252",
        padding: location.pathname === "/" ? "3rem" : "2rem",
      }}
    >
      <Link to={"/"}>
        <img src="./icons/portal.png" alt="portals logo" />
      </Link>
      <i className="bx bx-menu"></i>
      <div className="nav__links">
        <Link to="/posts" style={location.pathname === "/posts" ? active : {}}>
          Developer Posts
        </Link>
        <a href="https://timetables.ssdevelopers.xyz" target="_blank">
          Timetables
        </a>
        <a href="https://github.com/SS-Developers" target="_blank">
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
