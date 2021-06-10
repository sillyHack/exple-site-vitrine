import styled from 'styled-components';

export const About = styled.div`
     min-height: 90vh;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 5rem 10rem;
     color: white;
`
export const Description = styled.div`
     flex: 1;
     padding-right: 5rem;
     h2{
          font-weight: lighter;
     }
`
export const Image = styled.div`
     flex: 1;
     overflow: hidden; // the image size changes when the window size changes
     img{
          width: 100%;
          height: 80vh;
          object-fit: cover; // keep the ratio of the image according to the width and height parameters
     }
`
export const Hide = styled.div`
     overflow: hidden;
`