import React from "react";
import "./Banner2.css";
import Typed from "react-typed";
import ruhul from "../../images/ruhul-pro.jpg";

const Banner2 = () => {
  return (
    <div className="banner2-container ">
      <div className="main-info">
        <img className="frofile-img my-5" src={ruhul} alt="" />
        <h3>HEY THERE!</h3>
        <h1>
          I AM
          <span style={{ color: "orange" }}> RUHUL AMIN</span>
        </h1>

        <Typed
          className="typed-text"
          strings={[
            "Web Designer",
            "Web Developer",
            "React Developer",
            "MERN Stack Developer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <button className="resume-btn">
          {" "}
          <a
            style={{
              textDecoration: "none",
              color: "white",
              marginTop: "30px",
            }}
            className="watch-live"
            href="https://drive.google.com/file/d/14kPP0Y2WNuayYaBDyYXpsXkD52hzrvji/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner2;
