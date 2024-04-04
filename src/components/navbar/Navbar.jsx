import React, { useState } from 'react'
// import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri' //icons??
import './navbar.css'
import logo from '../../assets/Rosalia_logo.png'
import {Link, useMatch, useNavigate, useResolvedPath} from "react-router-dom"



const Navbar = () => {

    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    }


    function CustomLink( { to, children, ...props } ) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname, end: true})
        return (
            <Link className={isActive ? "active" : ""} to={to} {...props}> {children}</Link>
        )
    }

    return (
        <div >

            <div className='navbar_container'>

                <div>
                    <img  className='logo_css' src={logo} alt="logo"  onClick={handleLogoClick}/>
                </div>

                <div className='navbar_links'>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/project" > Project</CustomLink>
                    <CustomLink to="/condos" > Condos</CustomLink>
                    <CustomLink to="/plans" > Plans</CustomLink>
                    <CustomLink to="/contact" > Contact</CustomLink>
                </div>

            </div>

        </div>
    )
}




export default Navbar