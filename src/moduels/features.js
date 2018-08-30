import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Save, Organize, Reminder, Offline } from '../assets/icon';

const ScWhy = styled.div`
  z-index: 100;
  position: relative;
  padding: 60px 10%;
`
const ScFeature = styled.div`
  display: flex;
  ${props => props.left && css`
    justify-content: flex-start;
  `}
  ${props => props.right && css`
    justify-content: flex-end;
  `}
`

const ScFeatureHeadline = styled.h1`
  font-size: 2.5em;
  font-weight: 900;
  line-height: 60px;
  color: #fff;
  margin-bottom: 50px;
`

const ScFeatureItemWrapper = styled.div`
  width: calc(100vw/3);
  height: auto;  
  background: #fff;
  box-shadow: 0px 11px 27px rgba(0,0,0,0.25);
  border-radius: 10px 10px 0px 0px;
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

      <ScFeature right>
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Organize/>
            <ScSubHeader>Organize</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

          <ScFeature left>
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Reminder/>
            <ScSubHeader>Reminders</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

      <ScFeature right>
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Offline/>
            <ScSubHeader>Offline access</ScSubHeader>
          </ScFeatureItem>
          <ScP>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>
    </ScWhy>
  );
}
export default Features;