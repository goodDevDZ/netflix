import React from 'react'
import ReactDom from 'react-dom';
import FullVideo from './pages/fullVideo/FullVideo';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

import {BrowserRouter, Routes ,Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video" element={<FullVideo />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
