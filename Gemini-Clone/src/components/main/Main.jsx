import React, { useContext } from 'react';
import "./main.css"
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,input,setInput,resultData } = useContext(Context);
   
  return (
    <div classNameName='main'>
        <div classNameName="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div classNameName="main-container">
           {!showResult ? <>
            <div classNameName="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I Help you today?</p>
            </div>
            <div classNameName="cards">
                <div classNameName="card">
                    <p>Suggest beautiful places to see on an upcoming road trip!</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div classNameName="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div><div classNameName="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div><div classNameName="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
           </>: <div classNameName='result'>
            <div classNameName="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div classNameName="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? <div classNameName="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>:<p dangerouslySetInnerHTML={{__html: resultData}}></p>  }
                
            </div>
            </div>
            }
      
        <div classNameName="main-bottom">
            <div classNameName="search-box">
                <input type="text" placeholder='Enter a Prompt here' onChange={(e)=>setInput(e.target.value)} value={input} />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" onClick={()=>onSent()} />

                </div>
            </div>
            
            <p classNameName="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
            </div>
        </div>
    </div>
  )
}

export default Main