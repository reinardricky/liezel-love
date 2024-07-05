import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Memories from './components/Memories';
import Question from './components/Question';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/question" element={<Question />} />
    </Routes>
  </Router>
);

export default App;
