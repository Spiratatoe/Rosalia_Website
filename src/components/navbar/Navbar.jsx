import React from 'react'
import './navbar.css'
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {useTranslation} from "react-i18next";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Navbar = () => {

    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    //const navigate = useNavigate();
    // const handleLogoClick = () => {
    //     navigate('/');
    // }


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
                    <button className='language_button' onClick={() => handleChangeLanguage("fr")}> FR </button>
                    <button className='language_button' onClick={() => handleChangeLanguage("en")}> ENG </button>
                </div>

            </div>

        </div>
    )
}




export default Navbar