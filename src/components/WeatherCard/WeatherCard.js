import React from 'react';
//import styles from './WeatherCard.module.css';
import Clock from '../Clock/Clock';
import { 
     Grid, Typography, Box,  
} from '@material-ui/core';

function capitalize_eachWord (str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}



function WeatherCard(
    ) {

    let description = capitalize_eachWord("foo bar");


    return (
        <Grid container  spacing={3} direction="column" alignContent="center">
           
                  <Grid item xs={12} md={6} alignSelf="center" >
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
                        {description}
                      </Typography>
                      </Box>
           
                </Grid>
              
         </Grid>   

       
    )
}

export default WeatherCard

