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
      {children}
      <div className="absolute text-center w-full inset-y-0 items-center flex justify-center text-yellow-700">
        {audioPlaying ? (<FaPause className="animate-spin-slow w-8 h-8"/>) : (<FaPlay className="w-8 h-8" />)}
      </div>
    </div>
  );
};

export default Player;