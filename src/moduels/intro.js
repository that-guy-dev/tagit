import React, { Component } from 'react';
import styled from 'styled-components';

import App from '../assets/app.png';

const ScIntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 0 0 0 10%;
  @media (max-width: 2150px) {
    padding: 0 0 0 20%;
  }
`
const ScText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const ScItem = styled.div`
`

const ScHeadline = styled.h1`
  font-size: 3.5em;
  font-weight: 900;
  line-height: 60px;
  color: white;
`

const ScMessage = styled.p`  
font-size: 1.2em;
  font-weight: 100;
  line-height: 30px;
  color: white;
`

const ScEmailSection = styled.div`  

`

const ScEmail = styled.div`  
  display: flex;
  justify-content: space-between;
`

const ScInput = styled.input`  
  background: #fff;
  color: #40359C;
  height: 47px;
  width: 55%;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  padding-left: 10px;
  font-size: 1em;
  &::placeholder {
    color: #40359C;
    opacity: 0.5;
  }
`

const ScButton = styled.div`  
  background: #40359C;
  color: #fff;
  height: 50px;
  width: 40%;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
`

const ScImg = styled.div`
    background: url( ${App} ) no-repeat;
    transform: rotate(3deg);
    width: 2070px;
    height: 980px;
    margin-left: 52px;    
    position: relative;
    left: 30px;
`

const Intro = () => {
  return (
    <ScIntroWrapper>      
      <ScText>
        <ScItem>
          <ScHeadline>
            Save anything and view it  when you want to
          </ScHeadline>
          <ScMessage>Tagit is a solutin to the modern problem of content. So many articles you want to read but dont have the time. Tagit will help you save that content so you can read it later at the perfect time for you</ScMessage>
        </ScItem>    
        <ScItem>
          <ScEmailSection>
            <ScMessage>Want to know more, sign up for early access</ScMessage>
            <ScEmail>
                <ScInput placeholder="Email..."/>
                <ScButton>Submit</ScButton>
            </ScEmail>
          </ScEmailSection>
        </ScItem>  
        </ScText>
        <ScImg />
    </ScIntroWrapper>
  );
}
export default Intro;
