import React from 'react';
import styled from 'styled-components';
import { loader_one, loader_two, loader_three } from './animation';

const ScLoader = styled.div`
  display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

  & > div {
        position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
  }
`

const ScLoaderItemOne = styled.div`
  left: 8px;
  animation: ${loader_one} 0.6s infinite;
`

const ScLoaderItemTwo = styled.div`
  left: 8px;
  animation: ${loader_two} 0.6s infinite;
`

const ScLoaderItemThree = styled.div`
  left: 32px;
  animation: ${loader_two} 0.6s infinite;
`

const ScLoaderItemFour = styled.div`
  left: 56px;
  animation: ${loader_three} 0.6s infinite;
`

const Loader = () => {
  return (
    <ScLoader>
      <ScLoaderItemOne></ScLoaderItemOne>
      <ScLoaderItemTwo></ScLoaderItemTwo>
      <ScLoaderItemThree></ScLoaderItemThree>
      <ScLoaderItemFour></ScLoaderItemFour>
    </ScLoader>  
  )
}

export default Loader;
 