import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;

  return (
    <div className="app"> 
      <Router>
        {!user ? (
          <LoginScreen/>
        ): (
          <Routes>
          {/* <Route exact/> */}
          <Route exact path='/' element={<HomeScreen/>}/>
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
