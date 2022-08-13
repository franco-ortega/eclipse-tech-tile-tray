import { createContext, useContext, useState } from 'react';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [activeTray, setActiveTray] = useState([]);

  // const currentActiveTray = (id) => {
  //   setActiveTray(id);
  //   return activeTray;
  // };

  return (
    <TrayContext.Provider value={{ activeTray, setActiveTray }}>
      {children}
    </TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const { activeTray, setActiveTray } = useContext(TrayContext);

  return { activeTray, setActiveTray };
};
