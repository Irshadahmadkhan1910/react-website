import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from "./footer";
const App=() => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/service' element={<Service/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    
    </Routes>
    <Footer />
    
    </>
  );
}

export default App;
