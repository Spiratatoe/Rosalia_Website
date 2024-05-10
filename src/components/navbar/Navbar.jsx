import React, { useState } from 'react'
// import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri' //icons??
import './navbar.css'
import logo from '../../assets/Rosalia_logo.png'
import {Link, useMatch, useNavigate, useResolvedPath} from "react-router-dom"
import * as i18n from "i18next";
import {useTranslation} from "react-i18next";
import {faGlobe, faLanguage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Navbar = () => {

    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

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

                    <CustomLink to="/" className='logo_text'> ROSALIA </CustomLink>
                </div>

                <div className='navbar_links'>
                    <CustomLink to="/">{t("navbar.option_1")}</CustomLink>
                    <CustomLink to="/project" >{t("navbar.option_2")}</CustomLink>
                    <CustomLink to="/plans" >{t("navbar.option_3")}</CustomLink>
                    <CustomLink to="/contact" >{t("navbar.option_4")}</CustomLink>
                    <p className='title_not_link'><FontAwesomeIcon icon={faGlobe} /></p>
                    <a onClick={() => handleChangeLanguage("fr")}> FR </a>
                    <a onClick={() => handleChangeLanguage("en")}> ENG </a>
                </div>

            </div>

        </div>
    )
}




export default Navbar