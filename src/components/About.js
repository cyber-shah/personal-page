import { Box, Typography, Grid, Paper } from '@mui/material';
import React from 'react';
import personal_image from './personal-image.jpg';

export const About = () => {
  return (
    <Box sx={{bgcolor: 'background.paper', display: 'flex', justifyContent: 'center'}}>
    <Grid container maxWidth={'1200px'} margin='auto' sx={{bgcolor: 'background.paper'}}>
        <Grid item xs={12} md={6} sx={{padding : 2, maxHeight: '500px'}}>
            <Box sx={{p: 2, textAlign: 'left', maxHeight: '100%', overflowY: 'auto'}}>
            <img src={personal_image} alt="Custom Icon" 
                style={{ width: '450px', height: '450px', objectFit: 'contain', margin: 'auto' }}>
            </img>
            </Box>
        </Grid>
      
        <Grid item xs={12} md={6} sx={{padding : 2, maxHeight: '500px'}}>
            <Box sx={{p: 2, textAlign: 'left', maxHeight: '100%', overflowY: 'auto'}}>
                <Typography variant='h5'>
                    About
                </Typography>
                <Typography variant='p1' sx={{ whiteSpace: 'pre-line' }}>
                <br />I'm Pranchal Shah, a current Master's in Computer Science candidate at Northeastern University. 
                <br /><br />My passion for software development grew when I discovered computer vision, robotics, and augmented reality. Seeing how these emerging technologies could transform design and manufacturing ignited my curiosity to learn more.
                <br /><br />I am actively seeking co-op opportunities with companies specializing in IoT, Augmented Reality, Computer Vision, and Robotics. I aspire to leverage my unique blend of computer science proficiency and domain knowledge to use software to solve problems.
                </Typography>
            </Box>
        </Grid>
    </Grid>
    </Box>
  );
};
