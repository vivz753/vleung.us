import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Footer from "./MyFooter"
import Header from "./MyHeader";
import { useGlobalState } from "../hooks/useGlobalState";
import useAudio from "../hooks/useAudio";

const MyLayout = ({ children }) => {

  const url="https://orangefreesounds.com/wp-content/uploads/2016/02/Debussy-arabesque-no-1.mp3?_=1";
  const songs = {
    "https://orangefreesounds.com/wp-content/uploads/2016/02/Debussy-arabesque-no-1.mp3?_=1" : "Arabesque No. 1 - Debussy"
  }
  const [ playing, setPlaying] = useAudio(url);

  const { audioPlaying, dispatch } = useGlobalState();

  useEffect(() => {
    // update global when the song ends
    dispatch({ type: "audioPlaying", data: playing })
  }, [playing])

  useEffect(() => {
    // toggle the audio when any component modifies the global state
    setPlaying(audioPlaying);
  }, [audioPlaying]);

  return (
    <div className="flex flex-col h-full min-h-screen">
      <Header className="z-30"/>
      <main>
        {children}
      </main>
      <Footer song={audioPlaying && songs[url]} className="z-30"/>
    </div>
  );

};

MyLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyLayout;
