import React from 'react'
import './Services.css'

function ServicesStandOut() {
    return (
        <>
        <div className="services-container reverse">
            <div className="services-text-container">
                <div className="services-text-wrapper">
                    <div className="services-header">
                        Stand out to the right audience
                    </div>
                    <div className="services-body">
                        Using a collaborative formula of designers, researchers, 
                        photographers, videographers, and copywriters, we'll 
                        build and extend your brand in digital places
                    </div>
                    <a class="services-btn-pink" href="#">LEARN MORE</a>
                </div> 
            </div>
            <div className="services-image-container cup"></div>
        </div>   
    </>
    )
}

export default ServicesStandOut
