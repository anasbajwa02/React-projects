import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { WeatherContext } from "../../Context/Context_Api";
const Main = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  if (loading) return console.log("loading");
  let timezone = weatherData.timeZone;
  let sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleString(
    "en-US",
    {
      timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, 
    }
  );
  let sunset = new Date(weatherData.sys.sunset * 1000).toLocaleString("en-US", {
    timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, 
  });


  return (
    <div classNameName="main">
      <div classNameName="top">
        <p classNameName="title">Current Weather</p>
        {/* <div classNameName="buttons">
          <button classNameName="celcius">C</button>
          <button classNameName="farnhit">F</button>
        </div> */}
      </div>

      <div classNameName="mid">
        <p>Today's Highlights</p>
      </div>
      <div classNameName="bottom">
        <div classNameName="cards">
          <div classNameName="card">
            <p classNameName="name">Pressure</p>
            <img src={assets.pressure} alt="" />
            <span>{weatherData.main.pressure} pa</span>
          </div>
          <div classNameName="card">
            <p classNameName="name">Humidity</p>
            <img src={assets.humidity} alt="" />
            <span>{weatherData.main.humidity}%</span>
          </div>
          <div classNameName="card">
            <p classNameName="name">Speed</p>
            <img src={assets.wind} alt="" />
            <span>{weatherData.wind.speed}</span>
            <span>m/s</span>
          </div>
          <div classNameName="card">
            <p classNameName="name">Gust</p>
            <img src={assets.wind} alt="" />
            <span>{weatherData.wind.gust}</span>
            <span>m/s</span>
          </div>
          <div classNameName="card spec-card">
            <p classNameName="name">Sun rise & sun set</p>
            <div classNameName="first">
              <img src={assets.up} alt="" />
              <p>{sunrise}</p>
            </div>
            <div classNameName="second">
              <img src={assets.down} alt="" />
              <p>{sunset}</p>
            </div>
          </div>
          <div classNameName="card spec-card">
            <p classNameName="name">Max & Min Temp</p>
            <div classNameName="first">
              <img src={assets.up} alt="" />
              <p>{weatherData.main.temp_max}°C</p>
            </div>
            <div classNameName="second">
              <img src={assets.down} alt="" />
              <p>{weatherData.main.temp_min}°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
