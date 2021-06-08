import React from 'react';
// page components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUs = () => {
     return(
          // everything has to have a parent div, that's why we put empty tags(<> </>)
          <>
               <AboutSection />
               <ServicesSection />
               <FaqSection />
          </>
     )
}

export default AboutUs;