import { createContext, useContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [activeTrayId, setActiveTrayId] = useState('');
  const [tray, setTray] = useState(null);

  console.log('CONTEXT tray: ', tray);
  console.log('CONTEXT id: ', activeTrayId);

  useEffect(() => {
    if (!activeTrayId) {
      const id = getLocalStorage('ACTIVE_TRAY_ID');
      setActiveTrayId(id);
    }
  }, []);

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
