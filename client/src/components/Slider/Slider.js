import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import p1 from "./img1.avif"
import p2 from "./img2.jpg"
import p3 from "./img3.jpg"
import p4 from "./img4.jpg"
import p5 from "./img5.jpg"
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"
const Slider = () => {
  return (
    <div  >
            <Carousel className="carosel" autoPlay={true} showStatus={false} showThumbs={false} interval={1000} infiniteLoop={true} >
                <div>
                    <img src={p1} />
                    
                </div>

                <div>
                    <img src={p2}/>
                    
                </div>
                <div>
                    <img src={p3} />
                    
                </div>
                <div>
                    <img src={p4} />
                    
                </div>
                <div>
                    <img src={p5} />
                    
                </div>
            </Carousel>
    </div>
  )
}

export default Slider
