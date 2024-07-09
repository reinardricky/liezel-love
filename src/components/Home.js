import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center p-12">
    <h1 className="text-4xl text-pink-500 mb-7 font-semibold">Helloo Liezel Sayang!</h1>
    <p className="text-lg mb-8">Aku buat sesuatu untuk kamu. Klik tombol di bawah {'<3'}</p>
    <Link to="/journey" className="text-white bg-pink-500 py-2 px-4 rounded-lg hover:bg-pink-600">Klik Aku :D</Link>
  </div>
);

export default Home;