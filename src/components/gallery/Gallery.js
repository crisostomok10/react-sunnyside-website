import React, {useState, useEffect} from 'react'
import './Gallery.css'
import image1 from '../../images/desktop/image-gallery-milkbottles.jpg'
import image1Mob from '../../images/mobile/image-gallery-milkbottles.jpg'
import image2 from '../../images/desktop/image-gallery-orange.jpg'
import image2Mob from '../../images/mobile/image-gallery-orange.jpg'
import image3 from '../../images/desktop/image-gallery-cone.jpg'
import image3Mob from '../../images/mobile/image-gallery-cone.jpg'
import image4 from '../../images/desktop/image-gallery-sugarcubes.jpg'
import image4Mob from '../../images/mobile/image-gallery-sugar-cubes.jpg'


function Gallery() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const milkBot = windowWidth >= 769 ? image1 : image1Mob;
    const orange = windowWidth >= 769 ? image2 : image2Mob;
    const cone = windowWidth >= 769 ? image3 : image3Mob;
    const sugarCubes = windowWidth >= 769 ? image4 : image4Mob;

    useEffect(() => {

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        };

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }

    },[])
    

    return (
        <>
            <div className="gallery-container">
                <img src={milkBot} alt="" className="gallery-image" />
                <img src={orange} alt="" className="gallery-image" />
                <img src={cone} alt="" className="gallery-image" />
                <img src={sugarCubes} alt="" className="gallery-image" />
            </div>
        </>
    )
}

export default Gallery
