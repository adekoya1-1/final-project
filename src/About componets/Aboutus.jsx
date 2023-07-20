import React from "react";
import "../About styles/about.css";
import abt from "../assets/images/Rectangle34.png";
import tick from "../assets/images/tick.png";
import elli from "../assets/images/Ellipse3.png"

const Aboutus = () => {
  return (
    <div>
      <div className="about">
        <div>
          <img src={abt} alt="" />
        </div>
        <div className="test">
          <p>About Us</p>
          <h4>
            We Are Thoroughly Committed To Making Your Health Our Priority
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae.Morbi
            pellentesque ultricis id faucibus aliquam sed sit sed. Proiermentum
            mauris mi aliquet sed vel. Quam id secongue diam tincidunt enim.{" "}
          </p>
          <button className="btn">Learn More</button>
          <hr />
        </div>
      </div>
      <div className="cho">
        <h3>Why Patients Choose Our Hospital?</h3>
        <div>
          <div className="tic">
            <img src={tick} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
          </div>
          <div className="tic">
            <img src={tick} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
          </div>
          <div className="tic">
            <img src={tick} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
          </div>
          <div className="tic">
            <img src={tick} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
          </div>
          <div className="tic">
            <img src={tick} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
          </div>
          <div className="tic">
            <img src={tick} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
          </div>
          <div className="tic">
            <img src={tick} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur vestibulum.</p>
          </div>
        </div>
        <div className="story">
          <h3>Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate
            scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus quis
            penatibus sodales cursus. Velit massa dolor leo fermentia amet sit
            mattis. Sit praesent imperdiet pretium enim ut bibendum in dolor.
                  </p>
            <button className="btn">Learn More</button>
              </div>
              <div>
                  <div className="vision">
                      <h3>Our Vision</h3>
                      <p>Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum in.</p>
                  </div>
                  <div className="vision">
                      <h3>Mission</h3>
                      <p>Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum in.</p>
                  </div>
              </div>
              <div className="elli">
                  <img src={elli} alt="" />
              </div>
      </div>
    </div>
  );
};

export default Aboutus;
