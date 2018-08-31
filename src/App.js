import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './moduels/nav';
import Intro from './moduels/intro';
import Features from './moduels/features';

const ScApp = styled.div`
  background-image: linear-gradient(#6955E2, #28A6C8);
  background-size: 300px 300vh;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`

const ScCircleTop = styled.div`
  width: 1500px;
  height: 1500px;
  background: rgb(91, 95, 203);
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
    opacity: 0.3;
`

class App extends Component {
  render() {
    return (
      <ScApp>
        <Nav/>
        <Intro/>
        <Features/>
        <ScCircleTop/>
        <ScCircleBottom/>
      </ScApp>
    );
  }
}

export default App;
