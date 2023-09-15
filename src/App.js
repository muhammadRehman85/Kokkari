import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/pages/About';
import Reservation from './components/pages/Reservation';
import PrivateDining from './components/pages/PrivateDining';
import Menues from './components/pages/Menues';
import Cuisine from './components/pages/Cuisine';
import Home from './components/pages/Home';
function App() {
  return (
    <div><Header/>
      
      <BrowserRouter> 
      <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/cuisine" element={<Cuisine/>}></Route>

    <Route path="/menue" element={<Menues/>}></Route>

    <Route path="/reservation" element={<Reservation/>}></Route>

    <Route path="/privatedining" element={<PrivateDining/>}></Route>

  </Routes>
  </BrowserRouter></div>
  )
}

export default App;