import React, { useState, useEffect, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import homecrousel1 from '../images/homecrousel_1.jpg';
import homecrousel3 from '../images/homecrousel_3.jpg';
import homecrousel4 from '../images/homecrousel_4.jpg';

const HomeCarousel = ({ startAutoplay }) => {
   const carouselStyle = {
      maxWidth: '700px',
      margin: '0 auto',
   };

   const [autoPlay, setAutoPlay] = useState(false);

   useEffect(() => {
      setAutoPlay(startAutoplay);

      const handleScroll = () => {
         // Check if the section is in view
         const section = document.getElementById('carousel-section');
         if (section) {
            const sectionRect = section.getBoundingClientRect();
            const isInView = sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
            
            // Update the startAutoplay prop based on whether the section is in view
            if (isInView) {
               setAutoPlay(true);
            } else {
               setAutoPlay(false);
            }
         }
      };

      // Listen for scroll events and update autoPlay
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [startAutoplay]);

   return (
      <div style={carouselStyle}>
         <Carousel
            autoPlay={autoPlay}
            dynamicHeight={true}
            swipeable={true}
            showArrows={true}
            animationHandler={'slide'}
            infiniteLoop={true}
         >
            <div>
               <img src={homecrousel1} alt="" />
            </div>
            <div>
               <img src={homecrousel3} alt=""/>
            </div>
            <div>
               <img src={homecrousel4} alt=""/>
            </div>
         </Carousel>
      </div>
   );
};

export default HomeCarousel;
