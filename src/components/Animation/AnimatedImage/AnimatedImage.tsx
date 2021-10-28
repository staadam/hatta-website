import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  
  70%{
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const AnimatedImage = styled.div`
  animation: ${fadeIn} 0.7s ${({ delay = 0 }) => `${0.8 + delay}s`}
    cubic-bezier(0.17, 0.84, 0.95, 1.01) both;
`;
