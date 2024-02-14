// ImageViewer.js
import React, { useEffect, useState } from "react";
import "./sa.css";
import { useSpring, animated } from "react-spring";
import Sass from "../../assets/dronbg/5d82d0139564113.6231e385d572a.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faVideo,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";

const ImageViewer = () => {
  //   const [rotation, setRotation] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  //   const handleMouseMove = (event) => {
  //     const { clientX: mouseX } = event;
  //     const viewer = document.getElementById("image-viewer");
  //     const { left, width } = viewer.getBoundingClientRect();
  //     const centerX = left + width / 5;
  //     const angle = ((mouseX - centerX) / width) * 360;

  //     setRotation(angle);
  //   };

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
      opacity: scrollPosition > 1600 ? 1 : 0,
      transform: scrollPosition > 1600 ? "translateY(0%)" : "translateY(30%)",
    },
    config: { duration: 1000 },
  });

  return (
    <>
      <div className="image-viewer-container">
        <animated.div
          style={spring3Props}
          id="image-viewer"
          className="image-viewer"
          //   onMouseMove={handleMouseMove}
          //   style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            style={{ height: "auto", width: "100%" }}
            src={Sass} // Replace with the path to your image
            alt="Rotating Drone"
          />
        </animated.div>
        <animated.div
          style={spring3Props}
          id="image-viewer"
          className="image-viewer_details"
        >
          <h1>Lorem Ipsum Lorem</h1>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>

          <h3 className="image-viewer_details_btn">
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </h3>
        </animated.div>
      </div>
    </>
  );
};

export default ImageViewer;
