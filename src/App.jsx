import { HashRouter as Router } from 'react-router-dom';

import Birthday from "../components/Birthday";
import Home from "../components/Home";
import "./App.css";
import React, { useState } from "react";
import { useRef } from "react";

function App() {
  const [show, setshow] = useState(true);
  const [inputval, setinputval] = useState("");

  const visible = () => {
    setshow(false);
  };

  return (
    <Router>
      {show ? (
        <>
          {" "}
          <div className="container">
            <p>I have Something special for you</p>
            <input
              value={inputval}
              onChange={(e) => setinputval(e.target.value)}
              type="text"
              placeholder="Enter your First Name..."
            />
            <button className="next-btn" onClick={visible}>
              Next
            </button>{" "}
          </div>
        </>
      ) : (
        <Birthday name={inputval} />
      )}

      <footer>  © Copyright 2025 Rohit Bhalekar .  All rights reserved.</footer>
    </Router>
  );
}

export default App;
