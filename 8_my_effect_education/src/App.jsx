import "./index.css"
import KEY from "../API_KEY.js";
import Main from "./components/Main.jsx";
import WeatherCard from "./components/weatherCardContainer.jsx";
import TimerComponent from "./components/TimerComponent.jsx";
import {useEffect, useState} from "react";

export default function App() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [coords, setCoords] = useState(null);

    useEffect(() => {
        if(!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return
        }
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
           setCoords({latitude, longitude});
        }, (error) => {
            console.error("Geolocation error", error.message);
            setError("Failed to get geolocation");
        });
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        if(!city.trim() && !coords) {
            setWeatherData(null);
            setError(null);
            return;
        }

        async function getWeatherData() {
            setLoading(true);
            try {

                const query = city.trim() ? city : `${coords.latitude},${coords.longitude}`;

                const response = await fetch(
                    `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${query}`
                );
                const data = await response.json();
                if(data.error){
                    setError(data.error.message);
                } else {
                    setError(null);
                    setWeatherData(data);
                }
            } catch (error) {
                setWeatherData(null);
            } finally {
                setLoading(false)
            }
        }
        getWeatherData();
        return () => {
            controller.abort();
        }
    }, [city, coords])

    function renderError(){
        return <p>{error}</p>;
    }

    function renderLoading(){
        return <p>Loading...</p>;
    }

    function renderWeather(){
        return (
            <WeatherCard>
                <div className={'weather-details'}>
                    <h2>{weatherData?.location?.name}, {weatherData?.location?.country}</h2>
                    <img src={weatherData?.current?.condition?.icon} alt="icon" className={'weather-icon'} />
                    <p className={'temperature'}>{weatherData?.current?.temp_c} °C</p>
                    <p className={'condition'}>{weatherData?.current?.condition?.text}</p>
                    <div className={'weather-details'}>
                        <p>Humidity: {weatherData?.current?.humidity}%</p>
                        <p>Wind: {(weatherData?.current?.wind_kph / 3.6).toFixed(1)} m/s</p>
                        <p>Wind direction: {weatherData?.current?.wind_dir}</p>
                    </div>
                </div>
            </WeatherCard>
        )
    }

    return (
    <div className={'app'}>
        <TimerComponent />

        <Main>
            <h1 className={'app-title'}>Weather Widget</h1>
            <div className={'search-container'}>
              <input className={'search-input'} type='text' placeholder='Enter city name' onChange={(e) => setCity(e.target.value)} />
            </div>
              {error && renderError()}
              {loading && renderLoading()}
              {!error && !loading && weatherData && renderWeather()}
        </Main>
    </div>
    )
}
