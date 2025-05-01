import { useContext, useEffect, useState } from "react";
import { assets } from '../../assets/assets';

import { WeatherContext } from "../../Context/Context_Api";
//  const{WeatherContext}=useContext(WeatherContext)
const WeatherImage = ({ weatherMain }) => {
  const [imageSrc, setImageSrc] = useState(assets.clear);
  useEffect(() => {
    switch (weatherMain) {
      case "Clear":
        setImageSrc(assets.clear);
        break;
      case "Clouds":
        setImageSrc(assets.clouds);
        break;
      case "Drizzle":
        setImageSrc(assets.drizzle);
        break;
      case "Mist":
        setImageSrc(assets.mist);
        break;
      case "Smoke":
        setImageSrc(assets.smoke);
        break;
      case "Haze":
        setImageSrc(assets.haze);
        break;
      default:
        setImageSrc(assets.snow);
    }
  }, [weatherMain]); // will re-run when weatherMain changes

  return <img src={imageSrc} alt="Weather Icon" />;
};

export default WeatherImage;
