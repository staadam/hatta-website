import * as React from 'react';
import { ReactNode, useContext } from 'react';

interface IAlert {
  alert: string;
  dispatchAlert: (message: string) => void;
}

const AlertContext = React.createContext<IAlert | null>(null);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = React.useState<string>(null);

  const dispatchAlert = (message: string): void => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 7000);
  };

  return <AlertContext.Provider value={{ alert, dispatchAlert }}>{children}</AlertContext.Provider>;
};

export const useAlert = () => {
  const alertContext = useContext(AlertContext);
  if (!alertContext) throw Error('useAlert needs to be used inside AlertContext');
  return alertContext;
};
