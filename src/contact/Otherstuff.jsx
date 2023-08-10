import React from "react";
import "../contact css/otherstuff.css";
import loc from "../assets/images/Group55.png";
import cont from "../assets/images/Group56.png";
import mail from "../assets/images/Group57.png";
import map from "../assets/images/Rectangle56.png";
import map2 from "../assets/images/map.png";
import clock from "../assets/images/clock.png";
import mail2 from "../assets/images/email.png";
import loc2 from "../assets/images/des.png";
import cont2 from "../assets/images/tell.png";

const Otherstuff = () => {
  return (
    <div className="muh">
      <div className="ress">
        <div className="loc">
          <img className="desk" src={loc2} alt="" />
          <img className="mob" src={loc} alt="" />
          <p className="res">1, Ogunlesi str, </p>
          <p>onipanu, Lagos.</p>
        </div>
        <div className="loc">
          <img className="desk" src={cont2} alt="" />
          <img className="mob" src={cont} alt="" />
          <p>(233) 768-0202 </p>
          <p>(234) 799-1020</p>
        </div>
        <div className="loc">
          <img className="desk" src={mail2} alt="" />
          <img className="mob" src={mail} alt="" />
          <p>www.medkit.com</p>
          <p>info@medkit.com</p>
        </div>
        <div className="mai">
          <img src={clock} alt="" />
          <p>24 Hours a Day</p>
          <p>7 Days a Week</p>
        </div>
      </div>
      <div className="map">
        <img className="map1 img-fluid" src={map} alt="" />
        <img className="map2 img-fluid" src={map2} alt="" />
      </div>
      <div className="bg-white fro">
        <h3>Send us a message</h3>
        <div>
          <form>
            <div className="fir">
              <input className="name" type="text" placeholder="Your Name*" />
              <input className="name" type="number" placeholder="Phone*" />
            </div>
            <div className="sec">
              <input className="mails" type="email" placeholder="Email*" />
              <textarea className="news" cols="30" rows="10"></textarea>
              <button className="btn" id="mess">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="letter">
        <div className="crib">
          <h3>Subscribe</h3>
          <p>Get our latest news & update regularly</p>
        </div>

        <div>
          <form>
            <input
              className="sub"
              type="email"
              placeholder="type email adress here"
            />
            <button className="btn " id="yesa">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otherstuff;
