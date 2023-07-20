import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo2 from "../assets/images/Logo2.png";
import "../styles/Firstnavbar.css";
import { Link } from "react-router-dom";
import "../styles/Secondnavbar.css"

const Secondnavbar = () => {
  return (
    <div className="second">
      <Navbar expand="lg" className=" justify-content-between fnav">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo2} alt="" />
          </Navbar.Brand>
            <Nav className="me-auto d-flex mee">
              <Link
                to="/success"
                className="my"
              >
                My Appointments
              </Link>
              <Link
                to="/login"
                className="out"
              >
                Log Out
              </Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Secondnavbar;
