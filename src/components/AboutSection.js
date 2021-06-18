import React from 'react';
import home1 from '../img/home1.png';
import {About, Description, Image, Hide} from '../styles';
// framer motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';

const AboutSection = () => {
     /*const container = {
          hidden: {x: 100},
          show: {
               x: 0,
               transition: {
                    duration: 0.75, 
                    ease: "easeOut",
                    staggerChildren: 1, // numbers of second he wait to before animating the component one after another
                    //when: 'afterChildren' // activate after the loading of all the children in the div selected
               }
          }
          
     }*/

     return(
        <About>
             <Description>
                  <motion.div className="title">
                       <Hide>
                              <motion.h2 variants={titleAnim}>
                                 We work to make
                              </motion.h2>
                       </Hide>
                       <Hide>
                              <motion.h2 variants={titleAnim}>
                                 your <span>dreams</span> comes
                              </motion.h2>
                       </Hide>
                       <Hide>
                            <motion.h2 variants={titleAnim}>true.</motion.h2>
                       </Hide>
                  </motion.div>
                  <motion.p variants={fade}>
                         Contact us for any photography or videography idea that you have.
                         We have professionals with amazing skills.
                  </motion.p>
                  <motion.button variants={fade}>Contact us</motion.button>
             </Description>
             <Image >
                  <motion.img variants={photoAnim} src={home1} alt="guy with a camera"/>
             </Image>
        </About>
     );
};

export default AboutSection;