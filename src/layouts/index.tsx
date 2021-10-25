import * as React from 'react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../assets/GlobalStyle';
import { Navigation } from '../components/Navigation/Navigation';
import { theme } from '../assets/ThemeProvider';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navigation />
    {children}
  </ThemeProvider>
);

export default Layout;
