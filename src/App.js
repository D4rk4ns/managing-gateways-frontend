import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Overview from './pages/Overview';
//import GatewayList from './pages/Gateways';
//import Device from './pages/Devices';
import Gateway from '../components/Gateway';
import Device from '../components/Device';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/overview'  element={<Overview />} />
        <Route path='/gateways'  element={<Gateway/>} />
        <Route path='/devices'   element={<Device />} />
      </Routes>        
    </Router>
  );
}

export default App;
