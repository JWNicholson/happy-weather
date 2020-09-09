import React, { useState, useEffect } from 'react'

function GetWeather() {

 // api key and url
 
 const   BASEURL = process.env.REACT_APP_WTHR_API_BASE_URL;
 const   KEY = process.env.REACT_APP_WTHR_API_KEY;

 const location = Louisville

//set states
const [main, setMain] = useState('');
const [desctiption, setDescription] = useState('');
const [mainTemp, setMainTemp] = useState('');
const [feels_like, setFeelsLike]= useState('');
const [icon, setIcon] = useState('');

useEffect(() => {
//axios request
}, []);

    return (
        <div>
            
        </div>
    )
}

export default GetWeather
