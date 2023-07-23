import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/Logo.png";
import "../styles/Firstnavbar.css";
import {Link} from 'react-router-dom'

const Firstnavbar = () => {
  return (
    <div>
      <Navbar expand="lg"  className="  fnav">
        <Container id=" navb" className="bars">
          <div>
            
          </div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="coll" id="basic-navbar-nav">
            <Nav className="me-auto d-flex ">
              <Link
                to="/"
                className="text-decoration-none text-success fs-5 fw-light mx-3"
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="text-decoration-none text-success fs-5 fw-light mx-3"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-decoration-none text-success fs-5 fw-light mx-3"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-decoration-none text-success fs-5 fw-light mx-3"
              >
                Contact
              </Link>
              <span className=" justify-content-end align-end del">
                <Link to="/login"><button id="login" className="btn" >Login</button></Link>
                <Link to="/signup"><button className="btn " id="signup">
                  Signup
                </button></Link>
                
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Firstnavbar;
