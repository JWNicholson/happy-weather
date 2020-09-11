import React from 'react';
import styles from './WeatherCard.module.css';
import Clock from '../Clock/Clock';
import { 
     Grid, Typography, Box,  
} from '@material-ui/core';


function capitalize_eachWord (str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


function WeatherCard(
    {
     locationName,
     main,
     description,
     mainTemp,
     feels_like,
     weatherIcon,
    }) {

    let capDescription = capitalize_eachWord(description);

    return (
        <Grid container  spacing={3} direction="column" alignContent="center">
        {/** check if weather data exists- if yes check temp to assigne appropriate background -hot or cold(future feature) else error message */}
        {locationName && main ? 
           
        <Grid item xs={12} md={6} alignSelf="center" className={styles.weatherCard}>
             {/* render time & date */}
          <Box>
            <Clock />
          </Box> 
          {/* render current weather */}
          <Typography variant="h5">
            Current weather for {locationName}
          </Typography>
          <Typography variant="h6">
            Temp: {Math.round(mainTemp)} <span>F&deg;</span>
           </Typography>
           <Typography variant="h6">
             Feels like {Math.round(feels_like)} <span>F&deg;</span>
           </Typography>
           <Typography >
               Main Conditions: {main}
           </Typography>
           {/* render weather icon and description */}
           <Box >
             <img src={"http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"} alt="weather icon"/>
              <Typography >
                {capDescription}
              </Typography>
            </Box>
      </Grid>
    :
    <h2 className="error">I couldn't find that information. Are you sure you spelled the city right?</h2>
        }
</Grid>  
    )
}

export default WeatherCard
