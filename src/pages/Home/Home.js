import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
    </div>
  );
};

export default Home;