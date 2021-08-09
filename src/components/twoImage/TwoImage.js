import React from 'react'
import './TwoImage.css'

function TwoImage() {
    return (
        <>
            <div className="twoImage-container">
                <div className="graphic-container">
                    <div className="image-text-wrapper text-cyan-1">
                        <div className="image-header">Graphic Design</div>
                        <div className="image-body">
                            Great design makes you memorable. We deliver
                            artwork that underscores your brand message
                            and captures potential client's attention.
                        </div>        
                    </div>
                    
                </div>
                <div className="photog-container">
                    <div className="image-text-wrapper text-dark-blue">
                        <div className="image-header">Photography</div>
                        <div className="image-body">
                            Increase your credibility by getting the most
                            stunning, high-quality photos that improve your
                            business image
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default TwoImage
