// Header.js
import React from "react";
import { useSpring, animated, config } from "react-spring";
import "./header.css";

const Header = () => {
  const headerAnimation = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
    config: config.slow,
    delay: 100,
  });

  return (
    <animated.div className="header" style={headerAnimation}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </animated.div>
  );
};

export default Header;
