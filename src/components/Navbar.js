import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';

export default function Navbar(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    <>
        <Box sx={{width: '100%', bgcolor: 'background.paper', p : 5}}>
            <div>
                <Typography variant='h2'>Pranchal J. Shah</Typography>
            </div>
            
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="tertiary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
                centered>
                <Tab label="About" />
                <Tab label="Works" />
                <Tab label="Contact" />
                <Tab label="Links" />
            </Tabs>
        </Box>
    </>
    );
}
