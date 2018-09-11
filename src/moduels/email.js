import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { fadeBottom } from '../utility/animation';

const ScMessageEmail = styled.p`  
  font-size: 1.2em;
  font-weight: 100;
  line-height: 30px;
  color: white;
`

const ScEmailSection = styled.div`  
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
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
&:hover {
    cursor: text;
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

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.signUp = this.signUp.bind(this);
    this.handleEmail = this.handleEmail.bind(this)
  } 

  signUp = () => {    
    //axios.post('http://localhost:3034/postUrl', {
    axios.post('https://tagitemail.herokuapp.com/postUrl', {
      email: this.state.email
    })
  }
  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  
  
render() {
  return (
    <ScEmailSection>
      <ScMessageEmail >Get notified when we launch</ScMessageEmail>
        <ScEmail>
            <ScInput placeholder="Email..." onChange={this.handleEmail}/>
            <ScButton onClick={this.signUp}>Submit</ScButton>
        </ScEmail>
      </ScEmailSection>
    )
  }
}
export default Email;
