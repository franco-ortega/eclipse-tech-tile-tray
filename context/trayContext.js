import { createContext, useContext, useState } from 'react';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [activeTrayId, setActiveTrayId] = useState([]);

  // const currentActiveTrayId = (id) => {
  //   setActiveTrayId(id);
  //   return activeTrayId;
  // };

  return (
    <TrayContext.Provider value={{ activeTrayId, setActiveTrayId }}>
      {children}
    </TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const { activeTrayId, setActiveTrayId } = useContext(TrayContext);

  return { activeTrayId, setActiveTrayId };
};
