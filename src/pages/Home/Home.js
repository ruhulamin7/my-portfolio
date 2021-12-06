import React from "react";
// import Particles from "react-particles-js";

import About from "../../components/About/About";
import Banner2 from "../../components/Banner2/Banner2";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Banner2></Banner2>

      <About></About>
      <Services></Services>

      <Projects></Projects>

      <Contact></Contact>
    </>
  );
};

export default Home;
