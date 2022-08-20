import React from "react";
import "../components/info.css";
import online from "../images/icon-online.svg"
import api from "../images/icon-api.svg"
import onboarding from "../images/icon-onboarding.svg"
import budgeting from "../images/icon-budgeting.svg"

function Info() {
  return (
    <>
      <div className="info-wraper">
        <div className="about">
          <h1>Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="services">
          <div className="online-banking">
            <img src={online}/>
            <h1>Online Banking</h1>
            <p>Our modern web and mobile applications
               allow you to keep track of your finances
                wherever you are in the world.
</p>
          </div>
          <div className="Simple-Budgeting">
          <img src={budgeting}/>
            <h1>Simple Budgeting</h1>
            <p>See exactly where your money goes each month.
               Receive notifications when you’re close to 
               hitting your limits.</p>
          </div>
          <div className="Fast-Onboarding">
          <img src={onboarding}/>
            <h1>Fast Onboarding</h1>
            <p>We don’t do branches. Open your account in 
              minutes online and start taking control of 
              your finances right away.</p>
          </div>
          <div className="Open-API">
          <img src={api}/>
            <h1>Open API</h1>
            <p>Manage your savings, investments, pension,
               and much more from one account. Tracking 
               your money has never been easier.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
