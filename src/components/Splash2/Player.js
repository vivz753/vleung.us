import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa"

const useAudio = url => {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ children, url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="relative" onClick={toggle}>
      {children}
      <div className="absolute text-center w-full inset-y-0 items-center flex justify-center text-yellow-700">
        {playing ? (<FaPause className="w-8 h-8"/>) : (<FaPlay className="w-8 h-8" />)}
      </div>
    </div>
  );
};

export default Player;