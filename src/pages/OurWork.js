import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// animations
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer, stretchPhoto} from '../animation';
import {useScroll} from '../components/useScroll';

const OurWork = () => {
     const [element, controls] = useScroll();
     const [element2, controls2] = useScroll(); // we use a second element bcz if we only use one, they will collapse
     return(
          <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background:"#fff"}}>
               <motion.div variants={sliderContainer}>
                    <Frame1 variants={slider}></Frame1>
                    <Frame2 variants={slider}></Frame2>
                    <Frame3 variants={slider}></Frame3>
                    <Frame4 variants={slider}></Frame4>
               </motion.div>
               <Movie>
                    <motion.h2 variants={fade}>The athlete</motion.h2>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/work/the-athlete">
                         <Hide>
                              <motion.img variants={photoAnim} src={athlete} alt="an athlete"/>
                         </Hide>
                    </Link>
               </Movie>
               <Movie variants={fade} ref={element} animate={controls} initial="hidden">
                    <h2>The racer</h2>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/work/the-racer">
                         <motion.img variants={stretchPhoto} src={theracer} alt="a racer"/>
                    </Link>
               </Movie>
               <Movie variants={fade} ref={element2} animate={controls2} initial="hidden"> 
                    <h2>Good Times</h2>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/work/good-times">
                         <motion.img variants={stretchPhoto} src={goodtimes} alt="Good times"/>
                    </Link>
               </Movie>
          </Work>
     )
}

const Work = styled(motion.div)` // that's what we do if we want to use motion in a styled component
     min-height: 100vh;
     overflow: hidden;
     padding: 5rem 10rem;
     h2{
          padding: 1rem 0rem;
     }
`;
const Movie = styled(motion.div)`
     padding-bottom: 10rem;
     .line{
          height: 0.5rem;
          background: #23d997;
          margin-bottom: 3rem;
     }
     img{
          width: 100%;
          height: 70vh;
          object-fit: cover;
     }
`;
const Hide = styled.div`
     overflow: hidden;
`;

// frame animation
const Frame1 = styled(motion.div)`
     position: fixed;
     left: 0;
     top: 10%;
     width: 100%;
     height: 100vh;
     background: #fffebf;
     z-index: 2;
`;
const Frame2 = styled(Frame1)`
     background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
     background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
     background: #8effa0;
`;

export default OurWork;