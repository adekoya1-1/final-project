import React from "react";
import "../contact css/otherstuff.css";
import loc from "../assets/images/Group55.png";
import cont from "../assets/images/Group56.png";
import mail from "../assets/images/Group57.png";
import map from "../assets/images/Rectangle56.png"

const Otherstuff = () => {
  return (
    <div>
      <div className="ress">
        <div className="loc">
          <img src={loc} alt="" />
          <p className="res">1, Ogunlesi str, onipanu, Lagos.</p>
        </div>
        <div className="loc">
          <img src={cont} alt="" />
          <p>(233) 768-0202 </p>
          <p>(234) 799-1020</p>
        </div>
        <div className="loc">
          <img src={mail} alt="" />
          <p>www.medkit.com</p>
          <p>info@medkit.com</p>
        </div>
          </div>
          <div className="map">
              <img src={map} alt="" />
          </div>
          <div className="bg-white fro">
              <h3>Send us a message</h3>
              <div >
                  <form>
                      <div className="fir">
                          <input className="name" type="text" placeholder="Your Name*" />
                          <input className="name" type="number" placeholder="Phone*" />
                      </div>
                      <div className="sec">
                      <input className="mail" type="email" placeholder="Email*" />
                      <input className="news" type="text" />
                      </div>
                  </form>
              </div>
      </div>
      <div className="letter">
        <h3>Subscribe</h3>
        <p>Get our latest news & update regularly</p>
        <div>
          <form>
            <input className="sub" type="email" placeholder="type email adress here" />
            <button className="btn yesa">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otherstuff;
