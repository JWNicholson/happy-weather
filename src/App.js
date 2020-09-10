import React from 'react';
import './App.module.css';

import Clock from './components/Clock/Clock'
import GetWeather from './components/GetWeather/GetWeather';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
    <main className="content-wrapper">
    {/* user search input  */}

      {/* render time 7 date */}
      <Clock />

      {/* render weather conditions */}
      <GetWeather />
     
      </main>
     <Footer />
    </div>
  );
}

export default App;
