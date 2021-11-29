import React from "react";
import "./Contact.css";
import { Container, Form } from "react-bootstrap";
import contactImg from "../../images/TaeAugust11.jpg";

const Contact = () => {
  return (
    <Container className="pb-5">
      <div>
        <div className="contact-container row mx-3 my-5">
          <h3 className="choose-text mt-5">CONTACT</h3>
          <div className="contact-img col-md-6">
            <img src={contactImg} alt="" />
          </div>
          <div className="contact-form col-md-6 my-5">
            <Form className="">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  aria-required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your comments Here</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <button type="submit" className="btn-book">
                SEND
              </button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
