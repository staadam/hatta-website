import styled, { keyframes } from 'styled-components';

type fromType = 'left' | 'right';

const fadeIn = (from: fromType = 'right') => {
  let direction = '';
  if (from === 'left') direction = '-';

  return keyframes`
  0% {
    transform: translateX(${direction}30%);
    opacity: 0;
  }
  
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
};

export const AnimatedBlock = styled.div`
  animation: ${({ from }) => fadeIn(from)} 0.3s ${({ extraDelay = 0 }) => `${extraDelay + 0.4}s`}
    ease both;
  line-height: 1.6;
`;

export const Author = styled.strong`
  display: block;
  margin-top: 20px;
  font-size: 1.3em;
`;
