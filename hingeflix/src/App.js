import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="app"> 
      <Router>
        <Routes>
          {/* <Route exact path="/test" element = {<h1>THis is s test man</h1>}/> */}
          <Route exact path="/" element={<HomeScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
