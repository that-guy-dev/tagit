import React, { Component } from 'react';
import styled from 'styled-components';

import { LogoW } from '../assets/icon';

const ScIntroWrapper = styled.div`
  height: 150px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 150px;
`
const ScHeadline = styled.h1`
  font-size: 3.5em;
  font-weight: 900;
  line-height: 60px;
  color: white;
  width: 800px;
`

const Intro = () => {
  return (
    <ScIntroWrapper>
        <ScHeadline>
          Save anything and view it  when you want to
        </ScHeadline>

    </ScIntroWrapper>
  );
}
export default Intro;