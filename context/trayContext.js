import { createContext, useContext, useState } from 'react';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [activeTrayId, setActiveTrayId] = useState('');
  const [tray, setTray] = useState(null);

  console.log('CONTEXT ID: ', activeTrayId);

  return (
    <TrayContext.Provider
      value={{ activeTrayId, setActiveTrayId, tray, setTray }}
    >
      {children}
    </TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const { activeTrayId, setActiveTrayId, tray, setTray } =
    useContext(TrayContext);

  return { activeTrayId, setActiveTrayId, tray, setTray };
};
