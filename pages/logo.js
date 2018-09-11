import styled, { css } from 'styled-components';

const ScRect = styled.rect`
    ${props => props.red === 'red' && css`
        fill: #EB5757;
    `}
    ${props => props.color === 'lightgreen' && css`
        fill: #73E2C9;
    `}
    ${props => props.color === 'purple' && css`
        fill: #8E009E;
    `}
    ${props => props.color === 'pink' && css`
        fill: #F40082;
    `}
    ${props => props.color === 'green' && css`
        fill: #21C1C4;
    `}
    ${props => props.color === 'lightpink' && css`
        fill: #FFCCD2;
    `}
`

export const Logo = (props) => {
    return (
    <svg width="146" height="146" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect color={props.color} width="146" height="146" fill="#EB5757"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M36.2646 42.7503C36.2646 50.5116 32.7844 54.525 25.824 54.7905C18.8583 54.5278 15.3754 50.5143 15.3754 42.75V29.5208H30.1968V17.9585H15.3754V0H6.10352e-05L0 17.9585L6.10352e-05 29.5208V42.996C6.10352e-05 50.7042 2.00909 56.5263 6.02722 60.4624C10.0453 64.3165 16.2775 66.2436 24.7237 66.2436C24.8492 66.2436 25.0142 66.2436 25.2173 66.2399C25.4294 66.2424 25.6422 66.2436 25.8559 66.2436C26.0513 66.2436 26.2458 66.2426 26.4398 66.2405C26.6353 66.2439 26.7946 66.2439 26.9165 66.2439C35.3627 66.2439 41.5948 64.3168 45.6129 60.4627C49.631 56.5266 51.6401 50.7045 51.6401 42.9963V33.7626L51.64 17.9785L36.2646 17.9784V33.7626V42.7503ZM36.071 0H51.7115V11.9144H36.071V0Z" transform="translate(47.1441 39.8781)" fill="white"/>
    </svg>    
    );
};