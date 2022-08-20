import { useState } from "react";
import React from "react";
import "../components/header.css";
import logo from "../images/logo.svg";

function Header() {
  const [toggle, setToggle] = useState(true);
  const [rotate, setRotate] = useState(false);

  const menueClick = () => {
    setToggle(!toggle);
    setRotate(!rotate);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="mobile-menue " id={toggle ? "display" : null}>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Career</button>
            </li>
          </ul>
        </nav>

        <div className="main-nav-links">
          <nav>
            <ul>
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
              <li>
                <button>Blog</button>
              </li>
              <li>
                <button>Career</button>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="menue"
          onClick={menueClick}
          id={rotate ? "rotate" : null}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>

        <div className="invite-btn">
          <button> Request invite</button>
        </div>
      </header>
    </>
  );
}

export default Header;
