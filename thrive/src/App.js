import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar.jsx';
import Homepage from './Pages/Homepage.jsx';
import Goals from './Pages/Goals.jsx';
import Community from './Pages/Community.jsx';
import Login from './Pages/Login/Login.js';
import Footer from './Pages/Footer.jsx'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Login/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/goals" element={< Goals/>}/>
          <Route path="/community" element={< Community/>}/>
        </Routes>
        <Footer /> {/* Add the Footer component */}
      </Router>
    </div>
  );
}

export default App;
