import * as React from 'react';
import { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../assets/GlobalStyle';
import { Navigation } from '../components/Navigation/Navigation';
import { theme } from '../assets/ThemeProvider';

interface ILayoutProps {
  children: ReactNode;
}

const GlobalWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
`;

const Layout = ({ children }: ILayoutProps) => (
  <GlobalWrapper>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      {children}
    </ThemeProvider>
  </GlobalWrapper>
);

export default Layout;
