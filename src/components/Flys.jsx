// FlightPhoto.js
import React, { useEffect, useState } from "react";
import flightImage from "../assets/36b044_78d04e35c23a4d0288ccf2d53.png";
// import flightImage from "../assets/dronbg/5d82d0139564113.6231e385d572a.png";
import "./Flys.css";

const FlightPhoto = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      // Adjust the left position based on the scroll position
      setLeftPosition(currentPosition * 0.8); // You can adjust the factor as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTopPosition = () => {
    if (window.innerWidth > 1300) {
      // Adjust the top position for large screens
      return scrollPosition > window.innerHeight / 1
        ? "80%"
        : `${scrollPosition}px`;
    } else {
      // Adjust the top position for smaller screens
      return scrollPosition > window.innerHeight / 1.3
        ? "80%"
        : `${scrollPosition}px`;
    }
  };

  const getRightPosition = () => {
    if (window.innerWidth > 1300) {
      // Adjust the right position for large screens
      return scrollPosition > window.innerHeight / 1.8
        ? "55%"
        : `${leftPosition}px`;
    } else {
      // Adjust the right position for smaller screens
      return scrollPosition > window.innerHeight / 1.3
        ? "45%"
        : `${leftPosition}px`;
    }
  };

  return (
    <div
      className="flight-photo"
      style={{
        top: getTopPosition(),
        right: getRightPosition(),
      }}
    >
      <img
        src={flightImage}
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
        alt="Flight"
      />
    </div>
  );
};

export default FlightPhoto;
