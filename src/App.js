//app.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home/home';
import Login from './components/Login/login';
import Signup from './components/Home/signup';
import Portal from './components/portal';
import {auth} from "./firebase";
//import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

             {/* <Route path="/" element={<Home />} /> */}
             {/* starting entry of application */}

             <Route path="/" element={<Signup />} />
             <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/portal" element={<Portal />} />
     
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
