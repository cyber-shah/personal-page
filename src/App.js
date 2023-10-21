import './App.css';
import { About } from './components/About';
import CustomizedTimeline from './components/CustomizedTimeline';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';

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
  return (
    
      <div className='App'>
        <ThemeProvider theme={darkTheme}>
        <Paper>
           
          <Navbar/>
          <About/>
          <CustomizedTimeline/>

        </Paper>
      </ThemeProvider>
      </div>
    
  );
}

export default App;
