import './App.css';
import Landing from './components/Landing.js';
import Navbar from './components/Navbar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles/index.js';
import { Paper } from '@mui/material/index.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#000000' 
    }
  }
});

const lightTheme = createTheme({});
function App() {
  const style = {
    Main: {  
        height : '100vh',},
    }

  return (
    
      <div className='App' style={style.Main}>
        <ThemeProvider theme={lightTheme}>
        <Paper>
        <Navbar/>

          <Router>
            <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
          </Router>
          
        </Paper>
      </ThemeProvider>
      </div>
    
  );
}

export default App;
