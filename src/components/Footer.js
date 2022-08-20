import React from "react";
import "../components/footer.css";
import logo from "../images/mobile-logo.svg";
import youtube from "../images/icon-youtube.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="social-icons">
            <img src={facebook} />
            <img src={youtube} />
            <img src={twitter} />
            <img src={pinterest} />
            <img src={instagram} />
          </div>
        </div>

        <div className="middle">
          <div className="nav-links">
            <nav>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="right">
          <div className="btn">
            <button> Request Invit</button>
          </div>
          <div className="reserved-rights">
            <span>Easybank. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
