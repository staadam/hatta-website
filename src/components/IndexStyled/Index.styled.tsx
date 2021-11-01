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

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 100vh);
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 120px 30px;
  animation: ${fadeInBanner} 0.5s 0.6s both ease;
  z-index: 0;

  @media (max-width: 1024px) {
    padding: 40px 30px 0 30px;
  }

  @media (max-width: 600px) {
    padding: 40px 30px 0 30px;
  }
`;

export const StyledImage = styled(GatsbyImage)`
  animation: ${fadeInHero} 0.5s both ease;
  height: 100vh;
`;
