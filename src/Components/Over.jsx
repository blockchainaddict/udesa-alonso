import React, { useState } from 'react';

let videoList = ["/gif/gif_B1.gif", "/gif/gif_B2.gif", "/gif/gif_B3.gif"];

// function getRandomNumber() {
//   return Math.floor(Math.random() * 3);
// }

const Over = (props) => {

  return (
    <div className='over-wrapper'>
        <img src={videoList[props.video]} alt="gif" />
    </div>
  )
}

export default Over;