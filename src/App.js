import "./styles.css";
import React, { useState } from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import VideoPlayer from './Componenets/VideoPlayer/VideoPlayer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About setPlayState={setPlayState} />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </Router>
    </div>
  );
}
