import React, {useTransition} from 'react'
import './home.css'

import display from '../../assets/Building_image.png'
import view from '../../assets/varennes_city.jpeg'
import bubbles from '../../assets/bubbles.svg'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLocationDot, faPhone, faRoad} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";


const Home = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <div >
            <div className='display_container'>
                <img  className='display_css' src={display} alt="building" />
            </div>


            <div className='discover_container'>
            <div className='view_container'>
                <img  className='view_css' src={view} alt="city" />
            </div>
                <div className='view_text_container'>
                    <p className='view_text'>{t("home.title_1")}</p>
                    <hr className='blue_line'/>
                    <p className='view_text_2'>{t("home.body_1")}</p>
                </div>
            </div>

            <div className='banner_size' style={{backgroundImage: `url(${bubbles})`, backgroundSize:"cover"}}>
                <p className='banner_text'>{t("home.title_2")}</p>
                <p className='banner_text_2'>{t("home.body_2")}</p>
                <div></div>
            </div>





            <div className="location_container">

                <div className="location_text" >
                    <div className='border_container'>
                    <h2>{t("home.title_3")}</h2>
                        <hr className='blue_line_2'/>

                            <p><FontAwesomeIcon icon={faRoad} /> : 2065 Rte Marie-Victorin </p>
                            <p><FontAwesomeIcon icon={faLocationDot} /> : Varennes, QC J3X 1R3</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> : spiratos3@yahoo.ca </p>
                            <p><FontAwesomeIcon icon={faPhone} /> : 514 886 5076</p>
                            <p><FontAwesomeIcon icon={faPhone} />  : 514 808 0674</p>


                    </div>
                </div>

                <div className="map_container">
                    <iframe width="100%" height="100%" minheight='600px' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=J3X%201R3+(Rosalia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/">gps devices</a></iframe>
                </div>
            </div>

        </div>
    )
}

export default Home