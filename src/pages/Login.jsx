import React from "react";
import logo from "../assets/images/Logo.png";
import face from "../assets/images/facebook.png";
import mail from "../assets/images/mail.png";
import init from "../assets/images/init.png";
import "../styles/login.css";
import dockk from "../assets/images/Rectangle59.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={{ backgroundColor: "#DEF1F9", height: "879px" }}>
      <div className="tea">
        <div className="logg">
          <div className="log">
            <img className="logs" src={logo} alt="" />
            <h3>Log In to MedKit</h3>
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
                <label className="yeasa" htmlFor="Email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mail"
                  placeholder="elo@techstudio.com"
                  required
                />
              </div>
              <div className="hot">
                <label className="yeasa" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="pass"
                  placeholder="Min 8 characters"
                  required
                />
                <p className="word">Forgot your password?</p>
                <button className="ini">Log in</button>
                <p className="yeasa">
                  Don’t have an account?
                  <span>
                    <Link to="/signup">Sign Up</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="docck">
          <img src={dockk} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
