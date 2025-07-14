import React, { useRef } from 'react'
import "./testimonial.css"
import next from "../../assets/next-icon.png";
import back from "../../assets/back-icon.png"
import user1 from "../../assets/user-1.png"
const Testimonial = () => {
    const slider = useRef(null)
    const nextRef = useRef(null)
    const backRef = useRef(null)

    let tx = 0;


const slideForward = ()=>{
     if(tx > -50)
        tx -=25
    slider.current.style.transform = `translateX(${tx}%)` 
    // button disabled color for next
    if(tx == -50){
    nextRef.current.style.backgroundColor= "#d3d3d3";
    nextRef.current.style.cursor = "not-allowed";
}else if(tx > -50){
    nextRef.current.style.backgroundColor= "#212EA0";
    nextRef.current.style.cursor = "pointer";


}
//  for back 
if(tx == 0 ){
    backRef.current.style.backgroundColor = "#d3d3d3";
    backRef.current.style.cursor = "not-allowed";

}else if(tx < 0){
    backRef.current.style.backgroundColor= "#212EA0";
    backRef.current.style.cursor = "pointer";
   
}

}

const slideBackward = ()=>{
     if(tx < 0)
        tx +=25
    slider.current.style.transform = `translateX(${tx}%)`;

    // button disabled color for next
    if(tx == -50){
    nextRef.current.style.backgroundColor= "#d3d3d3";
    nextRef.current.style.cursor = "not-allowed";
}else if(tx > -50){
    nextRef.current.style.backgroundColor= "#212EA0";
    nextRef.current.style.cursor = "pointer";


}
//  for back 
if(tx == 0 ){
    backRef.current.style.backgroundColor = "#d3d3d3";
    backRef.current.style.cursor = "not-allowed";

}else if(tx < 0){
    backRef.current.style.backgroundColor= "#212EA0";
    backRef.current.style.cursor = "pointer";
   
}
    
}
 

  return (

   <div className="testimonial">
    {/* <p className="testi-name">TESTIMONIALS</p>
    <h3 className="testi-title">What Student Says
    </h3> */}
    <div className="slider">

        <img src={back} alt="" className='btn back'  onClick={slideBackward} ref={backRef}/>
        <img src={next} alt="" className='btn next' onClick={slideForward} ref={nextRef} />
        <div className="cards">
            <ul ref={slider}>
               
               
            <li>
                <div className="card">
                <div className="upper">
                    <div className="img">
                        <img src={user1} alt="" className='user-img' />
                    </div>
                    <div className="naming">
                        <h2 className="name">Emily Williams 1</h2>
                        <p className="detail">Edusity, USA</p>
                    </div>
                </div>
                <div className="lower">
                      <p className="testi-description">
                      Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                      </p>
                </div>
            </div>
                </li>

                <li>
                <div className="card">
                <div className="upper">
                    <div className="img">
                        <img src={user1} alt="" className='user-img' />
                    </div>
                    <div className="naming">
                        <h2 className="name">Emily Williams 2</h2>
                        <p className="detail">Edusity, USA</p>
                    </div>
                </div>
                <div className="lower">
                      <p className="testi-description">
                      Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                      </p>
                </div>
            </div>
                </li>

                <li>
                <div className="card">
                <div className="upper">
                    <div className="img">
                        <img src={user1} alt="" className='user-img' />
                    </div>
                    <div className="naming">
                        <h2 className="name">Emily Williams 3</h2>
                        <p className="detail">Edusity, USA</p>
                    </div>
                </div>
                <div className="lower">
                      <p className="testi-description">
                      Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                      </p>
                </div>
            </div>
                </li>
                <li>
                <div className="card">
                <div className="upper">
                    <div className="img">
                        <img src={user1} alt="" className='user-img' />
                    </div>
                    <div className="naming">
                        <h2 className="name">Emily Williams 4</h2>
                        <p className="detail">Edusity, USA</p>
                    </div>
                </div>
                <div className="lower">
                      <p className="testi-description">
                      Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                      </p>
                </div>
            </div>
                </li>
            </ul>
           



      
        </div>
    </div>
   </div>
  )
}

export default Testimonial