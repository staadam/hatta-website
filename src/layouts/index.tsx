import * as React from 'react';
import { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../assets/ThemeProvider';
import { AlertProvider } from '../hooks/useAlert';
import App from './App';

interface ILayoutProps {
  children: ReactNode;
}

const GlobalWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
`;

const Layout = ({ children }: ILayoutProps) => {
  return (
    <GlobalWrapper>
      <AlertProvider>
        <ThemeProvider theme={theme}>
          <App>{children}</App>
        </ThemeProvider>
      </AlertProvider>
    </GlobalWrapper>
  );
};

export default Layout;
