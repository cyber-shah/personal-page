import React from 'react';
import Cards from './Cards'
import { Typography } from '@mui/material';

function Projects() {
  const style = {
    Main: {
      height: '100vh',
      padding: '2vh',
      margin: 'auto',
      maxWidth: '1200px'
    },
    Cards: {
      padding: '2vh'
    }
  };

  return (
    <div className='Main' style={style.Main}>
      <Typography variant='h3'>
        Projects
      </Typography>
      <div className='Cards' style={style.Cards}>
        <Cards
          title="Codebase Explorer"
          description="Codebase Explorer is an open-source project designed to facilitate a deeper understanding and effective management of a project's codebase. Offers valuable insights into the structure, dependencies, and performance metrics of your code."
          tags={['React', 'JavaScript', 'C++', 'Electron', 'D3']}
          github="https://github.com/cyber-shah/codebase-explorer"
          live=""
        />
      </div>
    </div>
  );
}

export default Projects;
