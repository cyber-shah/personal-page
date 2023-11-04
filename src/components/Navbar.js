import * as React from 'react';
import Box from '@mui/material/Box/index.js';
import Tabs from '@mui/material/Tabs/index.js';
import Tab from '@mui/material/Tab/index.js';
import { Typography } from '@mui/material/index.js';

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
            </Tabs>
        </Box>
    </>
    );
}
