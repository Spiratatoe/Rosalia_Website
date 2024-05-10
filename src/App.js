import React from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from "./components/navbar/Navbar";
import Plans from "./containers/plans/Plans";
import Project from "./containers/project/Project";
import Contact from "./containers/contact/Contact";
import Home from "./containers/home/Home";
import Footer from "./components/footer/Footer";

const App = () => {


    return (
        <div className='flex-wrapper'>

            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/project' element={<Project />} />
                <Route path='/plans' element={<Plans />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />

        </div>
    )
}
//27.22
export default App