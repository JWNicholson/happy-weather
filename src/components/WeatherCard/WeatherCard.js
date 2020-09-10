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
            {/** check if weather data exists- if yes check temp to assigne appropriate background (hot or cold) else null */}
                    {locationName ? 
                     <>
                     <h2>Current weather for {locationName}</h2>
                     <h3>Temp: {mainTemp} <span>f&deg;</span></h3>
                      <h3>Feels like {feels_like} <span>f&deg;</span></h3>
                      <h3>Main Conditions: {main}</h3>
                      <img src={"http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"} alt="weather icon"/>
                      <h4>{description}</h4> 
                      </>
                    : 
                    <h2 className="error">I couldn't find that information. Are you sure you spelled the city right?</h2>
                    }
                    
        </div>
    )
}

export default WeatherCard
