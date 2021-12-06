import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import serviceImg from "../../images/TaeAugust11.png";
const Services = () => {
  return (
    <Container>
      <h3
        className="choose-text my-5 "
        style={{ color: "orange", fontWeight: "300" }}
      >
        MY SERVICES
      </h3>

      <Row className="services-container" md={3} sm={2} xs={1}>
        <Col>
          <div className="card mb-5">
            <div className="service-img">
              <img src={serviceImg} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Web Design</h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </Col>
        <Col>
          {" "}
          <div className="card mb-5">
            <div className="service-img">
              <img src={serviceImg} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </Col>
        <Col>
          {" "}
          <div className="card mb-5">
            <div className="text-cente">
              <img src={serviceImg} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">PSD to HTML</h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
