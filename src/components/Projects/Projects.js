import React, { useEffect, useState } from "react";
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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Container className="project-container my-5 py-3">
      <h2 className="my-5" style={{ color: "orange" }}>
        PROJECTS
      </h2>
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

              <Link to={`/projectDetails/${1}`}>
                <button className="details-btn">View Details</button>
              </Link>
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

              <Link to={`/projectDetails/${2}`}>
                <button className="details-btn">View Details</button>
              </Link>
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

              <Link to={`/projectDetails/${3}`}>
                <button className="details-btn">View Details</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-5 custom-card">
            <Card.Img variant="top" src={skillup} />
            <Card.Body>
              <Card.Title>Skilup Training</Card.Title>
              <Card.Text>Technology used : React, React Bootstrap</Card.Text>

              <Link to={`/projectDetails/${4}`}>
                <button className="details-btn">View Details</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-5 custom-card">
            <Card.Img variant="top" src={concert} />
            <Card.Body>
              <Card.Title>Arrange A Concert</Card.Title>
              <Card.Text>Technology used : HTML, CSS, Bootstrap</Card.Text>

              <Link to={`/projectDetails/${5}`}>
                <button className="details-btn">View Details</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-5 custom-card">
            <Card.Img variant="top" src={hondaCbr} />
            <Card.Body>
              <Card.Title>Honda CBR</Card.Title>
              <Card.Text>Technology used : HTML, CSS, Bootstrap</Card.Text>

              <Link to={`/projectDetails/${6}`}>
                <button className="details-btn">View Details</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
