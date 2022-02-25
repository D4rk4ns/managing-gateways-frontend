import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Overview from './pages/Overview';
import {GatewayList, GatewayUpdate, GatewayRemove} from './pages/Gateways';
import Device from './pages/Devices';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/overview' exact element={<Overview />} />
        <Route path='/gateways' exact element={<GatewayList/>} />
        <Route path='/devices' exact  element={<Device />} />
      </Routes>        
    </Router>
  );
}

export default App;
