import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import personal_image from './personal-image.jpg';

export const About = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box sx={{ bgcolor: 'background.paper', p: 20 }}>
        <img src={personal_image} alt="Custom Icon" style={{ width: '325px', height: '300px' }}></img>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{padding : 10}}>
        <Box sx={{ bgcolor: 'background.paper', p: 2, textAlign: 'left'}}>
            <Typography variant='p1' sx={{ whiteSpace: 'pre-line' }}>
                <br />I am Pranchal Shah, a current Master's in Computer Science candidate at Northeastern University. 
                <br /><br />My passion for software development grew when I discovered computer vision, robotics, and augmented reality. Seeing how these emerging technologies could transform design and manufacturing ignited my curiosity to learn more.
                <br /><br />I am actively seeking co-op opportunities with companies specializing in IoT, Augmented Reality, Computer Vision, and Robotics. I aspire to leverage my unique blend of computer science proficiency and domain knowledge to use software to solve problems.
            </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
