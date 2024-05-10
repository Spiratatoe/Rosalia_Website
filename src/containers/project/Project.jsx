import React from 'react'
import './project.css'

import layout from "../../assets/layout.png";
import eco from "../../assets/eco.svg";
import transport from "../../assets/transport.svg";
import appliances from "../../assets/appliances.svg";
import {useTranslation} from "react-i18next";


const Project = () => {

    const [t] = useTranslation("global");


    return (
        <div >

            <h1>{t("info.header")}</h1>

                <div className='double_container'>
                    <div className='info_text_container'>
                        <p className='info_text'>{t("info.section1_p1")}</p>
                        <hr className='blue_line'/>
                        <p className='info_text'>{t("info.section1_p2")}</p>
                        <p className='info_text_2'>{t("info.section1_p3")}</p>
                    </div>
                    <div className='info_image_container'>
                        <img  className='info_image_css' src={layout} alt="contact" />
                    </div>
                </div>

            <div className='double_container'>
                <div className='info_image_container'>
                    <img  className='info_image_css' src={appliances} alt="contact" />
                </div>
                <div className='info_text_container'>
                    <p className='info_text'>{t("info.section2_p1")}</p>
                    <hr className='blue_line_3'/>
                    <p className='info_text_2'>{t("info.section2_p2")}</p>
                    <p className='info_text_2'>{t("info.section2_p3")}</p>
                    <p className='info_text_2'>{t("info.section2_p4")}</p>
                    <p className='info_text_2'>{t("info.section2_p5")}</p>

                    <p className='info_text_2'>{t("info.section2_p6")}</p>
                </div>

            </div>

            <div className='double_container'>

                <div className='info_text_container'>
                    <p className='info_text'>{t("info.section3_p1")}</p>
                    <hr className='blue_line_3'/>
                    <p className='info_text_2'>{t("info.section3_p2")}</p>

                    <p className='info_text_2'>{t("info.section3_p3")}</p>

                    <p className='info_text_2'>{t("info.section3_p4")}</p>
                </div>
                <div className='info_image_container'>
                    <img  className='info_image_css' src={transport} alt="contact" />
                </div>

            </div>


            <div className='double_container'>
                <div className='info_image_container'>
                    <img  className='info_image_css' src={eco} alt="contact" />
                </div>
                <div className='info_text_container'>
                    <p className='info_text'>{t("info.section4_p1")}</p>
                </div>

            </div>





        </div>
    )
}

export default Project