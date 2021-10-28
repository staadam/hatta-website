import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const fadeInHero = keyframes`
  0% {
    transform: translateX(20%);
    opacity: 0;
  }


  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInBanner = keyframes`
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }


  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1.7fr minmax(300px, 1fr);
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 30px;
  animation: ${fadeInBanner} 0.5s 0.6s both ease;
  z-index: 0;
`;

export const StyledImage = styled(GatsbyImage)`
  animation: ${fadeInHero} 0.5s both ease;
  height: 100vh;
`;
