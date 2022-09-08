import { createContext, useContext, useState } from 'react';
import { putData } from '../services/request';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [tray, setTray] = useState(null);
  const [loading, setLoading] = useState(false);
  const [round, setRound] = useState(1);

  const incrementRound = async () => {
    const roundUpdate = {
      update: { round: tray.round + 1 }
    };

    await putData(`/api/trays/${tray._id}`, roundUpdate).then((res) => {
      setTray(res);
      setRound(res.round);
    });
  };

  return (
    <TrayContext.Provider
      value={{
        tray,
        setTray,
        loading,
        setLoading,
        round,
        incrementRound
      }}
    >
      {children}
    </TrayContext.Provider>
  );
};

export const useTrayContext = () => {
  const { tray, setTray, loading, setLoading, round, incrementRound } =
    useContext(TrayContext);

  return {
    tray,
    setTray,
    loading,
    setLoading,
    round,
    incrementRound
  };
};
