import React, { useState } from 'react'
import './footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";


const Footer = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <div>

            <div className='footer_container'>
                <div className="custom-shape-divider-top-1715201741">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
                <div className='footer_info_container'>
                <div className="footer_contact">
                    <p className='footer_text_title'>{t("footer.title_1")}</p>
                    <p className='footer_text'>spiratos3@yahoo.ca </p>
                    <p className='footer_text'>514 886 5076</p>
                    <p className='footer_text'>514 808 0674</p>
                </div>
                <div className="footer_location">
                    <p className='footer_text_title'>{t("footer.title_2")}</p>
                    <p className='footer_text'>Varennes, QC J3X 1R3</p>
                    <p className='footer_text'>2065 Rte Marie-Victorin</p>
                </div>
                    <div className="footer_location">
                        <p className='footer_text_title'>{t("footer.title_3")}</p>
                        <p className='footer_text'>{t("footer.body_3")}</p>
                        <a className='footer_text' href="https://www.freepik.com/">Freepik</a>
                    </div>
                </div>

                <p className='footer_text_credit'>Spiratos</p>
                <p className='footer_text_credit'>© 2024</p>

            </div>
        </div>
    )
}




export default Footer