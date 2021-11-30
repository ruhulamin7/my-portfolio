import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import "./ProjectDetails.css";
const ProjectDetails = () => {
  const { projectId } = useParams();

  const [projects, setProjects] = useState([]);
  let isloading = true;

  //   useEffect(() => {
  //     fetch("/projects.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProjects(data);
  //       });
  //   }, []);

  const fakeData = [
    {
      id: 1,
      name: "Car World",
      projectOverview: [
        "There are two types of user login systems, using email/password and using a google account with Firebase Authentication system.",
        "There is a dashboard section, based on the normal user & admin role.",
        "A normal user can place an order, manage his orders and post a review.",
        "An admin can manage all orders, add or remove a product.",
        "Admin can make a new admin by providing an email address.",
      ],
      technology:
        "React, Node Js, Express Js, Firebase, MongoDB, React Router and React Nesting Router, Private Route, React Hook Form and Axios.",

      admin: "Admin ID: admin@admin.com Pass: 123456",
      img1: " https://i.ibb.co/LgvcHmD/car-world-1.png",
      img2: "https://i.ibb.co/3WDhN17/car-world-2.png",
      img3: "https://i.ibb.co/WK1nb89/car-world-3.png",
      img4: "https://i.ibb.co/ZNps8wt/car-world-4.png",
    },
    {
      id: 2,
      name: "Cyclone Tour",
      projectOverview: [
        "Private route system is implemented on this Website.",
        "When a user wants to book a package then he must be logged in.",
        "Users can log in only using a google account with the Firebase Authentication system.",
        "After login into this site the user can book any package, he can manage his pending status to be approved.",
        "A logged-in user can add a package and also update or delete any package.",
      ],
      technology:
        "React, React Bootstrap, Firebase, Node.js, Express.js, MongoDB, React Router, React Private Route",
      img1: "https://i.ibb.co/JsBK5Y6/cyclone-tour-1.png",
      img2: "https://i.ibb.co/Y0GgnsL/cyclone-tour-2.png",
      img3: "https://i.ibb.co/KsQ70C2/cyclone-tour-3.png",
      img4: "https://i.ibb.co/c1MG59K/cyclone-tour-4.png",
    },
    {
      id: 3,
      name: "Find Doctor",
      projectOverview: [
        "This is a healthcare related website",
        "A user can create an account or log in with an email/password on this site.",
        "The user can logs in using a google account with the Google Firebase Authentication system.",
        "Doctor page is private. If a user wants a doctor's appointment, the user must login.",
        "After login a user can see full details of the doctor by clicking on the Book Now button from the home and the doctor's section.",
      ],
      technology:
        "React, Firebase, React Bootstrap, React Router and Private Route.",
      img1: " https://i.ibb.co/cLhHvvf/find-doctor-1.png",
      img2: "https://i.ibb.co/QvKqHFC/find-doctor-4.png",
      img3: "https://i.ibb.co/hfPMj7X/find-doctor-3.png",
      img4: "https://i.ibb.co/56mJfdz/find-doctor-2.png",
    },
    {
      id: 4,
      name: "Skillup Training",
      projectOverview: [
        "This is a educational training center's website.",
        "There are four pages in this web site, these are home page, courses page, about us and contact us page.",
        "Every page has some teaching related content except contact us and login page.",
        "Every course item has a Buy Now Button",
        "This is a fronend only website",
      ],
      technology: "React, React Bootstrap",
      img1: "https://i.ibb.co/SnL4nQD/skillup-training-1.png",
      img2: "https://i.ibb.co/FXX24dT/skillup-training-2.png",
      img3: "https://i.ibb.co/hY700fJ/skillup-training-3.png",
      img4: "https://i.ibb.co/D1RswTW/skillup-training-4.png",
    },
    {
      id: 5,
      name: "Arrange A Concert",
      projectOverview: [
        "This is a singer-hiring website.",
        "This site will show the individual hiring rates for a singer.",
        "Also, count the total hired singers.",
        "And finally, show how much total amount to pay them.",
        "This is a fronend only website",
      ],
      technology: "HTML, CSS, Bootstrap",
      img1: "https://i.ibb.co/C0bTvfh/concert-1.png",
      img2: "https://i.ibb.co/YfShn6V/concert-2.png",
      img3: "https://i.ibb.co/qkHz9DB/concert-3.png",
      img4: "https://i.ibb.co/9HVtyDN/concert-4.png",
    },
    {
      id: 6,
      name: "Honda CBR",
      projectOverview: [
        "This is a fronend only website",
        "This is a motor bike selling website.",
        "The header area has a purchase button, When the user click on it, the modal will be open",
        "This site make with only html and bootstrap",
        "No user interaction implemented on this site",
      ],
      technology: "HTML, Bootstrap",
      img1: "https://i.ibb.co/L0cfZW2/honda-cbr-1.png",
      img2: "https://i.ibb.co/99B7y5D/honda-cbr-2.png",
      img3: "https://i.ibb.co/nMDdyrt/honda-cbr-3.png",
      img4: "https://i.ibb.co/kxSZz4M/honda-cbr-4.png",
    },
  ];

  var selected = fakeData.find((project) => project.id == projectId);

  console.log(selected);

  return (
    <Container className="project-details-container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Project Details
      </h1>
      <h3>Project Name: {selected.name}</h3>

      <h4>Used Technologys:</h4>
      <p>{selected.technology}</p>
      <h4>Project Overview:</h4>
      <ul>
        {selected.projectOverview.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>

      <button className="btn btn-dark">
        <a href="">Live</a>
      </button>
      <button className="btn btn-dark mx-3">
        <a href="">Client Side Code</a>
      </button>
      <button className="btn btn-dark">
        <a href="">Server Side Code</a>
      </button>
      <br />
      <br />
      <h3>Project Preview</h3>
      <br />
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src={selected.img1} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={selected.img2} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={selected.img3} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={selected.img4} class="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </Container>
    // <div>{isloading ? <h3>{selected.name}</h3> : <h1>Loading ...</h1>}</div>
  );
};

export default ProjectDetails;
