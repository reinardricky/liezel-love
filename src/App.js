import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Journey from './components/journey';
import Yay from './components/Yay';
import Valentine from './components/Valentine';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/yay" element={<Yay/>} />
      <Route path="/valentine" element={<Valentine/>} />
    </Routes>
  </Router>
);

export default App;
