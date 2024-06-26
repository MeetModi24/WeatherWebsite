import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Github Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/meet-modi-a29b25253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          Meet Modi
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
