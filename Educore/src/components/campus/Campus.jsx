import React from 'react'
import "./campus.css"
import gallery1 from "../../assets/gallery-1.png"
import gallery2 from "../../assets/gallery-2.png"
import gallery3 from "../../assets/gallery-3.png"
import gallery4 from "../../assets/gallery-4.png"
import icon from "../../assets/white-arrow.png"




const Campus = () => {
  return (
    <div classNameName="campus">
       
        <div classNameName="campus-images">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />

        </div>
        <button>See more Here <img src={icon} alt="" /></button>
    </div>
  )
}

export default Campus