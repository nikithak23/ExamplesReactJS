import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Topics from "./components/Topics";

const BasicExample = () =>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/topics" element={<Topics/>} />
      </Routes>
    </div>
  </Router>;

render(<BasicExample />, document.getElementById("root"));
