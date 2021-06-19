import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About = styled(motion.div)`
     min-height: 90vh;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 5rem 10rem;
     color: white;
     @media (max-width: 1300px){ // when the frame is below 1300px, we execute the css instructions(used for mobile screens)
          display: block;
          padding: 2rem 2rem;
          text-align: center;
     }
`
export const Description = styled.div`
     flex: 1;
     padding-right: 5rem;
     z-index: 2;
     h2{
          font-weight: lighter;
     };
     @media (max-width: 1300px){ // when the frame is below 1300px, we execute the css instructions(used for mobile screens)
          padding: 0;
          button{
               margin: 2rem 0rem 5rem 0rem;
          }
     }
`
export const Image = styled.div`
     flex: 1;
     overflow: hidden; // the image size changes when the window size changes
     z-index: 2;
     img{
          width: 100%;
          height: 80vh;
          object-fit: cover; // keep the ratio of the image according to the width and height parameters
     }
`
export const Hide = styled.div`
     overflow: hidden;
`