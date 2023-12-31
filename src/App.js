import './App.css';
import Landing from './components/Landing.js';
import Navbar from './components/Navbar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles/index.js';
import { Paper } from '@mui/material/index.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import Resume from './components/Resume.js';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#000000'
    }
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  }
});

function App() {
  /* 
  1. create a variable called darkMode and init to false
  2. darkMode represents current state
  3. create a function called setDarkMode, where whenever
      you call setDarkMode(false) it makes darkMode false
      and so on and so forth
  **/
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // if true will set it to false and otherwise
    setDarkMode(!darkMode);
  }

  let selectedTheme;
  if (darkMode) {
    selectedTheme = darkTheme;
  } else {
    selectedTheme = lightTheme;
  }


  const style = {
    Main: {
      height: '100vh',
    },
  }

  return (
    <div className='App' style={style.Main}>
      <ThemeProvider theme={selectedTheme}>
        <Paper>
          <Router>
            {/* pass a function inside Navbar so basically you can call the 
            function from the navbar component */}
            <Navbar toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Router>

        </Paper>
      </ThemeProvider>
    </div>

  );
}

export default App;
