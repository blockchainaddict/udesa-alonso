import React, { useState, useEffect, useRef } from "react";

import Console from "../Components/Console";
import Over from "../Components/Over";
import Video from "../Components/Video";

const Home = () => {

  //
  const [gif, setGif] = useState(false);

  const audioRef = useRef(null);


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
    } else if (!gif && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Optional: reset audio to the start
    }
  }, [gif]);

  return (
    <div className="home-wrapper">

      {gif ? <Over /> : null}
      <audio ref={audioRef} src={'/sounds/keyboard-stress-36591.mp3'} />

      <Video />
    </div>
  );
};

export default Home;
