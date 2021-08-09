import React from 'react'
import './Testimonials.css'
import client1 from '../../images/image-emily.jpg'
import client2 from '../../images/image-thomas.jpg'
import client3 from '../../images/image-jennie.jpg'

function Testimonials() {
    return (
        <>
            <div className="testimonials-container">
                <div className="testimonials-wrap">
                    <div className="testimonials-header">CLIENT TESTIMONIALS</div>
                    <div className="testimonials-inner-wrap">

                        <div className="client-wrap">
                            <img src={client1} alt="" className="client-image" />
                            <div className="client-testimonial">
                                We put our trust in Sunnyside and they
                                delivered, making sure our needs were met
                                and deadlines were always hit.
                            </div>
                            <div className="client-info">
                                <div className="client-name">Emily R.</div>
                                <div className="client-label">Marketing Manager</div>
                            </div>
                        </div>
                        
                        <div className="client-wrap">
                            <img src={client2} alt="" className="client-image" />
                            <div className="client-testimonial">
                                Sunnyside's enthusiasm coupled with their
                                keen interest in our brand's success made it
                                a satisfying and enjoyable experience.
                            </div>
                            <div className="client-info">
                                <div className="client-name">Thomas S.</div>
                                <div className="client-label">Chief Operating Officer</div>
                            </div>
                        </div>

                        <div className="client-wrap">
                            <img src={client3} alt="" className="client-image" />
                            <div className="client-testimonial">
                                Incredible end result! our sales increased
                                over 400% when we worked with Sunnyside.
                                Highly recommended!
                            </div>
                            <div className="client-info">
                                <div className="client-name">Jennie F.</div>
                                <div className="client-label">Business Owner</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Testimonials
