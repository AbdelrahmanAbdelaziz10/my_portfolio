import React from "react";
import { Col, Row } from "react-bootstrap";
import aboutImg from "../../Images/photo.jpg";
import "./About.css";
import {  FaCloudDownloadAlt } from "react-icons/fa";
import aboutimg from '../../Images/photo_2023-12-14_20-03-22.jpg';
import aboutimg2 from '../../Images/photo_2023-12-14_20-03-33.jpg';

const About = () => {
  return (
    <section className="about mb-5" id='about'>
      <Row className="justify-content-center md-5 pb-4">
        <Col lg="6" className="text-center">
          <h2>
            About <span>Me</span>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col xs="" lg="4" md="4" sm="12" className="img_about">
          <div className="about_photo">
            <img src={aboutImg} alt="Abdelrahman_img" className="about_img" />
          </div>
        </Col>
        <Col xs="" lg="8" md="8" sm="12" className="mt-4">
          <div className="about_text">
            <h3> Abdelrahman Abdelaziz </h3>
            <h5>
              {" "}
              <span>FrontEnd Developer</span>
            </h5>
            <p>
              I'm a Frontend Developer based in Egypt who is passionate about
              delivering value to businesses through technology. I love the
              challenge of finding creative solutions to problems, and I enjoy
              collaborating with teams to achieve great results.
            </p>
            <div className="d-flex ">
            <button className="btn2" >
            <a href='https://drive.google.com/file/d/1pgJSXr3HTLKLzPYcUNislexdNfE4jTAb/view?usp=drive_link' target="_blank">
            DOWNLOAD CV <FaCloudDownloadAlt className="down_icon" />
            </a>
            </button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
