import { CssBaseline } from '@mui/material';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './Components/portfolio';
import AboutSec from './Pages/About';
import Contact from './Pages/Contact/Contact';
import HomeSec from './Pages/Home';
import PortfolioSec from './Pages/Portfolio';
import SkillsSec from './Pages/Skills/skills';
import {  ToastContainer } from 'react-toastify';
import LoadingSec from "../src/Pages/loading"
import { useState } from 'react';




function App() {
const [hide, setHide] = useState(false);
 setInterval(() => {
  setHide(true)
 }, 5000)

  return (
    <Router>
     <CssBaseline/>
     <ToastContainer/>
     {hide === true ?     <Routes> 
           <Route  element={<Portfolio/>}>
              <Route path='' element={<HomeSec/>}></Route>
              <Route path='about' element={<AboutSec/>}></Route>
              <Route path='portfolio' element={<PortfolioSec/>}></Route>
              <Route path='skills' element={<SkillsSec/>}></Route>
              <Route path='contact' element={<Contact/>}></Route>
           </Route>
      </Routes> : <LoadingSec/>
      }
  
      

    </Router>
       
     
  );
}

export default App;
