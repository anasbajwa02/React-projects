import React, { useRef } from 'react'
import "./vedio.css"
import video from "../../assets/vedio.mp4"
const VedioPlayer = (prop) => {
    const player = useRef(null);

    const handleOnClick =(e)=>{
        if(e.target === player.current){
            prop.setPlayState(false)
        }

    }
  return (
 <div classNameName={`vedio-player ${prop.playState ? " " : 'hide'}`  } onClick={handleOnClick} ref={player}>
    <video src={video} autoPlay muted controls></video>
 </div>
  )
}

export default VedioPlayer