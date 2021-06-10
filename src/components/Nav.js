import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
     return(
        <StyledNav>
             <h1><Link id="logo" to="/">Capture</Link></h1>
             <ul>
                  <li>
                       <Link to="/">1. About us</Link>
                  </li>
                  <li>
                       <Link to="/work">2. Our work</Link>
                  </li>
                  <li>
                       <Link to="/contact">3. Contact us</Link>
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