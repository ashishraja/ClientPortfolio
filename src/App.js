import React from 'react';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import About from './components/About/About.jsx';
import Home from "./components/Home/Home.jsx";
import Picasso from "./components/Picasso/Picasso.jsx";
import Walls from './components/Walls/Walls.jsx';
import FlickFuse from './components/FlickFuse/Flickfuse.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/picasso" element={<Picasso />} />
          <Route path="/walls" element={<Walls />} />
          <Route path="/flickfuse" element={<FlickFuse />} />
      </Routes>
    </Router>
  );
}

export default App;
