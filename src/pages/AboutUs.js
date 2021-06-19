import React from 'react';
// page components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
// animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
     return(
          // everything has to have a parent div, that's why we put empty tags(<> </>) before <motion.div>
          <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
               <AboutSection />
               <ServicesSection />
               <FaqSection />
               <ScrollTop />
          </motion.div>
     )
}

export default AboutUs;