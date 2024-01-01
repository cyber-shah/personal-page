import React from 'react';
import Cards from './Cards'
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

function Projects() {
  const style = {
    Main: {
      height: '100vh',
      padding: '2vh',
      margin: 'auto',
      maxWidth: '1200px'
    },
    Cards: {
      padding: '2vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // adjust 300px to your needs
      gap: '2vh', // adjust gap as needed
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

        <Cards
          title="NBA StatsSphere"
          description="For Basketball fans who want to know more about their favorite players and teams, NBA StatsSphere is a web application that provides a comprehensive overview of the NBA. Users can view player and team statistics, as well as game results and upcoming schedules."
          tags={['React', 'JavaScript', 'Material UI', 'REST API', 'mySQL', 'Node.js', 'ExpressJS']}
          github="https://github.com/cyber-shah/nba-platform"
          live="https://nba-platform.vercel.app/"
        />

        <Cards
          title="P2P Trackpad"
          description="Turn your iPhone into a magic trackpad and unleash the power of gesture control on your Mac! MagicTrackpadX is an exciting project that allows you to use your iPhone as a sophisticated trackpad, seamlessly integrating with your Mac."
          tags={['Swift', 'UIKit', 'P2P', 'iOS App', 'macOS App']}
          github="https://github.com/cyber-shah/magicTrackpadX"
        />

        <Cards
          title="2048 Game"
          description="A clone of the 2048 game made using PyGame framework in python. It can be played with tiles of any power of 2. The game is won when the player reaches 2048."
          tags={['Python', 'PyGame', 'Game']}
          github=""
        />

        <Cards
          title="Heuristics & pathfinding "
          description="A grad level paper on different pathfinding algorithms and their performance on different types of mazes."
          tags={['Java', 'Python', 'Algorithms']}
          github="https://github.com/cyber-shah/graphs-paper"
        />

        <Cards
          title="PixelCraft Pro"
          description="A feature-rich image editing application using Java Swing for the user interface. Built the application from scratch, including the creation of a custom pixel class and the implementation of various filters, without relying on external libraries"
          tags={['Java', 'Swing', 'Image Processing']}
          github="https://github.com/cyber-shah/PixelCraft"
        />
      </div>
    </div>
  );
}

export default Projects;
