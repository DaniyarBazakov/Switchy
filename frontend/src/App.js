// App.js (React component)
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';
import User from './pages/User'


function App() {
  return (
    
      
      
    <Router>
    
    <AllRoutes />
    
    
  </Router>
    
  );
}

export default App;