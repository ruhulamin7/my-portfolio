import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Projects.css";
import carword from "../../images/projects-img/carworld.png";
import cyclone from "../../images/projects-img/cyclone.png";
import hondaCbr from "../../images/projects-img/hondaCbr.PNG";
import concert from "../../images/projects-img/arrange-concers.png";
import doccure from "../../images/projects-img/doccure.png";
import skillup from "../../images/projects-img/skillup.png";

const Projects = () => {
  return (
    <Container className="project-container my-5 py-3">
      <h2 className="my-5">PROJECTS</h2>
      <Row md={3} sm={2} xs={1}>
        <Col>
          <Card className="mb-5 custom-card">
            <Card.Img variant="top" src={carword} />
            <Card.Body>
              <Card.Title>Car World</Card.Title>
              <Card.Text>
                Technology used : React, Node Js, Express Js, Firebase, MongoDB,
                React Router and React Nesting Router, Private Route, React Hook
                Form and Axios.
                <p>Admin ID: admin@admin.com Pass: 123456</p>
              </Card.Text>

              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://car-world-97a18.web.app/"
                  target="_blank"
                >
                  Live Site
                </a>
              </Button>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://github.com/ruhulzero7/car-world-client"
                  target="_blank"
                >
                  Client Side Code
                </a>
              </Button>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://github.com/ruhulzero7/car-world-server"
                  target="_blank"
                >
                  Server Side Code
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-5 custom-card">
            <Card.Img variant="top" src={cyclone} />
            <Card.Body>
              <Card.Title>Cyclone Tour</Card.Title>
              <Card.Text>
                Technology used : React, React Bootstrap, Firebase, Node.js,
                Express Js, MongoDB, React Router, React Private Route.
              </Card.Text>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://eloquent-bartik-bba836.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </a>
              </Button>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://github.com/ruhulzero7/cyclone-tour-client"
                  target="_blank"
                >
                  Client Side Code
                </a>
              </Button>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://github.com/ruhulzero7/cyclone-tour-server"
                  target="_blank"
                >
                  Server Side Code
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-5 custom-card">
            <Card.Img variant="top" src={doccure} />
            <Card.Body>
              <Card.Title>Find Doctor</Card.Title>
              <Card.Text>
                Technology used : React, Firebase, React Bootstrap, React Router
                and Private Route.
              </Card.Text>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://find-doctor-91fbc.web.app/"
                  target="_blank"
                >
                  Live Site
                </a>
              </Button>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://github.com/ruhulzero7/find-doctor"
                  target="_blank"
                >
                  Code
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-5 custom-card">
            <Card.Img variant="top" src={skillup} />
            <Card.Body>
              <Card.Title>Skilup</Card.Title>
              <Card.Text>Technology used : React, React Bootstrap</Card.Text>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://skillup-training-ruhul.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </a>
              </Button>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://github.com/ruhulzero7/skillup-training"
                  target="_blank"
                >
                  Code
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-5 custom-card">
            <Card.Img variant="top" src={concert} />
            <Card.Body>
              <Card.Title>Arrange A Concert</Card.Title>
              <Card.Text>Technology used : HTML, CSS, Bootstrap</Card.Text>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://arrange-a-concert-ruhul.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </a>
              </Button>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://github.com/ruhulzero7/arrange-a-concert"
                  target="_blank"
                >
                  Code
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-5 custom-card">
            <Card.Img variant="top" src={hondaCbr} />
            <Card.Body>
              <Card.Title>Honda CBR</Card.Title>
              <Card.Text>Technology used : HTML, CSS, Bootstrap</Card.Text>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://ruhulzero7.github.io/honda-cbr-bootstrap/"
                  target="_blank"
                >
                  Live Site
                </a>
              </Button>
              <Button variant="outline-dark">
                <a
                  style={{ textDecoration: "none" }}
                  className="watch-live"
                  href="https://github.com/ruhulzero7/honda-cbr-bootstrap"
                  target="_blank"
                >
                  Code
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
