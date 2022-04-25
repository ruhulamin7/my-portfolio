import React from "react";
import "./Banner.css";
import ruhul from "../../images/ruhul-pro.jpg";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container py-5 mb-5">
      <img className="frofile-img mb-5" src={ruhul} alt="" />
      <h3>Hey There!</h3>
      <h1>
        I AM
        <span style={{ color: "black" }}> RUHUL AMIN</span>
      </h1>
      <Typed
        strings={[
          "⭐Web Designer",
          "⭐Frontend Developer",
          "⭐MERN Stack Developer",
        ]}
        typeSpeed={40}
        backSpeed={30}
        loop
      />

      <br />
      <br />

      <button className="btn btn-dark">
        {" "}
        <Link
          style={{ textDecoration: "none", color: "white", marginTop: "30px" }}
          className="watch-live"
          href="https://drive.google.com/file/d/1lBdxq0HZCbx3VcX6R4Jn6EfiSfJDkZ0W/view?usp=sharing"
          target="_blank"
        >
          Download Resume
        </Link>
      </button>
      <br />

      <br />
    </div>
  );
};

export default Banner;
