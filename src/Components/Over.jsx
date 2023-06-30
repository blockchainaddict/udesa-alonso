import React, { useState } from 'react';

let videoList = ["/gif/gif_B1.gif", "/gif/gif_B2.gif", "/gif/gif_B3.gif"];

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

const Over = () => {

  const [ video, setVideo ] = useState(0);

  // function videoAlternation (){
  //   if(video=0){
  //     setVideo(1)
  //   }
  //   else{
  //     setVideo(0)
  //   }
  // }

  return (
    <div className='over-wrapper'>
        <img src={videoList[getRandomNumber()]} alt="gif" />
    </div>
  )
}

export default Over;