import "./index.css"
import KEY from "../API_KEY.js";
import Main from "./components/Main.jsx";
import WeatherCard from "./components/weatherCardContainer.jsx";
import {useState} from "react";

export default function App() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    async function getWeatherData() {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=Taganrog`
        );
        const data = await response.json();
        console.log(data);
    }

    return (
    <div className={'app'}>
      <Main>
          <button className={'button'} onClick={getWeatherData}></button>
          <h1 className={'app-title'}>Weather Widget</h1>
          <div className={'search-container'}>
              <input className={'search-input'} type='text' placeholder='Enter city name' />
          </div>
          <WeatherCard>
              <div className={'weather-details'}>
                  <h2>Taganrog, Russia</h2>
                  <img src="" alt="icon" className={'weather-icon'} />
                  <p className={'temperature'}>11 °C</p>
                  <p className={'condition'}>Cloudy</p>
                  <div className={'weather-details'}>
                      <p>Humidity: 20%</p>
                      <p>Wind: 22 m/s</p>
                  </div>

              </div>
          </WeatherCard>
      </Main>
    </div>
    )
}
