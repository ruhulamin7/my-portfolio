import React from "react";
import "./Banner.css";
import ruhul from "../../images/ruhul-pro.jpg";

const Banner = () => {
  return (
    <div className="banner-container py-5 mb-5">
      <img className="frofile-img mb-5" src={ruhul} alt="" />
      <h1>
        Hello ! I'm <span style={{ color: "black" }}>Ruhul Amin</span>
      </h1>
      <h3 style={{ fontWeight: "300" }}>A MERN stack developer</h3>
    </div>
  );
};

export default Banner;
