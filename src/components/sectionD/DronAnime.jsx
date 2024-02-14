import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Dron from "../Dron";
import "./dronAnimi.css";

const DronAnime = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateX(20%)" },
    to: {
      opacity: scrollPosition > 750 ? 1 : 0,
      transform: scrollPosition > 750 ? "translateX(0%)" : "translateX(-50%)",
    },
    config: { duration: 1000 },
  });
  const spring2Props = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: {
      opacity: scrollPosition > 850 ? 1 : 0,
      transform: scrollPosition > 850 ? "translateY(0%)" : "translateY(100%)",
    },
    // to: { opacity: 1, transform: "translateY(0%)" },
    config: { duration: 2000 },
  });

  return (
    <>
      <animated.div style={springProps}>
        <Dron />
      </animated.div>
      <animated.div style={{ ...spring2Props, textAlign: "center" }}>
        <h1 className="DronAnimiHead-text" style={{ marginTop: "0px" }}>
          Powerful, Yet Safe
        </h1>
        <p className="DronAnimiHead-text_para">
          After countless hours of research and testing, the Mav 2 has been
          optimally redesigned to increase propulsion, lower power consumption,
          and reduce noise. These subtle yet powerful improvements, along with
          an improved Flight Autonomy system, offer a smoother, quieter flight
          for greater discretion and safety.
        </p>
      </animated.div>
    </>
  );
};

export default DronAnime;
