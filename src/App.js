import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer";

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const cityWeather = async (city) => {
    const response = await fetch(
      `${URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    setWeather(data);
    setQuery("");
  };

  useEffect(() => {
    cityWeather("tokyo");
  }, []);

  const search = async (e) => {
    if (e.key === "Enter") {
      await cityWeather(query);
    }
  };

  return (
    <WeatherContainer
      query={query}
      setQuery={setQuery}
      search={search}
      weather={weather}
    />
  );
};

export default App;
