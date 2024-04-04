import React from 'react'
import './home.css'

import display from '../../assets/Building_image.png'

const Home = () => {


    return (
        <div >

            <div className='display_container'>
                <img  className='display_css' src={display} alt="building" />
            </div>

            <h1>  Discover Your Next Home: <em>Rosalia</em> - Where Luxury Meets Convenience</h1>

            <div className="location_container">

                <div className="location_text">
                    <div>
                    <h2> The Rosalia </h2>

                    <p> 2065 Rte Marie-Victorin </p>

                    <p> Varennes, QC J3X 1R3</p>

                        <p> phone : </p>

                    </div>
                </div>

                <div className="map_container">
                    <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=J3X%201R3+(Rosalia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/">gps devices</a></iframe>
                </div>
            </div>

        </div>
    )
}

export default Home