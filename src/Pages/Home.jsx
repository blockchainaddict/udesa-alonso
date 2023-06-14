import React, { useState, useEffect } from "react";

import Over from "../Components/Over";
import Video from "../Components/Video";

const Home = () => {
  const [gif, setGif] = useState(false);

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

  return (
    <div className="home-wrapper">
      
      {gif ? <Over /> : null}

      <Video />

    </div>
  );
};

export default Home;
