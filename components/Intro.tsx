import React, { useRef } from 'react';
 
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if (playVideo) {
      vidRef.current.pause();
    } else{
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video">
      <video
        src='../bgv.mp4'
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="app__video-overlay flex__center">
        <div 
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo 
            ? <BsPauseFill color="#fff" fontSize={30} />
            : <BsFillPlayFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;