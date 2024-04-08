import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa"
import { useGlobalState } from "../../../hooks/useGlobalState"

const Player = ({ children, url}) => {
  // const [playing, toggle] = useAudio(url);
  // const [audioPlaying, toggle] = useAudio(url);

  const { audioPlaying, dispatch } = useGlobalState();
  
  const toggle = () => {
    dispatch({ type: "audioPlaying", data: !audioPlaying })
  }

  return (
    <div className="relative" onClick={toggle}>
      <button className="bg-yellow-500 rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-yellow-700 border-b-8 hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none">
        <div className="absolute text-center w-full inset-y-0 items-center flex justify-center text-yellow-800">
          {audioPlaying ? (<FaPause className="animate-spin-slow w-6 h-6 md:w-8 md:h-8"/>) : (<FaPlay className="w-6 h-6 md:w-8 md:h-8" />)}
        </div>
      </button>
    </div>
  );
};

export default Player;
