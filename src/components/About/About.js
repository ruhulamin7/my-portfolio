import React from "react";
import "./About.css";
import ruhulAbout from "../../images/about.jpg";
import { Container, ProgressBar } from "react-bootstrap";

const About = () => {
  return (
    <Container className="about-container py-5">
      <div className="about-left">
        <div className="d-flex">
          <div className="about-detail">
            <p>
              <p>Name: Ruhul Amin</p>
              <p>Profile: MERN stack developer</p>
              <p>Email: ruhulzero7@gmail.com</p>
              <p>Phone: +880 01739713724</p>
              <p>LinkedIn: linkedin.com/ruhulzero7</p>
              <p> Github: github.com/ruhulzero7</p>
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
          I have always been passionate about web development, which led me to
          pursue a Bachelor of Computer Science degree. I am constantly seeking
          out new technologies and stay up-to-date on trends in the industry.
        </p>
        <p>
          I have extensive knowledge of HTML, CSS, JavaScript, React, Node, and
          MongoDB.
        </p>

        <p>
          I look forward to sharing more about my skills and experiences. Feel
          free to contact me at +88 01739713724 or ruhulzero7@gmail.com.
        </p>
      </div>
    </Container>
  );
};

export default About;
