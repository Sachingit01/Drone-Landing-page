import React, { useState, useEffect } from "react";

const App = () => {
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

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const firstDivStyle = {
    height: "100vh",
    backgroundColor: "lightblue",
    padding: "20px",
    boxSizing: "border-box",
  };

  const secondDivStyle = {
    height: "100vh",
    backgroundColor:
      scrollPosition > window.innerHeight / 1.8 ? "red" : "lightgreen",
    padding: "20px",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      <div style={firstDivStyle}>
        {/* Content for the first div */}
        <h1>First Div</h1>
        <p>This is the content of the first div.</p>
      </div>

      <div style={secondDivStyle}>
        {/* Content for the second div */}
        <h1>Second Div</h1>
        <p>This is the content of the second div.</p>
      </div>
    </div>
  );
};

export default App;
