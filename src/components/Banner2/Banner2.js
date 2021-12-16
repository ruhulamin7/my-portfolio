import React from "react";
import "./Banner2.css";
import Typed from "react-typed";
import ruhul from "../../images/ruhul-pro.jpg";
import Particles from "react-tsparticles";

const Banner2 = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="banner2-container ">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 160,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 4,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 200,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="main-info">
        <img
          className="frofile-img my-3"
          src={ruhul}
          alt=""
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <h3 style={{ fontWeight: "300" }}>HEY THERE!</h3>
        <h1>
          I AM
          <span style={{ color: "orange" }}> RUHUL AMIN</span>
        </h1>

        <Typed
          className="typed-text"
          strings={[
            "💻 Web Designer",
            "💻 Web Developer",
            "💻 React Developer",
            "💻 MERN Stack Developer",
          ]}
          typeSpeed={30}
          backSpeed={20}
          loop
        />

        <div className="social-link">
          <a href="https://github.com/ruhulzero7" target="_blank">
            <i class="fab fa-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/ruhulzero7" target="_blank">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>

        <button className="resume-btn">
          {" "}
          <a
            className="watch-live"
            href="https://drive.google.com/file/d/1lBdxq0HZCbx3VcX6R4Jn6EfiSfJDkZ0W/view?usp=sharing"
            target="_blank"
          >
            <i class="fas fa-download"></i> Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner2;
