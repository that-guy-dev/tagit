import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './moduels/nav';
import Intro from './moduels/intro';

const ScApp = styled.div`
  background-image: linear-gradient(#6955E2, #28A6C8);
  background-size: 300px 300vh;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 0 10%;
`

const ScMainWrapper = styled.div`
  position:relative;
  z-index: 10;
`

const ScCircleTop = styled.div`
  width: 1500px;
  height: 1500px;
  background: #5E63DE;
  opacity: 0.6;
  border-radius: 100%;
  position: absolute;
  top: -20%;
  right: -20%;
  z-index: 1;
`

const ScCircleBottom = styled.div`
    width: 1000px;
    height: 1000px;
    border-radius: 100%;
    background: #4384D3;
    position: absolute;
    bottom: -20%;
    left: -20%;
`

class App extends Component {
  render() {
    return (
      <ScApp>
        <ScMainWrapper>
          <Nav/>
          <Intro/>
        </ScMainWrapper>
        <ScCircleTop/>
        <ScCircleBottom/>
      </ScApp>
    );
  }
}

export default App;
