import * as React from 'react';
import { ReactNode } from 'react';
import { GlobalStyle } from '../assets/GlobalStyle';
import { Navigation } from '../components/Navigation/Navigation';
import { Alert } from '../components/Alert/Alert';
import { useAlert } from '../hooks/useAlert';

const App = ({ children }: { children: ReactNode }) => {
  const { alert } = useAlert();

  return (
    <>
      <GlobalStyle />
      <Navigation />
      {children}
      {alert ? <Alert message={alert} /> : null}
    </>
  );
};

export default App;
