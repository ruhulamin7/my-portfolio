import React from "react";
import "./Contact.css";
import { Container, Form } from "react-bootstrap";
import contactImg from "../../images/TaeAugust11.jpg";

const Contact = () => {
  return (
    <Container className="pb-5">
      <div>
        <div className="contact-container row mx-3  pb-5">
          <h3
            className="choose-text mt-5 "
            style={{ color: "orange", fontWeight: "300" }}
          >
            CONTACT ME
          </h3>
          <div className="contact-img col-md-5">
            <img src={contactImg} alt="" />
          </div>
          <div className="contact-form col-md-6 my-5">
            <p style={{ fontSize: "20px", fontWeight: "300" }}>
              Please feel free to contact me if you need any further
              information.
            </p>
            <Form
              action="https://formsubmit.co/ruhulaminbd99@gmail.com"
              method="POST"
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Full Name</Form.Label> */}
                <Form.Control type="text" placeholder="Your Name" name="name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  aria-required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {/* <Form.Label>Your comments Here</Form.Label> */}
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows={8}
                />
              </Form.Group>
              <button type="submit" className="btn-book">
                SEND
              </button>
              <input type="hidden" name="_captcha" value="false"></input>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
