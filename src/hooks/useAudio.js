import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  // const { dispatch, audioPlaying } = useGlobalState();

  const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
  const [playing, setPlaying] = useState(false);

  // const toggle = () => {
  //   setPlaying(!playing);
  //   // dispatch({ type: "audioPlaying", data: !audioPlaying })
  // }

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );
  // useEffect(() => {
  //     audioPlaying ? audio.play() : audio.pause();
  //   },
  //   [audioPlaying]
  // );

  // useEffect(() => {
  //   audio.addEventListener('ended', () => dispatch({type: "audioPlaying", data: false }) );
  //   return () => {
  //     audio.removeEventListener('ended', () => dispatch({type: "audioPlaying", data: false }) );
  //   };
  // }, []);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, setPlaying];
};

export default useAudio;