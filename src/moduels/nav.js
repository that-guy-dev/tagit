import React, { Component } from 'react';
import styled from 'styled-components';

import { LogoW } from '../assets/icon';

const ScNavWrapper = styled.div`
  height: 150px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ScNavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const ScNavItem= styled.a`
  margin-left: 130px;
  color: white;
  text-decoration: none;
`

const Nav = () => {
  return (
    <ScNavWrapper>
      <LogoW/>
      <ScNavItemWrapper>
        <ScNavItem href="#">Why</ScNavItem>
        <ScNavItem href="#">Features</ScNavItem>
        <ScNavItem href="#">Sign up</ScNavItem>
      </ScNavItemWrapper>
    </ScNavWrapper>
  );
}
export default Nav;