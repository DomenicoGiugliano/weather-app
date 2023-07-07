import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import Error from "./components/Error";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

function App() {
  const [city, setCity] = useState("naples");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      if (data !== null) {
        setWeather(data);

        const threshold = units === "metric" ? 20 : 60;
        if (data.temp <= threshold) setBg(coldBg);
        else setBg(hotBg);
      } else setWeather(null);
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.target.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather ? (
          <div className="container">
            <Header
              handleUnitsClick={handleUnitsClick}
              enterKeyPressed={enterKeyPressed}
            />
            <MainSection weather={weather} units={units} />
            <Descriptions weather={weather} units={units} />
          </div>
        ) : (
          <Error enterKeyPressed={enterKeyPressed} />
        )}
      </div>
    </div>
  );
}

export default App;
