import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center p-12">
    <h1 className="text-4xl text-pink-500 mb-4">Hey Liezel,</h1>
    <p className="text-lg mb-8">I've made something special for you. Click below to see why.</p>
    <Link to="/about" className="text-white bg-pink-500 py-2 px-4 rounded-lg hover:bg-pink-600">Click Here</Link>
  </div>
);

export default Home;