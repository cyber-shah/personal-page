import { Box, Typography, Grid, Paper } from '@mui/material/index.js';
import React from 'react';
import personal_image from './personal-image.jpg';
import './About.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';

const About = () => {
  return (
    <Box sx={{bgcolor: 'background.paper', display: 'flex', justifyContent: 'center'}}>
    <Grid container maxWidth={'1200px'} margin='auto' sx={{bgcolor: 'background.paper'}}>
        <Grid item xs={12} md={6} sx={{padding : 2, maxHeight: '500px'}}>
            <Box sx={{p: 2, textAlign: 'left', maxHeight: '100%', overflow : 'hidden'}}>
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

function AboutMUI(props) {
    return (
        <div className='About'>

            <div className = 'text'>
                <Typography variant='h6'>
                    Hey! I'm
                </Typography>
                
                <div className="text-wrapper">
                    <Typography variant = 'h1'>
                        Pranchal Shah
                    </Typography>
                </div>
                
                <Typography variant='h6'>
                    a current Master's in Computer Science candidate at Northeastern University. 
                    <br />I am actively seeking co-op opportunities with companies specializing <br /> in IoT, Augmented Reality, Computer Vision, and Robotics. 
                </Typography>
            </div>

            <div className = "Links">
                <Button variant="outlined" startIcon={<LinkedInIcon />}>
                    Linkedin
                </Button>
                <Button variant="outlined" startIcon={<GitHubIcon />}>
                    GitHub
                </Button>
                <Button variant="outlined" startIcon={<SendIcon />}>
                    Email
                </Button>
                <Button variant="outlined" startIcon={<InfoIcon />}>
                    Resume
                </Button>
            </div>
        </div>
      );
};

export default AboutMUI;