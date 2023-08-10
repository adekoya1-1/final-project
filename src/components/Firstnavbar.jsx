import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/Logo.png";
import "../styles/Firstnavbar.css";
import {Link} from 'react-router-dom'

const Firstnavbar = () => {
  return (
    <div className="id">
      <Navbar expand="lg"  className="bg-body-white" id="Navbarr">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
               <img className="logo" src={Logo} alt="" />
            </Link>
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar">
            <Nav className="me-auto">
              <Link
                to="/"
                className="text-decoration-none" id="tap"
              >
                Home
              </Link>
              <Link 
                to="/about"
               className="text-decoration-none" id="tap"
              >
                About
              </Link>
              <Link
                to="/services"
               className="text-decoration-none" id="tap"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-decoration-none" id="tap"
              >
                Contact
              </Link>
              <span className=" buttons">
                <Link to="/login"  className="text-decoration-none " id="take"> Login</Link>
                <Link to="/signup" className="text-center"><button type="submit">
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
