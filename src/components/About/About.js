import React from "react";
import "./About.css";
import ruhulAbout from "../../images/about.jpg";
import { Container, ProgressBar } from "react-bootstrap";

const About = () => {
  return (
    <Container className="about-container py-5">
      <div className="about-left">
        <div className="d-flex">
          <img className="about-img w-50" src={ruhulAbout} alt="" />
          <div className="about-detail w-50">
            <p>
              <p>Name: Ruhul Amin</p>
              <p>Profile: MERN stack developer</p>

              <p>Email: ruhulzero7@gmail.com</p>

              <p>Phone: +880 01739713724</p>
            </p>
          </div>
        </div>
        <div className="skills text-start">
          <h3>Skills</h3>
          <div>
            <span>JavaScript 70%</span>
            <ProgressBar striped variant="success" now={70} />
            <span>JavaScript 20%</span>
            <ProgressBar striped variant="info" now={20} />
            <span>JavaScript 60%</span>
            <ProgressBar striped variant="warning" now={60} />
            <span>JavaScript 80%</span>
            <ProgressBar striped variant="danger" now={80} />
          </div>
        </div>
      </div>
      <div className="about-right">
        <h3>Aboute Me</h3>
        <p>
          I've been trying to learn programming for 2 years, at this time
          Looking back in my past, I can't find any other chapter except coding
          I have become so involved with programming that coding has become an
          addiction. That's why when I finish a project at the right time, then
          I feel full of peace, joy, and a smile to Finally,Dedicated and
          efficient full stack developer with 8+ months of experience in
          application layers, presentation layers, and databases.
        </p>
      </div>
    </Container>
  );
};

export default About;
