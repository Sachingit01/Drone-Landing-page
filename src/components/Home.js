import React from "react";
import { useSpring, animated, config } from "react-spring";
import "./main.css";
// import Dron from "./Dron";
import Fly from "./Flys";
// import { ReactComponent as Hexa } from "../assets/940398-200.svg";
// import SecOffer from "./sectionC/SecOffer";
import SectionD from "./sectionD/DronAnime";
import Timeline from "./sectionA/timeline";
import Hi from "./SectionE/hi";
import Marquee from "./sectionF/Marquee";
import SecG from "./SectionG/Tcard";

const textAnimation = {
  from: {
    opacity: 0,
    transform: "translateY(10px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
  config: config.slow, // Adjust the animation speed
  delay: 500,
};

const headAnimation = {
  from: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
  config: config.slow, // Adjust the animation speed
  delay: 200,
};

const imageAnimation = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  config: config.slow, // Adjust the animation speed
  delay: 1000,
};

const Home = () => {
  const [textSpring] = useSpring(() => textAnimation);
  const [imageSpring] = useSpring(() => imageAnimation);
  const [headSpring] = useSpring(() => headAnimation);

  return (
    <>
      <div className="section-container">
        <div className="section-title">
          <animated.div className="home-container" style={headSpring}>
            <h2 id="home-header__title">I'm spying on you.</h2>
          </animated.div>
          <animated.section className="product-section" style={textSpring}>
            <p className="product-text">
              <animated.span>
                Discover the latest trends and innovations.
              </animated.span>
            </p>
            <p className="product-text">
              <animated.span>
                Don't miss out on exclusive offers and deals!
              </animated.span>
            </p>
          </animated.section>
        </div>
        <div className="section-photo">
          <animated.div className="image-container" style={imageSpring}>
            <Fly />
          </animated.div>
        </div>
      </div>
      <section className="section-A">
        <div className="section-A__dronAnimi"></div>

        <animated.div className="section-B__dronAnimi">
          <Timeline />
        </animated.div>
      </section>
      <SectionD />
      <Hi />
      <Marquee />

      <SecG />

      {/* <SecOffer /> */}
    </>
  );
};

export default Home;
