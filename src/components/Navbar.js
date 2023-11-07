import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';


function NavbarMUI(props) {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const style = {
        Main: {  
            'align-items': 'center',
            display: 'flex',
            'justify-content': 'space-between',
            position: 'relative',
            width: '100wh',
            height : '10vh',
            p: 10,
        },
        left : {
            padding: '20px',
        }
        
    }

    return (
        <div className = "Main" style = {style.Main}>
            <div className="left" style = {style.left}>
                <Typography variant='h2' >
                    PS.
                </Typography>
            </div>
            <div className="SideText">
            
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example">
                    <Tab label="Home"/>
                    <Tab label="Projects" />
                    <Tab label="About" />
                    <Tab label="Contact" />
                    <Tab label="Resume" />
                    <Tab icon={<NightlightRoundIcon />} aria-label="Mode" />
                </Tabs>
            </div>
        </div>
    )
}
export default NavbarMUI;