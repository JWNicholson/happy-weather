import React from 'react';

import Clock from './components/Clock/Clock'

import './App.css';

function App() {
  // api key and url
 const api = {
   baseUrl: process.env.REACT_APP_WTHR_API_BASE_URL,
   key: process.env.REACT_APP_WTHR_API_KEY
 }

 //build todays date - 

  let d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year =  new Date().getFullYear();


 //set states - query, weather

 //api call
    //set weather state with results

  return (
    <div className="happy-wthr-app">
      <h1>Happy Weather</h1>

    {/** check if weather data exists- if yes check temp to assigne appropriate background (hot or cold) else null */}

    <main className="content-wrapper">
    {/* user search input  */}

    {/* check if location data exists - if yes render name and country else null */}

      {/* render date */}
      <Clock />

      {/* render temp */}

      {/* render weather conditions */}
      </main>
    </div>
  );
}

export default App;
