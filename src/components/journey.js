import React from "react";
import { Link } from "react-router-dom";

const Journey = () => (
  <div className="px-9 font-semibold">
    <div className="text-center w-full h-screen flex flex-col justify-center gap-10">
      <h1 className="text-4xl mb-7 text-center">9th June 2024</h1>
      <img
        src="/images/bee.svg"
        alt="bumble"
        className="w-1/2 mx-auto rounded-lg"
      />
    </div>
    <div className="text-center w-full h-screen flex flex-col justify-center gap-10">
      <h1 className="text-4xl mb-7 text-center">15th June 2024</h1>
      <img
        src="/images/cinema.svg"
        alt="cinema"
        className="w-1/2 mx-auto rounded-lg"
      />
      <img
        src="/images/sing.svg"
        alt="karaoke"
        className="w-1/2 mx-auto rounded-lg"
      />
    </div>
    <div className="text-center w-full h-screen flex flex-col justify-center gap-10">
      <h1 className="text-4xl mb-7 text-center">22nd June 2024</h1>
      <img
        src="/images/cards.svg"
        alt="cards"
        className="w-1/2 mx-auto rounded-lg"
      />
    </div>
    <div className="text-center w-full h-screen flex flex-col justify-center gap-10">
      <h1 className="text-4xl mb-7 text-center">29th June 2024</h1>
      <img
        src="/images/hug.svg"
        alt="hug"
        className="w-1/2 mx-auto rounded-lg"
      />
    </div>
    <div className="text-center w-full h-screen flex flex-col justify-center gap-10">
      <h1 className="text-4xl mb-7 text-center">4th July 2024</h1>
      <img
        src="/images/kiss.svg"
        alt="kiss"
        className="w-1/2 mx-auto rounded-lg"
      />
    </div>
    <div className="text-center w-full h-screen flex flex-col justify-center gap-10">
      <h1 className="text-4xl mb-7 text-center">13th July 2024</h1>
      <img
        src="/images/rose.svg"
        alt="rose"
        className="w-1/2 mx-auto rounded-lg"
      />
    
      <h1 className="text-4xl text-pink-500 mb-8">
        Kamu mau jadi pacar aku? 🥺
      </h1>
      <div className="flex justify-evenly">
        <Link
          to="/yay"
          className="text-white bg-pink-500 py-2 px-4 rounded-lg hover:bg-pink-600"
        >
          MAU!
        </Link>
        <Link
          to="/yay"
          className="text-white bg-pink-500 py-2 px-4 rounded-lg hover:bg-pink-600"
        >
          MAU BANGET!
        </Link>
      </div>
    </div>
  </div>
);

export default Journey;
