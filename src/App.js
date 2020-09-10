import React from 'react';
import styles from './App.module.css';
import {
  Container, Grid
}from '@material-ui/core';


import GetWeather from './components/GetWeather/GetWeather';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header />
    <Container maxWidth="md" className={styles.App}>
      
    {/* user search input  */}


      {/* render weather conditions */}
      <GetWeather />
     
      </Container>
      
     <Footer />
     </>
    
  );
}

export default App;
