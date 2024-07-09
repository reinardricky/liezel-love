import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Journey from './components/journey';
import Gallery from './components/Gallery';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/gallery" element={<Gallery/>} />
    </Routes>
  </Router>
);

export default App;
