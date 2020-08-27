import React from "react";
import Cover from "./Cover";

function WeatherCard({ data, show }) {
  const icon = {
    Clouds: "fas fa-cloud",
    Rain: "fas fa-cloud-showers-heavy",
    Clear: "fas fa-cloud-sun",
    Snow: "fas fa-snowflake",
    Haze: "fas fa-smog",
  };

  if (typeof data.main !== "undefined" && !show) {
    return (
      <div className="weather-card">
        <h1 className="location">
          {data.name}, {data.sys.country}
        </h1>

        <h2 className="icon">
          <i className={icon[data.weather[0].main]}></i>
        </h2>
        <p className="temp">{Math.round(data.main.temp - 273)}°</p>

        <p className="minmax">
          <span>{Math.round(data.main.temp_min - 273)}°</span>
          <span>{Math.round(data.main.temp_max - 273)}°</span>
        </p>

        <p className="desc">{data.weather[0].description}</p>
      </div>
    );
  } else if (show) {
    return <h2 className="notification">Please enter a valid location.</h2>;
  } else {
    return <Cover />;
  }
}

export default WeatherCard;
