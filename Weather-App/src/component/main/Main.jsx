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
    <div className="main">
      <div className="top">
        <p className="title">Current Weather</p>
        {/* <div className="buttons">
          <button className="celcius">C</button>
          <button className="farnhit">F</button>
        </div> */}
      </div>

      <div className="mid">
        <p>Today's Highlights</p>
      </div>
      <div className="bottom">
        <div className="cards">
          <div className="card">
            <p className="name">Pressure</p>
            <img src={assets.pressure} alt="" />
            <span>{weatherData.main.pressure} pa</span>
          </div>
          <div className="card">
            <p className="name">Humidity</p>
            <img src={assets.humidity} alt="" />
            <span>{weatherData.main.humidity}%</span>
          </div>
          <div className="card">
            <p className="name">Speed</p>
            <img src={assets.wind} alt="" />
            <span>{weatherData.wind.speed}</span>
            <span>m/s</span>
          </div>
          <div className="card">
            <p className="name">Gust</p>
            <img src={assets.wind} alt="" />
            <span>{weatherData.wind.gust}</span>
            <span>m/s</span>
          </div>
          <div className="card spec-card">
            <p className="name">Sun rise & sun set</p>
            <div className="first">
              <img src={assets.up} alt="" />
              <p>{sunrise}</p>
            </div>
            <div className="second">
              <img src={assets.down} alt="" />
              <p>{sunset}</p>
            </div>
          </div>
          <div className="card spec-card">
            <p className="name">Max & Min Temp</p>
            <div className="first">
              <img src={assets.up} alt="" />
              <p>{weatherData.main.temp_max}°C</p>
            </div>
            <div className="second">
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
