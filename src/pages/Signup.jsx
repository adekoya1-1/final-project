import React from "react";
import logo from "../assets/images/Logo.png";
import face from "../assets/images/facebook.png";
import mail from "../assets/images/mail.png";
import init from "../assets/images/init.png";
import "../styles/login.css";
import { Link } from "react-router-dom";
import mock from "../assets/images/Rectangle50.png"

const Signup = () => {
  return (
    <div style={{ backgroundColor: "#DEF1F9", height: "1000px" }}>
      <div className="tea">
        <div className="logg">
          <div className="log">
            <img className="logs" src={logo} alt="" />
            <h3>Create an Account</h3>
            <div>
              <img src={face} alt="" />
              <img src={mail} alt="" />
              <img src={init} alt="" />
            </div>
            <p>Or use your email adress:</p>
          </div>
          <div>
            <form>
              <div className="hot">
                <label className="yeasa" htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  className="mail"
                  placeholder="Aisha Oyelola"
                  required
                />
              </div>
              <div className="hot">
                <label className="yeasa" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mail"
                  placeholder="aisha@gmail.com"
                  required
                />
              </div>
              <div className="hot">
                <label className="yeasa" htmlFor="password" >
                  Password
                </label>
                <input
                  type="password"
                  className="pass"
                  placeholder="Min 8 characters"
                  id="password"
                  required
                />
                <button className="ini">Sign Up</button>
                <p className="yeasa">
                  Already a user?
                  <span>
                    <Link to="/login">Log in</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
              </div>
              <div className="dock">
                  <img src={mock} alt="" />
              </div>
      </div>
    </div>
  );
};

export default Signup;
