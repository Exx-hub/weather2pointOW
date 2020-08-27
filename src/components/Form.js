import React, { useState } from "react";

function Form({ getWeather }) {
  const [cityInput, setCityInput] = useState("");
  const [countryInput, setCountryInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput && countryInput) {
      getWeather(cityInput, countryInput);
      setCityInput("");
      setCountryInput("");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={countryInput}
          onChange={(e) => setCountryInput(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
}

export default Form;
