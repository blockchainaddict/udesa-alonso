import React, { useState, useEffect, useRef } from "react";

import Over from "../Components/Over";
import Video from "../Components/Video";

// Create random number between 0 and 2
function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

const Home = () => {

  const [videoPlaying, setVideoPlaying] = useState(true); // Assuming the video is playing when the page loads
  const [gif, setGif] = useState(false);
  const [number, setNumber] = useState(0);

  const audioRef = useRef(null);
  const bgMusicRef = useRef(null);

  // To alternate the GIFs via props
  const [ videoIndex, setVideoIndex ] = useState(0);

  // To alternate the gifs via Props
  useEffect(() => {
    if (gif) { // Only update videoIndex if gif is truthy
      setVideoIndex(prevIndex => (prevIndex + 1) % 3); // This will cycle 0,1,2,0,1,2,...
    }
  }, [gif]); // This hook will run whenever gif changes

  // To make a keydown launch the Over component
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

    setNumber(getRandomNumber());
    console.log("N U M = = = =", number);

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
     
      {gif ? <Over video={videoIndex} /> : null}

      <audio ref={bgMusicRef} src={'/sounds/bg-music.mp3'} />
      <audio ref={audioRef} src={'/sounds/sound-gif-3.mp3'} />

      <Video />

    </div>
  );
};

export default Home;
