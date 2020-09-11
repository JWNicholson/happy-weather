import React from 'react';
//import styles from './WeatherCard.module.css';
import Clock from '../Clock/Clock';
import { 
     Grid, Typography, Box,  
} from '@material-ui/core';


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
        <Grid container  spacing={3} direction="column" alignContent="center">
           
        <Grid item xs={12} md={6} alignSelf="center" >
             {/* render time & date */}
          
              <Box>
          <Clock />
          </Box> 
         
          {/* render current weather */}
          <Typography variant="h5">
            Current weather for {locationName}
          </Typography>
          <Typography variant="h6">
            Temp: {mainTemp} <span>f&deg;</span>
           </Typography>
           <Typography variant="h6">
             Feels like {feels_like} <span>f&deg;</span>
           </Typography>
           <Typography >
               Main Conditions: {main}
           </Typography>
           
           <Box >
             <img src={"http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"} alt="weather icon"/>
              <Typography >
                {description}
              </Typography>
            </Box>
 
      </Grid>
    
</Grid>  
    )
}

export default WeatherCard
