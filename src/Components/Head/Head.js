import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
   background-color: rgb(7, 6, 51);
   display: flex;
   justify-content: center;
`;

const Img = styled.img `
   height: 8rem;
`;

const H1 = styled.h1 `
   font-size: 4rem;
  color: rgb(166, 187, 189);
  align-self: center;
`;

export default function Head(props) {

  return (   
     <Header> 
      <Img src={logo} alt="react logo" />
      <H1>Coin Exchange</H1>  
     </Header>   
  )
}
