import React from 'react';

const About = () => (
  <div className="p-12">
    <h1 className="text-4xl text-pink-500 text-center mb-8">Our Journey</h1>
    <div className="text-center mb-8"><img src="photo1.jpg" alt="Photo of us" className="w-1/2 mx-auto rounded-lg" /></div>
    <div className="mb-8">
      <p className="text-lg text-center">Remember when we first met? [Short anecdote]</p>
    </div>
    <div className="text-center mb-8"><img src="photo2.jpg" alt="Another photo" className="w-1/2 mx-auto rounded-lg" /></div>
    <div className="mb-8">
      <p className="text-lg text-center">And this was one of our best moments... [Short anecdote]</p>
    </div>
  </div>
);

export default About;
