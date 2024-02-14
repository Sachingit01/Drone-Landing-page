import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import FooterA from "./components/Footer/Footer";
// import Test from "./test/test";
import "./App.css";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <Header />
        <Home />
        <FooterA />
      </div>
      {/* <Test/> */}
    </>
  );
};

export default App;
