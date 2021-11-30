import React from "react";
// import Particles from "react-particles-js";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Banner2 from "../../components/Banner2/Banner2";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
// import Particles from "react-particles-js";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
        }}
      /> */}

      <Banner2></Banner2>

      <About></About>

      <Projects></Projects>

      <Contact></Contact>
    </div>
  );
};

export default Home;
