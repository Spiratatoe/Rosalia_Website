import React from 'react'
import './plans.css'
import plan1 from '../../assets/plans/plans_v_1.png'
import plan2 from '../../assets/plans/plans_v_2.png'
import plan3 from '../../assets/plans/plans_v_3.png'
import plan4 from '../../assets/plans/plans_v_4.png'
import plan5 from '../../assets/plans/plans_v_5.png'
import plan6 from '../../assets/plans/plans_v_6.png'
import plan7 from '../../assets/plans/plans_v_7.png'
import plan8 from '../../assets/plans/plans_v_8.png'
import plan9 from '../../assets/plans/plans_v_9.png'
import plan10 from '../../assets/plans/plans_v_10.png'
import plan11 from '../../assets/plans/plans_v_11.png'
import planA from '../../assets/plans/plans_v_a.png'
import planB from '../../assets/plans/plans_v_b.png'
import {useTranslation} from "react-i18next";


const Plans = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <div >

            <h1>{t("plans.header_1")}</h1>
            <div className='plan_parent_container'>
                <div className='plan_container'>

                    <div><img  className='plan_dimensions' src={plan1} alt="plan1" /><p className='plan_text'>3-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan2} alt="plan2" /><p className='plan_text'>3-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan3} alt="plan3" /><p className='plan_text'>3-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan4} alt="plan4" /><p className='plan_text'>4-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan5} alt="plan5" /><p className='plan_text'>4-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan6} alt="plan6" /><p className='plan_text'>4-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan7} alt="plan6" /><p className='plan_text'>4-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan8} alt="plan6" /><p className='plan_text'>4-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan9} alt="plan6" /><p className='plan_text'>4-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan10} alt="plan6" /><p className='plan_text'>4-1/2</p></div>
                    <div><img  className='plan_dimensions' src={plan11} alt="plan6" /><p className='plan_text'>4-1/2</p></div>

                </div>
            </div>
            <h1>{t("plans.header_2")}</h1>
            <div className='plan_parent_container'>
                <div className='plan_container'>

                    <div><img  className='plan_dimensions' src={planA} alt="plan1" /><p className='plan_text'>{t("plans.word")} A - 1328 sq2</p></div>
                    <div><img  className='plan_dimensions' src={planB} alt="plan2" /><p className='plan_text'>{t("plans.word")} B - 1850 sq2</p></div>

            </div>
            </div>
        </div>
    )
}

export default Plans