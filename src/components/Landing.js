import {Typography} from '@mui/material/index.js';
import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Landing(props) {
    const styles = {
        About : {
            margin: '0 auto',
            width: '80vw',
            height: '90vh',
            'align-items': 'center',
          },
        
          text : {
            height: '30%',
            margin: '0 auto',
            'padding-top': '10%',
            'align-items': 'center',
          },
        
          Links : {
            width: '80%',
            height: '70%',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'flex-end', /* This will center items vertically */
            padding: '25px',
            gap : '4vw',
            margin: '0 auto', /* This will center the .Links div */
        }
    }
    return (
        <div className='About' style={styles.About}>
            <div className = 'text' style={styles.text}>
                <Typography variant='h6'>
                    Hey! I'm
                </Typography>
                
                <div>
                    <Typography variant = 'h1'>
                        Pranchal Shah
                    </Typography>
                </div>
                
                <Typography variant='h6'>
                    a full stack software developer and
                     MS Computer Science candidate at Northeastern University.
                    <br /> <br /> <br /> I am actively seeking co-op + internship opportunities where I can use
                    <br/> software to solve pressing business problems!
                </Typography>
            </div>

            <div className = "Links" style={styles.Links}>
                <Button color="secondary" startIcon={<LinkedInIcon />}>
                    Linkedin
                </Button>
                <Button color="secondary" startIcon={<GitHubIcon />}>
                    GitHub
                </Button>
                <Button color="secondary"  startIcon={<SendIcon />}>
                    Email
                </Button>
            </div>
        </div>
      );
};

export default Landing;