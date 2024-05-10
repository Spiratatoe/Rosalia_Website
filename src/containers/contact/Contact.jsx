import React from 'react'
import './contact.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone, faRoad} from "@fortawesome/free-solid-svg-icons";
import contact from "../../assets/contact.svg";
import {useTranslation} from "react-i18next";

const Contact = () => {

    const [t] = useTranslation("global");

    return (
        <div >



                <div className='contact_us_container'>
                    <div className='contact_image_container'>
                        <img  className='contact_image_css' src={contact} alt="contact" />
                    </div>
                    <div className='contact_text_container'>
                        <h2>{t("contact.title_1")}</h2>
                        <hr className='blue_line_2'/>

                        <p><FontAwesomeIcon icon={faRoad} /> : 2065 Rte Marie-Victorin </p>
                        <p><FontAwesomeIcon icon={faLocationDot} /> : Varennes, QC J3X 1R3</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> : spiratos3@yahoo.ca </p>
                        <p><FontAwesomeIcon icon={faPhone} /> : 514 886 5076</p>
                        <p><FontAwesomeIcon icon={faPhone} />  : 514 808 0674</p>


                    </div>
                </div>



        </div>
    )
}

export default Contact