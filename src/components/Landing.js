import { Box, Typography, Grid, Paper } from '@mui/material/index.js';
import React from 'react';
import './Landing.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';

function Landing(props) {
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

export default Landing;