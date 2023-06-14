import React from 'react'

const Video = () => {
  return (
    <div>
        <iframe
          style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}
          src="https://www.youtube.com/embed/RhlQvbvMg-0?autoplay=1&mute=1&controls=0&loop=1&playlist=RhlQvbvMg-0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Video"
        />
    </div>
  )
}

export default Video