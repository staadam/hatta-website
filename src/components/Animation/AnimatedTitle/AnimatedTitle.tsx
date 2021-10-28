import * as React from 'react';
import styled, { keyframes } from 'styled-components';

type headingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IAnimatedTitleProps {
  children: string;
  headingElement?: headingElementType;
}

const fadeIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedSpan = styled.span`
  display: inline-block;
  animation: ${fadeIn} 0.05s ${({ delay }) => `${delay}s`} ease both;
`;

export const AnimatedTitle = ({ children, headingElement = 'h1' }: IAnimatedTitleProps) => {
  const CustomTag = headingElement as keyof JSX.IntrinsicElements;

  const letters = children.split('');

  return (
    <CustomTag>
      {letters.map((letter, index) => (
        <AnimatedSpan key={index} delay={index * 0.05}>
          {letter}
        </AnimatedSpan>
      ))}
    </CustomTag>
  );
};
