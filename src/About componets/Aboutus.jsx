import React from "react";
import "../About styles/about.css";
import abt from "../assets/images/Rectangle34.png";
import tick from "../assets/images/tick.png";
import elli from "../assets/images/Ellipse3.png";
import tet from "../assets/images/Rectangle35.png";
import ellip from "../assets/images/Ellipse4.png";

const Aboutus = () => {
  return (
    <div>
      <div className="about">
        <div>
          <img className="abts" src={abt} alt="" />
        </div>
        <div className="test">
          <p>About Us</p>
          <h4>
            We Are Thoroughly Committed To Making Your Health Our Priority
          </h4>
          <p className="init">
            Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae.Morbi
            pellentesque ultricis id faucibus aliquam sed sit sed. Proiermentum
            mauris mi aliquet sed vel. Quam id secongue diam tincidunt enim.{" "}
          </p>
          <p className="inis">
            Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae duis
            leo lacus pellentesque sit. Turpis amet ut tortor scelerisque risus
            adipiscing et non. Interdum ac integer pretium aliquam auc.
            Tristique aliquet nisl odio risus diam. Morbi pellentesque ultricis
            id faucibus aliquam sed sit sed. Proin fermentum mauris mi aliquet
            sed vel. Quam id sed congue diam tincidunt enim.
          </p>
          <button className="btn" id="ntb">Learn More</button>
          <hr />
        </div>
      </div>
      <div className="why">
        <div className="tet">
          <img src={tet} alt="" />
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
        </div>
      </div>
      <div className="abouts">
        <div className="story">
          <h3>Our Story</h3>
          <p className="story1">
            Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate
            scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus quis
            penatibus sodales cursus. Velit massa dolor leo fermentia amet sit
            mattis. Sit praesent imperdiet pretium enim ut bibendum in dolor.
          </p>
          <p className="story2">
            Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate
            scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus quis
            penatibus sodales cursus. Velit massa dolor leo fermentia amet sit
            mattis. Sit praesent imperdiet pretium enim ut bibendum in dolor.
            Integer arcu cursus morbi mauris posuere. Risus pulvinar et nulla in
            dignissim lacus suscipit maecenas luctus. Non orci ornare nulla ut
            sit gravida dui fermentum sed. Semper pharetra urna pretium massa ut
            fermentum etiam amet. Elementum a sollicitudin viverra tempus a mi
            nibh aliquam nisl.
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div>
          <div className="vision">
            <h3>Our Vision</h3>
            <hr className="hrs" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo
              fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut
              bibendum in.
            </p>
          </div>
          <div className="vision">
            <h3>Mission</h3>
            <hr className="hrs" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo
              fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut
              bibendum in.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="elli">
          <img src={elli} alt="" />
        </div>
        <div className="ellip">
          <div>
            <img className="ellips" src={ellip} alt="" />
          </div>
          <div>
            <div className="ages">
              <div className="pers">
                <h3>98%</h3>
                <p>Satisfied Patients</p>
              </div>
              <div className="pers">
                <h3>20 +</h3>
                <p>Team Member</p>
              </div>
            </div>
            <div className="ages">
              <div className="pers">
                <h3>15 +</h3>
                <p>Merit Award</p>
              </div>
              <div className="pers">
                <h3>10 +</h3>
                <p>Expirience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
