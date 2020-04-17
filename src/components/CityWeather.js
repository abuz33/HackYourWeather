import React from 'react';


// city, countryCode, weatherMain, weatherDescription, tempMin, tempMax, lon, lat
const WeatherCard = ({ city, country, weatherMain, weatherDescription, tempMin, tempMax, lon, lat }) => {

    return (

        <div className='cont'>
            <h1 className='city'>{city}, {country}</h1>
            <div className='weatherDesc'>
                <h3 className='weatherMain'>{weatherMain}</h3>
                <p className='weatherDescription'> {weatherDescription} </p>
            </div>
            <div className='temperatureInfo'>
                <p className='tempMin'> Min Temp: {Math.floor(tempMin -273 ) * 10 / 10} </p>
                <p className='tempMax'> Min Temp: {Math.floor(tempMax -273 ) * 10 / 10} </p>
                <p className='location'> Location: {lon}, {lat} </p>
            </div>
        </div>
    )
}

export default WeatherCard;