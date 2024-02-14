import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./timeline.css";

const Timeline = () => {
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

  const item1Props = useSpring({
    opacity: scrollPosition > 300 ? 1 : 0,
    transform: `translateY(${scrollPosition > 300 ? 0 : 100}px)`,
    config: { duration: 700 },
  });

  const item2Props = useSpring({
    opacity: scrollPosition > 400 ? 1 : 0,
    transform: `translateY(${scrollPosition > 400 ? 0 : 100}px)`,
    config: { duration: 900 },
  });

  const item3Props = useSpring({
    opacity: scrollPosition > 500 ? 1 : 0,
    transform: `translateY(${scrollPosition > 500 ? 0 : 100}px)`,
    config: { duration: 1300 },
  });

  return (
    <div>
      <ul
        className="timeline"
        style={{ display: scrollPosition > 200 ? "block" : "none" }}
      >
        <animated.li style={item1Props}>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag"></span>
              <span className="time-wrapper">
                <span className="time"></span>
              </span>
            </div>
            <div className="desc">
              <span style={{ color: "red" }}>Alerts</span>
              <br />A range of alerts helps the pilot by warning him about
              important matters like altitude limits, battery level, etc.My
              current employment. Way better than the position before!
            </div>
          </div>
        </animated.li>

        <animated.li style={item2Props}>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag"></span>
              <span className="time-wrapper">
                <span className="time"></span>
              </span>
            </div>
            <div className="desc">
              <span style={{ color: "red" }}>Nextgen GNSS</span>
              <br />
              Thanks to GNSS receivers integrating latest positioning systems
              like Galileo, our systems have reliable, high speed and strong
              satellite link. This ensures quality positioning information at
              all time.
            </div>
          </div>
        </animated.li>

        <animated.li style={item3Props}>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag"></span>
              <span className="time-wrapper">
                <span className="time"></span>
              </span>
            </div>
            <div className="desc">
              <span style={{ color: "red" }}>Live telemetry</span>
              <br />
              Complete and realtime data are available for instant monitoring.
              It can be followed thanks to a tablet or computer.
            </div>
          </div>
        </animated.li>
      </ul>
    </div>
  );
};

export default Timeline;
