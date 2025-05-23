import React from 'react'
import './program.css'
import program1 from "../../assets/program-1.png"
import program2 from "../../assets/program-2.png"
import program3 from "../../assets/program-3.png"
import program_icon1 from "../../assets/program-icon-1.png"
import program_icon2 from "../../assets/program-icon-2.png"
import program_icon3 from "../../assets/program-icon-3.png"




const Program = () => {
  return (
    <div classNameName="program">
        
        <div classNameName="images">
            <div classNameName="main-image">
                <img src={program1} alt="" />
                <div classNameName="caption">
                    <img src={program_icon1} alt="" />
                    <p>Graduation Degree

</p>
                </div>
            </div>
            <div classNameName="main-image">
                <img src={program2} alt="" />
                <div  classNameName="caption">
                    <img src={program_icon2} alt="" />
                    <p>Masters Degree

</p>
                </div>
            </div>
             <div classNameName="main-image">
                <img src={program3} alt="" />
                <div classNameName="caption">
                    <img src={program_icon3} alt="" />
                    <p>Post Graduation

</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Program