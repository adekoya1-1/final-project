import React from "react";
import tweet from "../assets/images/twitter.png";
import face from "../assets/images/facebook.png";
import insta from "../assets/images/instagram.png";
import "../styles/footer.css";
import logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <div>
      <div className="foot">
        <h3>Find & follow us</h3>
        <div>
          <img src={tweet} alt="" />
          <img src={face} alt="" />
          <img src={insta} alt="" />
        </div>
        <p>Tel: (233) 678-0202</p>
        <p>Fax: 0300000025</p>
        <p>Email: medkit@gmail.com</p>
        <hr />
        <p className="all">Copyright 2023 All Rights Reserved</p>
      </div>
      <div className="ftter">
        <div className="mars">
          <div className="log">
            <img src={logo} alt="" />
            <p className="to">
              Access to medical services with Certified Medical Consultants on
              Medkit.
            </p>
            <p>Contact@medkit.com</p>
            <p>(233) 678-0202</p>
            <div className="alt">
              <img src={tweet} alt="" />
              <img src={face} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
          <div className="blog">
            <h3>Information</h3>
            <p>Blog</p>
            <p>Special Offers</p>
            <p>F.A.Q</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="blog">
            <h3>Quick Links</h3>
            <p>Our Doctors</p>
            <p>Book an Appointment</p>
            <p>Free Consultation</p>
          </div>
          <div className="blog">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Help Center</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
