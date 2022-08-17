import { createContext, useContext, useState } from 'react';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [activeTrayId, setActiveTrayId] = useState([]);
  const [tray, setTray] = useState(null);

  // const currentActiveTrayId = (id) => {
  //   setActiveTrayId(id);
  //   return activeTrayId;
  // };

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
