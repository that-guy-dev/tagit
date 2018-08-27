import React, { Component } from 'react';
import styled from 'styled-components';

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