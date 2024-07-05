import React from 'react';

const Question = () => (
  <div className="text-center p-12">
    <h1 className="text-4xl text-pink-500 mb-8">Liezel, will you be my girlfriend?</h1>
    <button className="text-white bg-pink-500 py-2 px-4 rounded-lg m-4 hover:bg-pink-600" onClick={() => alert('Yay! I’m so happy!')}>Yes</button>
    <button className="text-white bg-pink-500 py-2 px-4 rounded-lg m-4 hover:bg-pink-600" onClick={() => alert('Oh no! But I respect your decision.')}>No</button>
  </div>
);

export default Question;

