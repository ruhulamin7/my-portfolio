import React from "react";
// import Particles from "react-particles-js";

import About from "../../components/About/About";
import Banner2 from "../../components/Banner2/Banner2";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <>
      <Banner2></Banner2>

      <About></About>

      <Projects></Projects>

      <Contact></Contact>
    </>
  );
};

export default Home;
