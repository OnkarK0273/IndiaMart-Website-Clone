import './App.css';

import Footer from './components/home/Footer';
import Navbar from './components/home/Nav';

import AllRoutes from './routes/AllRoutes';
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation()
  return (

    <div className='App' >
      {
        location.pathname === '/adminDashboard' || location.pathname === '/addProduct' ? false :  <Navbar/>
      }
  
      <AllRoutes/>

      {
        location.pathname === '/adminDashboard' || location.pathname === '/addProduct' ? false :  <Footer/>
      }
      
    </div>
  );
}

export default App;
