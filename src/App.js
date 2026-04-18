import NavBar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
 <div>
 
    <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
        <Routes>
          
           <Route path='/' element={<Home/>}></Route>
                      <Route path='/about' element={<About/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
      
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/signup' element={<Signup/>}></Route>
            {/* <Route path='dashboard' element={<Dashboard/>}></Route> */}
      
      </Routes>
     
    </div>
  );
}

export default App;


