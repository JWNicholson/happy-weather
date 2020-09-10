import React from 'react';
import styles from './WeatherCard.module.css';
import Clock from '../Clock/Clock';
import { 
    Card, Grid 
} from '@material-ui/core';

function WeatherCard(
    // {
    //  locationName,
    //  main,
    //  description,
    //  mainTemp,
    //  feels_like,
    //  weatherIcon,
    // }
    
    ) {

    return (
        <Grid  item  xs={12} className={styles.wthrCard}>
                   <Card >
                       {/* render time & date */}
                    <>              
                        <Clock />
                    </>
                    {/* render current weather */}
                   <h2>Current weather for Louisville</h2>
                     <h3>Temp: 82 <span>f&deg;</span></h3>
                      <h3>Feels like 97 <span>f&deg;</span></h3>
                      <h3>Main Conditions: Clouds</h3>
                      <img src={"http://openweathermap.org/img/wn/02d@2x.png"} alt="weather icon"/>
                      <h4>few clouds</h4> 
                   </Card>
                    
        </Grid>

                    

       
    )
}

export default WeatherCard

