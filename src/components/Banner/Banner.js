import React from "react";
import "./Banner.css";
import ruhul from "../../images/ruhul-pro.jpg";

const Banner = () => {
  return (
    <div className="banner-container py-5">
      <img className="frofile-img" src={ruhul} alt="" />
      <h1>Hello ! I'm Ruhul Amin</h1>
      <h3>A MERN stack developer</h3>
    </div>
  );
};

export default Banner;
