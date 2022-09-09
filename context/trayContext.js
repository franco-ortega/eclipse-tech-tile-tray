import { createContext, useContext, useState } from 'react';
import { putData } from '../services/request';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [tray, setTray] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <TrayContext.Provider
      value={{
        tray,
        setTray,
        loading,
        setLoading
      }}
    >
      {children}
    </TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const { tray, setTray, loading, setLoading } = useContext(TrayContext);

  return {
    tray,
    setTray,
    loading,
    setLoading
  };
};
