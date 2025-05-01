
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Lahore");
  const apiKey = "fa9fa457c18b1696a22d0eb622a9206a";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setLoading(false);
      });
  }, [city]);

  return (
    <WeatherContext.Provider value={{weatherData,loading,setCity}}>
      {children}
    </WeatherContext.Provider>
  );
};
