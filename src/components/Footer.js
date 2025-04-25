import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Yassin Moustafa</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Yassin</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/yassin287"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
            <a
                 href="https://www.facebook.com/profile.php?id=100072936445935"
                 style={{ color: "white" }}
                 target="_blank"
                 rel="noopener noreferrer"
              >
                 <AiOutlineFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yassin-moustafa-077052214/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/yassinn_moustafa/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
