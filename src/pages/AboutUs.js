import React from 'react';
// page components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

const AboutUs = () => {
     return(
          // everything has to have a parent div, that's why we put empty tags(<> </>)
          <>
               <AboutSection />
               <ServicesSection />
          </>
     )
}

export default AboutUs;