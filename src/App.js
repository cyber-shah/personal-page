import './App.css';
import { About } from './components/About';
import CustomizedTimeline from './components/CustomizedTimeline';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className='App'>
      <Navbar/>
      <About/>
      <CustomizedTimeline/>
    </div>
  );
}

export default App;
