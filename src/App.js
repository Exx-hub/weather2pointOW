import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  const getWeather = async (city, country) => {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8a7ece7c8d9c1de8f1439a34f030c2ad`
      );

      console.log(result);
      setData(result.data);
    } catch (error) {
      console.log("failed to retrieve data");
      setShow(true);

      setTimeout(() => setShow(false), 2500);
    }
  };

  return (
    <div className="app">
      <Form getWeather={getWeather} />
      <WeatherCard data={data} show={show} />
    </div>
  );
}

export default App;
