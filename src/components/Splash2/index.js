import React, { useState } from "react";
import ConfettiParty from "./Confetti";
import Player from "./Player";
import { FaBirthdayCake } from "react-icons/fa"

const Splash2 = () => {

  const [dropped, setDropped] = useState(-1);

  const dropConfetti = () => {
    console.log("dropping confetti")
    setDropped(dropped + 1);
    console.log(dropped)
  }


  return (
    <div className="relative overflow-hidden z-20 bg-yellow-100 w-full mx-auto items-center justify-center my-auto flex flex-col">
      <div className="w-full -mt-2">
        <ConfettiParty counter={dropped} /> 
      </div>
      <div className="w-1/2 h-full text-center py-64">
        <p className="text-2xl py-12">
          hey i'm vivian
        </p>
        <div className="flex flex-row justify-evenly w-full py-12">
          <button onClick={dropConfetti} className="text-center text-red-700 justify-center flex items-center bg-red-500 rounded-full w-32 h-32 border-red-700 border-b-8 hover:bg-red-600 focus:text-red-800">
            <FaBirthdayCake className="w-8 h-8" />
          </button>
          <Player url="https://orangefreesounds.com/wp-content/uploads/2016/02/Debussy-arabesque-no-1.mp3?_=1">
            <button className="bg-yellow-500 rounded-full w-32 h-32 border-yellow-600 border-b-8 hover:bg-yellow-600 focus:bg-yellow-700 focus:border-yellow-200">
            </button>
          </Player>
          <button className="bg-blue-500 rounded-full w-32 h-32 border-blue-700 border-b-8 hover:bg-blue-600 focus:bg-blue-700 focus:border-blue-200" />
        </div>
      </div>
    </div>
  )
}

export default Splash2