import React from "react";
import raj from "../assets/images/Dr raj.png";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <h1 className="get">
          Get Access to Quick And Confidential Medical Services
        </h1>
        <p className="yes">
          Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper nullam
          lacus tristique diam. Nulla sed rhoncus cras neque pulvinar. Pretium
          et adipiscing sociis commodo sit sem. Ac fusce vel facilisis
          pellentesque aliquam elentum. Massa morbi phasellus viverra nisi id.
        </p>
        <button className="btn " id="start">
          Get Started
        </button>
      </div>
      <div className="dr">
        <img className="raj" src={raj} alt="" />
        <div className="drs">
          <div className="its">
            <h3>Dr. Raj Spencer</h3>
            <p>Consultant</p>
            <button
              style={{ color: "#1E3673", backgroundColor: "#FFFFFF" }}
              className="btn"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
