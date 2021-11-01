import * as React from 'react';
import styled from 'styled-components';

interface ITitleProps {
  children: React.ReactNode;
  isBanner?: boolean;
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isBanner }) => (isBanner ? 'flex-end' : 'flex-start')};
  text-align: ${({ isBanner }) => (isBanner ? 'right' : 'left')};

  h1 {
    max-width: 500px;
    font-size: ${({ theme: { fontSize } }) => fontSize.banner};
    margin-bottom: 50px;
    line-height: 0.9;

    @media (max-width: 1024px) and (orientation: landscape) {
      font-size: ${({ theme: { fontSize } }) => fontSize.mediumBanner};
    }

    @media (max-width: 600px) and (orientation: landscape) {
      font-size: ${({ theme: { fontSize } }) => fontSize.smallBanner};
    }

    @media (max-width: 400px) {
      font-size: ${({ theme: { fontSize } }) => fontSize.smallBanner};
    }
  }

  h2 {
    max-width: 500px;
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
    margin-bottom: 20px;
  }

  p {
    max-width: 350px;
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
`;

export const Title = ({ children, isBanner = false }: ITitleProps) => (
  <TitleWrapper isBanner={isBanner}>{children}</TitleWrapper>
);
