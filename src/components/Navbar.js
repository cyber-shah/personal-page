import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';


// Create a new component that wraps Tab inside Link
function LinkTab({ label, to, ...props }) {
    return (
      <Tab
        component="a"
        label={label}
        {...props}
        onClick={(event) => {
          event.preventDefault();
          window.history.pushState(null, '', to);
        }}
      />
    );
  }


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
                    {/* <Tab label="Home" index={0} component={Link} to={"/"}  /> */}
                    <Link to="/projects"><Tab label="Projects" /></Link>
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