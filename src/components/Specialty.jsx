import React from "react";
import heart from "../assets/images/heartbeat.png";
import ambulance from "../assets/images/ambulance.png";
import doc from "../assets/images/doc.png";
import time from "../assets/images/time.png";
import jay from "../assets/images/jay.png";
import jays from "../assets/images/jays.png";
import jass from "../assets/images/jass.png";
import dass from "../assets/images/dass.png";
import chat from "../assets/images/chat.png";
import call from "../assets/images/call.png";
import live from "../assets/images/Live Chat.png";
import "../styles/specialty.css";

const Specialty = () => {
  return (
    <div style={{ backgroundColor: "#DEF1F9" }} className="specl">
      <div className="spec">
        <h2>MEDKIT SPECIALITIES</h2>
        <img src={heart} alt="" />
      </div>
      <div className="deas">
        <div>
        <img  src={ambulance} alt="" />
        <h3>FASTEST AMBULANCE</h3>
        <p>
          We provide you with experienced and highly professional doctors with
          the aim of providing exceptional care.
        </p>
      </div>
      <div>
        <img src={doc} alt="" />
        <h3>PROFESSIONAL DOCTORS</h3>
        <p>
          We provide you with experienced and highly professional doctors with
          the aim of providing exceptional care.
        </p>
      </div>
      <div>
        <img src={time} alt="" />
        <h3>BEST SERVICES</h3>
        <p>
          We are committed to providing healthcare services with the
          consideration of patients satisfaction. Our patients come first!
        </p>
      </div>
      </div>
      
      <div>
        <h2>MEET OUR DOCTORS</h2>
        <img src={heart} alt="" />
      </div>
      <div className="scr">
        <div className="doc">
          <img className="docs"  src={jay} alt="" />
          <h3>Dr. Jay Stephen</h3>
          <p>Optometrist</p>
          <div className="chat">
            <img src={chat} alt="" />
            <img src={call} alt="" />
            <img src={live} alt="" />
          </div>
        </div>
        <div className="doc">
          <img className="docs" src={jays} alt="" />
          <h3>Dr. Ajay Verma</h3>
          <p>Gynecologist</p>
          <div className="chat">
            <img src={chat} alt="" />
            <img src={call} alt="" />
            <img src={live} alt="" />
          </div>
        </div>
        <div className="doc">
          <img className="docs" src={jass} alt="" />
          <h3>Dr. Aisha Joe</h3>
          <p>Paediatrician</p>
          <div className="chat">
            <img src={chat} alt="" />
            <img src={call} alt="" />
            <img src={live} alt="" />
          </div>
        </div>
        <div className="doc">
          <img className="docs" src={dass} alt="" />
          <h3>Dr. Stella Maris</h3>
          <p>General Physician</p>
          <div className="chat">
            <img src={chat} alt="" />
            <img src={call} alt="" />
            <img src={live} alt="" />
          </div>
        </div>
      </div>

      <div>
        <h3>Patients Say</h3>
        <div className="d-flex says">
          <div className="bg-white say">
            <p>
              “I had a wonderful experience with Medkit. They ensured my health
              was greatly taken care of. I highly recommend Medkit.”
            </p>
            <h5>Aliya Roll</h5>
          </div>
          <div className="bg-white say">
            <p>
              “My treatment was second to none and the staffs of Medkit were
              polite and caring”
            </p>
            <h5>Elo Zona</h5>
          </div>
        </div>
      </div>
      <div className="">
        <img src={heart} alt="" />
      </div>
      <div className="day">
        <h3>We Operate 24h a day - 7 days a week!</h3>
        <div>
          <button style={{ backgroundColor: "#FFFFFF" }} className="btn">
            REPORT A PROBLEM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specialty;
