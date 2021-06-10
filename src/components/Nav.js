import React from 'react';
import styled from 'styled-components';

const Nav = () => {
     return(
        <StyledNav>
             <h1><a id="logo" href="#">Capture</a></h1>
             <ul>
                  <li>
                       <a href="#">1. About us</a>
                  </li>
                  <li>
                       <a href="#">2. Our work</a>
                  </li>
                  <li>
                       <a href="#">3. Contact us</a>
                  </li>
             </ul>
        </StyledNav>
     )
}
// we put 'StyledNav' because this name has to be different from the function name above
const StyledNav = styled.nav`
     min-height: 10vh;
     display: flex;
     margin: auto;
     justify-content: space-between;
     align-items: center;
     padding: 1rem 10rem;
     background: #282828;
     a{
          color: white;
          text-decoration: none;
     }
     ul{
          display: flex;
          list-style: none; // remove the points in front of each element
     }
     #logo{
          font-size: 1.5rem;
          font-family: "Lobster", cursive;
          font-weight: lighter;
     }
     li{
          padding-left: 10rem;
          position: relative;
     }
`

export default Nav;