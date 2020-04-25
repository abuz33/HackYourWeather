import React, { useState } from 'react';
import SearchForm from './SearchForm';
import WeatherCard from './CityWeather';
import './Main.css';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;


const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState({
        "coord": {
            "lon": '',
            "lat": ''
        },
        "weather": [
            {
                "id": '',
                "main": "",
                "description": " clouds",
                "icon": ""
            }
        ],
        "base": "",
        "main": {
                "temp": '',
                "feels_like": '',
                "temp_min": '',
                "temp_max": '',
                "pressure": '',
                "humidity": ''
            },
        "visibility": '',
        "wind": {
                "speed": '',
                "deg": ''
            },
        "clouds": {
                    "all": ''
                },
        "dt": '',
        "sys": {
                "type": '',
                "id": '',
                "country": "",
                "sunrise": '',
                "sunset": ''
            },
        "timezone": '',
        "id": '',
        "name":'',
        "cod": ''
    });
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(false);

    console.log(process.env);
    const valueChanged = (e) => {
        setCity(e.target.value);
    }

    const formSubmitted = async (e) => {
        setIsloading(true);
        e.preventDefault();
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`);

            if (!res.ok) {
                throw new Error("Please insert a valid city name...");
            }
            
            const data = await res.json();

            setWeatherInfo(data);
        } catch (error) {
            setHasError(true);
            setError(error.message);
        }
    }


    return (
        <div>
            <SearchForm onSubmit={formSubmitted} onChange={valueChanged} />
            {hasError ? <p>{error}</p> :
                isLoading ?
                    <WeatherCard
                        city={weatherInfo.name}
                        country={weatherInfo.sys.country}
                        weatherMain={weatherInfo.weather[0].main}
                        weatherDescription={weatherInfo.weather[0].description}
                        tempMin={weatherInfo.main.temp_min}
                        tempMax={weatherInfo.main.temp_max}
                        lon={weatherInfo.coord.lon}
                        lat={weatherInfo.coord.lat} />
                    : <p>Enter a city name above</p> 
            }
        </div>
    )
}

export default Weather;