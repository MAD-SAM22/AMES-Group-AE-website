import React, { useRef } from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({playState, setPlayState}) => {
  const player = useRef(null);
  
  const closePlayer = (e) => {
    if(e.target === player.current){
    
      setPlayState(false);
    }
  }

  return (
    <div className={`videoP ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <div className="video-container">
       { playState && <iframe 
          src="https://www.youtube.com/embed/4MBKVASa8f0?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen

        ></iframe>}
      </div>
    </div>
  )
}

export default VideoPlayer
