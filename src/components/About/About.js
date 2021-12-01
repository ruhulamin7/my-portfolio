import React from "react";
import "./About.css";
import { Col, Container, ProgressBar } from "react-bootstrap";

const About = () => {
  return (
    <Container className="about-container" Row md={2} sm={1} xs={1}>
      <Col className="about-left pt-5">
        <div className="skills text-start">
          <h3 className="mb-5" style={{ color: "orange" }}>
            SKILLS
          </h3>
          <div>
            <span>HTML 80%</span>
            <ProgressBar striped variant="success" now={80} />
            <br />
            <span>CSS 75%</span>
            <ProgressBar striped variant="info" now={75} />
            <br />
            <span>JavaScript 70%</span>
            <ProgressBar striped variant="warning" now={70} />
            <br />
            <span>React.js 75%</span>
            <ProgressBar striped variant="danger" now={75} />
            <br />
            <span>Node.js 70%</span>
            <ProgressBar striped variant="danger" now={70} />
            <br />
            <span>MongoDB.js 65%</span>
            <ProgressBar striped variant="danger" now={65} />
          </div>
        </div>
      </Col>
      <Col className="about-right p-5">
        <h2 className="mb-5" style={{ color: "orange" }}>
          ABOUT ME
        </h2>
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
          free to contact me at +88 01739713724 or ruhulaminbd99@gmail.com.
        </p>
        <p>
          LinkedIn: linkedin.com/ruhulzero7 <br />
          Github: github.com/ruhulzero7
        </p>
      </Col>
    </Container>
  );
};

export default About;
