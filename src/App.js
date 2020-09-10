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
    <Container maxWidth="md" className={styles.App}>
      
    <Grid className={styles.contentWrapper}>
    <Header />

    {/* user search input  */}

     
      {/* render weather conditions */}
      <GetWeather />
     
      </Grid>
     <Footer />
    </Container>
  );
}

export default App;
