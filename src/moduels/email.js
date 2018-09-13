import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Loader from '../utility/loader';
import { fadeBottom, change } from '../utility/animation';

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
  border-radius: 5px;
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
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    animation: ${change} .3s linear;
    animation-fill-mode: forwards;
    background: hsl(181, 66%, 47%);
  }
`

const ScSpan = styled.div`  
  color: #fff;
  margin-top: 25px;
  font-size: 1.2em;
  display: none;
  ${props => props.no && css`
    display: block;
  `}
  ${props => props.yes && css`
    display: block;
  `}
  
`

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      spinner: false,
      success: false,
      error: false
    };
    this.signUp = this.signUp.bind(this);
    this.handleEmail = this.handleEmail.bind(this)
  } 

  signUp = () => {    
    this.setState({ spinner: true});
    this.setState({ success: false});
    this.setState({ error: false});

    //axios.post('http://localhost:3034/postUrl', {
    axios.post('https://tagitemail.herokuapp.com/postUrl', {
      email: this.state.email
    })
    .then((response) => {
      this.setState({spinner: false});  
      this.setState({success: true});      
    })
    .catch((error) => {
      this.setState({spinner: false}); 
      this.setState({error: true});
      console.log(error);    
      
    });
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
            {this.state.spinner
              ? <ScButton onClick={this.signUp}><Loader/></ScButton>
              : <ScButton onClick={this.signUp}>Submit</ScButton>
            }           
        </ScEmail>
        {this.state.success && <ScSpan yes>Welcome to the family, we will keep you updated</ScSpan>}
        {this.state.error && <ScSpan no>Ups, something went wrong :(</ScSpan>}
      </ScEmailSection>
    )
  }
}
export default Email;
