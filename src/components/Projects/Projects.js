import React from 'react';
import Cards from './Cards'
import { Typography } from '@mui/material';

function Projects() {
  const style = {
    Main : {
      height : '100vh',
      padding : '2vh',
    },
    Cards : {
      padding : '2vh'
    }
  }
  return (
    <div className='Main' style={style.Main}>
      <Typography variant='h3'>
        Projects
      </Typography>
      <div className='Cards' style={style.Cards}>
        <Cards/>
      </div>
    </div>
  )
}

export default Projects;
