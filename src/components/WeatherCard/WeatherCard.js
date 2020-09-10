import React from 'react';
//import styles from './WeatherCard.module.css';
import Clock from '../Clock/Clock';
import { 
     Grid, Typography, Box,  
} from '@material-ui/core';


function WeatherCard(
    
    ) {

    return (
        <Grid container spacing={3} m={4} direction="column" alignContent="center">
           
                  <Grid item xs={12} md={6} alignSelf="center">
                       {/* render time & date */}
                    
                        <Box>
                    <Clock />
                    </Box> 
                   
                    {/* render current weather */}
                    <Typography variant="h5">
                      Current weather for Louisville
                    </Typography>
                    <Typography variant="h6">
                      Temp: 82 <span>f&deg;</span>
                     </Typography>
                     <Typography varian="h6">
                       Feels like 97 <span>f&deg;</span>
                     </Typography>
                     <Typography >
                         Main Conditions: Clouds
                     </Typography>
                     
                     <Box >
                      <img src={"http://openweathermap.org/img/wn/02d@2x.png"} alt="weather icon"/>
                      <Typography >
                        few clouds
                      </Typography>
                      </Box>
           
                </Grid>
              
         </Grid>   

       
    )
}

export default WeatherCard

