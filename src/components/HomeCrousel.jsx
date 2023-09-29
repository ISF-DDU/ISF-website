import React from 'react'
import coreteam from '../images/core-team.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import homecrousel1 from '../images/homecrousel_1.jpg'
import homecrousel2 from '../images/homecrousel_2.jpg'
import homecrousel3 from '../images/homecrousel_3.jpg'
import homecrousel4 from '../images/homecrousel_4.jpg'
const HomeCrousel = () => {
   return (
      <Carousel autoPlay={true} dynamicHeight={true} swipeable={true} showArrows={true} animationHandler={'slide'}>
         <div >
            <img src={homecrousel1} alt="" />
         </div>
         <div>
            <img src={homecrousel3} alt="" />
         </div>
         <div>
            <img src={homecrousel4} alt="" />
         </div>
      </Carousel>

   )
}

export default HomeCrousel