import React, { useState, useEffect } from "react";

const useAudio = (url) => {

  const [audio] = useState(typeof Audio !== "undefined" && new Audio());
  const [playing, setPlaying] = useState(false);

  useEffect(() => {

      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    
    // for Safari
    audio.play();
    audio.src = url;
    
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, setPlaying];
};

export default useAudio;
