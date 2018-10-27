import React from 'react';
import styled from 'styled-components';
import { fadeTop } from '../utility/animation';

import { LogoW } from '../assets/icon';

const ScNavWrapper = styled.div`
  height: 150px;
  margin: 0 auto 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 0 10%;
  opacity: 0;
  animation: ${fadeTop} 1.3s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  @media (max-width: 761px) {
    margin: 0;
  }
  @media (min-width: 2150px) {
    padding: 0 25%;
  }
  
`
const ScNavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Nav = () => {
  return (
    <ScNavWrapper>
      <LogoW/>
      <ScNavItemWrapper>
        {/* <ScNavItem href="#">Why</ScNavItem> */}
        {/* <ScNavItem href="#">Features</ScNavItem> */}
        {/* <ScNavItem href="#">Sign up</ScNavItem> */}
      </ScNavItemWrapper>
    </ScNavWrapper>
  );
}
export default Nav;
