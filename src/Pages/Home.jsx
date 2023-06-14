import React, { useState, useEffect, useRef } from "react";

import Console from "../Components/Console";
import Over from "../Components/Over";
import Video from "../Components/Video";

const Home = () => {

  const [videoPlaying, setVideoPlaying] = useState(true); // Assuming the video is playing when the page loads
  const [gif, setGif] = useState(false);
  const audioRef = useRef(null);
  const bgMusicRef = useRef(null);



  useEffect(() => {
    const handleKeyDown = () => {
      setGif(true);
      setTimeout(() => setGif(false), 2000);
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (gif && audioRef.current) {
      audioRef.current.play();
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
      }
    } else if (!gif && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Optional: reset audio to the start
      if (videoPlaying && bgMusicRef.current) {
        bgMusicRef.current.play();
      }
    }
  }, [gif, videoPlaying]);

  return (
    <div className="home-wrapper">

      {gif ? <Over /> : null}
      <audio ref={audioRef} src={'/sounds/sound-gif-1.mp3'} />
      <audio ref={bgMusicRef} src={'/sounds/bg-music.mp3'} />


      <Video />
    </div>
  );
};

export default Home;
