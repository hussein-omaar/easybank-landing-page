import React from "react";
import "../components/intro.css";
import hero from "../images/image-mockups.png";

function Intro() {
  return (
    <>
      <section>
        <div className="hero-wraper">
          <div className="devices">
            <img src={hero} width="100%" />
          </div>

          <div className="content">
            <h1>
              Next generation <br></br> digital banking
            </h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>

            <div className="btn">
              <button>Request Invite</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
