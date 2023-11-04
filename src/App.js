import './App.css';
import About from './components/About.js';
import CustomizedTimeline from './components/CustomizedTimeline.js';
import Navbar from './components/Navbar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles/index.js';
import { Paper } from '@mui/material/index.js';

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
        <ThemeProvider theme={darkTheme}>
        <Paper>
           
          <Navbar/>
          <About/>
          {/* <CustomizedTimeline/> */}

        </Paper>
      </ThemeProvider>
      </div>
    
  );
}

export default App;
