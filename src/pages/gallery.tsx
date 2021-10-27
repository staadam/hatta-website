import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { Title } from '../components/Title/Title';
import { DisplayGallery } from '../components/DisplayGallery/DisplayGallery';
import { AnimatedTitle } from '../components/AnimatedTitle/AnimatedTitle';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 80%;
  margin: 125px auto 20px;
`;

const fadeIn = keyframes`
  0% {
    transform: translateX(30%);
    opacity: 0;
  }
  
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedParagraph = styled.p`
  animation: ${fadeIn} 0.3s 0.4s ease both;
`;

const Gallery = () => {
  return (
    <Wrapper>
      <Title>
        <AnimatedTitle headingElement={'h2'}>gallery</AnimatedTitle>
        <AnimatedParagraph>
          While artists work from real to the abstract, architects must work from the abstract to the real.
        </AnimatedParagraph>
      </Title>
      <DisplayGallery />
    </Wrapper>
  );
};

export default Gallery;
