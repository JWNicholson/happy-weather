import React from 'react'

function WeatherCard(
    {
     locationName,
     main,
     description,
     mainTemp,
     feels_like,
     weatherIcon,
    }) {

    return (
        <div className="wthr-card">
            <h2>Current weather for {locationName}</h2>
           <h3>Current Temp: {mainTemp}</h3>
            <h3>Feels like {feels_like}</h3>
            <h3>Main Conditions: {main}</h3>
            <img src={"http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"} alt="weather icon"/>
            <h4>{description}</h4>
        </div>
    )
}

export default WeatherCard
