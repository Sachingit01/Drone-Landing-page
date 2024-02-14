// ImageViewer.js
import React, { useEffect, useState } from "react";
import "./Tcard.css";
import { useSpring, animated } from "react-spring";

const ImageViewer = () => {
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
  const spring3Props = useSpring({
    from: { opacity: 0, transform: "translateY(30%)" },
    to: {
      opacity: scrollPosition > 2000 ? 1 : 0,
      transform: scrollPosition > 2200 ? "translateY(0%)" : "translateY(30%)",
    },
    config: { duration: 1000 },
  });

  return (
    <>
      <animated.div style={spring3Props} className="Tcard-main">
        <div className="image-viewer_details__card"></div>
      </animated.div>
    </>
  );
};

export default ImageViewer;
