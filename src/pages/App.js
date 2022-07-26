import React from "react";
import {Routes,Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import ErrorPage from './ErrorPage'
import Navbar from '../components/Navbar'

function App(){
    return(
        <div>
        <Navbar />
        <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path="/" element={<Home />}/>{/* When the Url matches this path, render this component */} 
        <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </div>
    )
}
export default App;