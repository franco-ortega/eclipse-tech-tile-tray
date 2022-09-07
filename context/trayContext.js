import { createContext, useContext, useEffect, useState } from 'react';
import { putData } from '../services/request';
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
  }, [tray]);

  const incrementRound = async () => {
    const selectedKey = 'round';

    const selectedUpdate = {
      tray,
      update: {
        [selectedKey]: tray.round + 1
      }
    };

    const response = await putData(
      `/api/trays/${tray._id}`,
      selectedUpdate
    ).then((res) => {
      setTray(res);
      setRound(res.round);
      console.log({ res });
    });

    console.log({ response });
  };

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
        incrementRound
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
    incrementRound
  } = useContext(TrayContext);

  return {
    activeTrayId,
    setActiveTrayId,
    tray,
    setTray,
    loading,
    setLoading,
    round,
    incrementRound
  };
};
