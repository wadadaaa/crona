import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import React from 'react';
import Stats from '../components/Stats';
import CountrySelector from '../components/СountrySelector';
import img from '../images/cdc.jpg';
import port from '../images/logo.png';


const AutorBlock = styled.div`
  border-radius: 2rem;
  font-family: nunito,roboto,proxima-nova,proxima nova,sans-serif;
  right: 0;
  bottom: 0;
  color: black;
  position: fixed;
  font-weight: 500;
  z-index: 8;
  padding: .5em;
  color: #494949;
`;

const Logo = styled.img`
    background-image: url(${port});
    width: 50px;
    height: 50px;
    margin: 15px;
    padding: 5px;
    border-radius: 2rem;
`;

 const Aa = styled.a`
 font-family: nunito,roboto,proxima-nova,proxima nova,sans-serif;
 color: white;
`;

const GlobalStyle = createGlobalStyle`
  html { 
    font-family: nunito,roboto,proxima-nova,proxima nova,sans-serif;  
    background-image: url(${img});
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
      <AutorBlock><Aa href="https://github.com/wadadaaa"><Logo></Logo></Aa></AutorBlock>
    </div>
  );
}