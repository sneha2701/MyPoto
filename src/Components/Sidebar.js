import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';
function Sidebar() {
    return (
        <SidebarStyle>
            <Navigation />
        </SidebarStyle>
    )
}
const SidebarStyle = styled.div`
  width: 10.3rem;
  position: fixed;
  height: 100vh;
  background-color: black;
 transition: all .4s ease-in-out;
  @media screen and (max-width:1200px){
    transform: translateX(-100%);
    
  }
`;
export default Sidebar