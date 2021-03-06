import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  html{
    overflow-x: hidden;
  }
  
  body{
    min-height: 100vh;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }
`;
