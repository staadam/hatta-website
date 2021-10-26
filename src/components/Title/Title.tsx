import * as React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface ITitleProps {
  children: ReactNode;
  isBanner?: boolean;
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: ${({ isBanner }) => (isBanner ? 'right' : 'left')};

  h1 {
    max-width: 500px;
    font-size: ${({ theme: { fontSize } }) => fontSize.banner};
    margin-bottom: 50px;
    line-height: 0.9;
  }

  h2 {
    max-width: 500px;
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    margin-bottom: 20px;
  }

  p {
    max-width: 350px;
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
`;

export const Title = ({ children, isBanner }: ITitleProps) => (
  <TitleWrapper isBanner>{children}</TitleWrapper>
);
