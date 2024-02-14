import React, { useEffect, useState } from "react";
import Drons from "../assets/heli.png";
import "./cursor.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  console.log(mousePosition);

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
        onMouseMove={handleMouseMove}
      >
        {JSON.stringify(mousePosition)}
        <img
          src={Drons}
          width={50}
          style={{ transform: `rotate(${mousePosition.x}deg)` }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Cursor;
