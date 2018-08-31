import React from 'react';
import styled, { css } from 'styled-components';
import { Save, Organize, Reminder, Highlight, Share, Recommended, Central, Collab, Offline } from '../assets/icon';
import App from '../assets/app.png';

const ScWhy = styled.div`
  z-index: 100;
  position: relative;
  padding: 60px 10%;
  @media (min-width: 2150px) {
    padding: 60px 25%;
  }
`
const ScFeature = styled.div`
  display: flex;
  ${props => props.left && css`
    justify-content: flex-start;
  `}
  ${props => props.right && css`
    justify-content: flex-end;
  `}
  ${props => props.pos && css`
    position: relative;
    bottom: ${props.pos}px;
  `}
  @media (max-width: 1000px) {
    bottom: 0;
  }
`

const ScFeatureHeadline = styled.h1`
  font-size: 2.5em;
  font-weight: 900;
  line-height: 60px;
  color: #fff;
  margin-bottom: 50px;
`

const ScFeatureItemWrapper = styled.div`
  width: calc(100vw/2.8);
  height: auto;  
  background: #fff;
  box-shadow: 0px 11px 27px rgba(0,0,0,0.25);
  border-radius: 10px 10px 0px 0px;
  @media (min-width: 2150px) {
    width: calc(100vw/5);
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 45px;
  }
`

const ScFeatureItem = styled.div`
  display: flex;
  background: #29C3C6;
  padding: 30px;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
`

const ScSubHeader = styled.h3`
  font-size: 1.4em;
  font-weight: 600;
  color: white;
  margin: 0 0 0 20px;
`

const ScP = styled.p`
  padding: 15px 30px 40px 30px;
  line-height: 26px;
  font-size: 1.1em;
`


const ScMessage = styled.p`  
font-size: 1.2em;
  font-weight: 100;
  line-height: 30px;
  color: white;
  text-align: center;
`

const ScEmailSection = styled.div`  
  width: 600px;
  margin: auto;
  position: relative;
  bottom: 200px;
  @media (max-width: 1000px) {
    bottom: 0;
  }
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

const ScItem = styled.div`
`


const Features = (props) => {
  return (
    <ScWhy> 
      <ScFeatureHeadline>Features</ScFeatureHeadline>
      
      <ScFeature left>
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Save/>
            <ScSubHeader>Save and view later</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

      <ScFeature right pos="50">
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Organize/>
            <ScSubHeader>Organize</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

      <ScFeature left pos="150">
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Reminder/>
            <ScSubHeader>Reminders</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

      <ScFeature right pos="200">
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Highlight/>
            <ScSubHeader>Highlight</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

          <ScFeature left pos="250">
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Share/>
            <ScSubHeader>Share</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

      <ScFeature right pos="300">
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Recommended/>
            <ScSubHeader>Recommendation</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

         <ScFeature left pos="350">
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Collab/>
            <ScSubHeader>Collaborate</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

      <ScFeature right pos="400">
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Central/>
            <ScSubHeader>Centralized</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

      <ScFeature left pos="450">
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Offline/>
            <ScSubHeader>Offline access</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

        <ScEmailSection >
          <ScMessage>Get notified when we launch</ScMessage>
          <ScEmail>
              <ScInput placeholder="Email..."/>
              <ScButton>Submit</ScButton>
          </ScEmail>
        </ScEmailSection>

    </ScWhy>
  );
}
export default Features;
