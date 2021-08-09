import React from 'react'
import './Services.css'
import egg from '../../images/desktop/image-transform.jpg'

function servicesTransform() {
    
    return (
        <>
            <div className="services-container">
                <div className="services-text-container">
                    <div className="services-text-wrapper">
                        <div className="services-header">
                            Transform your brand
                        </div>
                        <div className="services-body">
                            We are full-service creative agency specializing in helping 
                            brands grow fast. Engage your clients through compelling visuals 
                            that do most of the marketing for you.
                        </div>
                        <a class="services-btn-yellow" href="#">LEARN MORE</a>
                    </div> 
                </div>
                <div className="services-image-container egg">
                    {/* <img className="image-fluid" src={egg} alt="transform-image" /> */}
                </div>
            </div>   
        </>
    )
}

export default servicesTransform


