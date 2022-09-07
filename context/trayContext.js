import { createContext, useContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [activeTrayId, setActiveTrayId] = useState('');
  const [tray, setTray] = useState(null);
  const [loading, setLoading] = useState(false);
  const [round, setRound] = useState(1);

  useEffect(() => {
    if (!activeTrayId) {
      const id = getLocalStorage('ACTIVE_TRAY_ID');
      setActiveTrayId(id);
    }
  }, []);

  return (
    <TrayContext.Provider
      value={{
        activeTrayId,
        setActiveTrayId,
        tray,
        setTray,
        loading,
        setLoading,
        round,
        setRound
      }}
    >
      {children}
    </TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const {
    activeTrayId,
    setActiveTrayId,
    tray,
    setTray,
    loading,
    setLoading,
    round,
    setRound
  } = useContext(TrayContext);

  return {
    activeTrayId,
    setActiveTrayId,
    tray,
    setTray,
    loading,
    setLoading,
    round,
    setRound
  };
};
