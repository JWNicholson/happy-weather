import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import WeatherCard from '../WeatherCard/WeatherCard';



function GetWeather() {

 // api key and url
 
 const   BASEURL = process.env.REACT_APP_WTHR_API_BASE_URL;
 const   KEY = process.env.REACT_APP_WTHR_API_KEY;

const location = "Louisville";
const impUnits = "imperial";
//const metricUnits="metric";

//set states - query, weather
const [locationID, setLocationID] = useState('');
const [locationName, setLocationName] = useState('');
const [main, setMain] = useState('');
const [description, setDescription] = useState('');
const [mainTemp, setMainTemp] = useState('');
const [feels_like, setFeelsLike]= useState('');
const [weatherIcon, setWeatherIcon] = useState('');

useEffect(() => {
//axios api request
//set weather state with results
Axios
    .get(`${BASEURL}q=${location}&units=${impUnits}&appid=${KEY}`)
        .then((response) => {
            console.log("Response: ",response.data);
            // OpenWeather returns a multi-nested JSON object with arrays and objects within 
            setLocationID(response.data.id);
            setLocationName(response.data.name)
            setMain(response.data.weather[0].main);
            setDescription(response.data.weather[0].description);
            setMainTemp(response.data.main.temp);
            setFeelsLike(response.data.main.feels_like);
            setWeatherIcon(response.data.weather[0].icon);
            
        })
          .catch((error) => {
              alert("Fetch error: ", error);
          })
      
}, [BASEURL,KEY,location]);

    return (
        
       <>
       {console.log("Feels like: ", feels_like)}
        <WeatherCard 
            //use returned data here
            key={locationID}
            locationName={locationName}
            mainTemp={mainTemp}
            feels_like={feels_like}
            main={main}
            description={description}
            weatherIcon={weatherIcon}
        />
       </>
    )
}

export default GetWeather
