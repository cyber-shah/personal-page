import { Typography } from "@mui/material";
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';;

function NavbarMUI(props) {
    const style = {
        Main: {  
            'align-items': 'center',
            display: 'flex',
            'justify-content': 'space-between',
            position: 'relative',
            width: '100wh',
            height : '10vh',
            p: 10,},
        
    }

    return (
        <div className = "Main" style = {style.Main}>
            <div className="left">
                <Typography variant='h2'>
                    PS.
                </Typography>
            </div>
            <div className="SideText">
                <Tabs
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="scrollable prevent tabs example"
                    >
                    <Tab label="Projects" />
                    <Tab label="About" />
                    <Tab label="Contact" />
                    <Tab icon={<NightlightRoundIcon />} aria-label="phone" />
                </Tabs>
            </div>
        </div>
    )
}
export default NavbarMUI;