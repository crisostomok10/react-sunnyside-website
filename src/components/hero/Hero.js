import React from 'react'
import Navbar from '../navbar/Navbar'
import './Hero.css'
import { ReactComponent as Arrow} from '../../images/icon-arrow-down.svg'

function Hero() {
    return (
        <>
            <div className="hero-container">
                <Navbar />
                <div className="hero-header-wrap">
                    <div className="hero-header">WE ARE CREATIVES</div>
                    <div className="hero-arrow"><Arrow /></div>
                </div>
            </div>
        </>
    )
}

export default Hero
