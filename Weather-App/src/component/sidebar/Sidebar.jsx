import React, { useContext ,useRef} from 'react'
import { assets } from '../../assets/assets';
import "./sidebar.css"
import { WeatherContext } from '../../Context/Context_Api';
import WeatherImage from './Weather';
const Sidebar = () => {
    const { weatherData, loading,setCity} = useContext(WeatherContext);
  if (loading) return console.log("loading");

// date and day 

const now = new Date();
const day = now.toLocaleDateString('en-US', { weekday: 'long' }); 

const hours = now.getHours();
   // "30/04/2025"

   const handelOnKeyDown = (e)=>{
      if(e.key == "Enter"){
        setCity(e.target.value)
        e.target.value = "";
      }
   }

//   const imgRef = useRef(assets.clear)
//   if(weatherData.weather[0].main == "Clear"){
//     // img.src="clear.png"
//     imgRef.current.src = assets.clear
//    }else if(weatherData.weather[0].main == "Clouds"){
//     imgRef.current.src = assets.clouds
//    }else if(weatherData.weather[0].main == "Drizzle"){
//     imgRef.current.src = assets.drizzle
//    }else if(weatherData.weather[0].main == "Mist"){
//     imgRef.current.src = assets.mist
//    }else if(weatherData.weather[0].main == "Smoke" ){
//     imgRef.current.src = assets.smoke
//    }else if(weatherData.weather[0].main == "Haze"){
//     imgRef.current.src = assets.haze
//    }else{
//     imgRef.current.src = assets.snow
//    }
  return <div className="sidebar">
    <div className="input">
    <input type="text" placeholder='Search For Place' onKeyDown={(e)=>handelOnKeyDown(e)} />
    {/* <img src={assets.search} alt="" /> */}
    </div>
    <div className="main-img">

        {/* <img src={assets.clear} alt="" /> */}
        <WeatherImage weatherMain={weatherData?.weather?.[0]?.main} />
    </div>
    <p className="temp">{weatherData.main.temp}°C</p><span>Feels like:{weatherData.main.feels_like}°C</span>
    <div className="date">
        <div>
            <p>{day}--</p>
        <span>{hours}:00</span>
        </div>
        
      <div>  <p>city : {weatherData.name}</p></div>
    </div>

    <p className="description">{weatherData.weather[0].main}</p>
    <div className="description">Country : {weatherData.sys.country}</div>

  </div>
}

export default Sidebar