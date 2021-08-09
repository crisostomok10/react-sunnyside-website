import React, { useState } from 'react'
import './Navbar.css'
import { ReactComponent as Logo} from '../../images/logo.svg'
import hamburger from '../../images/icon-hamburger.svg'

function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);

    
    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                   <a href="#" className="logo"><Logo fill="white"/></a>
                </div>
                <div className="navbar-right">     
                    <div className="navbar-menu" id={toggleNav ? "hidden" : ""}>
                        <div className="navbar-menu-inner">
                            <div className="triangle"></div>
                            <a href="#" className="navbar-menu-item" onClick={() => setToggleNav(!toggleNav)}>About</a>
                            <a href="#" className="navbar-menu-item" onClick={() => setToggleNav(!toggleNav)}>Services</a>
                            <a href="#" className="navbar-menu-item" onClick={() => setToggleNav(!toggleNav)}>Projects</a>
                            <a href="#" className="navbar-menu-item" onClick={() => setToggleNav(!toggleNav)}><div className="contact-button">CONTACT</div></a>
                        </div>
                    </div>
                    <a className="hamburger-button" onClick={() => setToggleNav(!toggleNav)}><img src={hamburger}></img></a>
                </div>
            </div>
        </>
    )
}

export default Navbar
