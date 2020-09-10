import React from 'react';

import Clock from './components/Clock/Clock'

import './App.css';
import GetWeather from './components/GetWeather/GetWeather';

function App() {
 

 //build todays date - 

  


 //set states - query, weather

 //api call
    //set weather state with results

  return (
    <div className="happy-wthr-app">
      <header>
      <h1>Happy Weather</h1>
      </header>
    {/** check if weather data exists- if yes check temp to assigne appropriate background (hot or cold) else null */}

    <main className="content-wrapper">
    {/* user search input  */}

    {/* check if location data exists - if yes render name and country else null */}

      {/* render date */}
      <Clock />

      {/* render temp */}

      {/* render weather conditions */}
      <GetWeather />
     
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  );
}

export default App;
