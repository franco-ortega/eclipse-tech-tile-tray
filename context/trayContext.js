import { createContext, useContext, useEffect, useState } from 'react';
import { putData } from '../services/request';
import { getLocalStorage } from '../utils/localStorage';

const TrayContext = createContext(null);

export const TrayProvider = ({ children }) => {
  const [activeTrayId, setActiveTrayId] = useState('');
  const [tray, setTray] = useState(null);
  const [loading, setLoading] = useState(false);
  const [round, setRound] = useState(null);

  useEffect(() => {
    if (!activeTrayId) {
      const id = getLocalStorage('ACTIVE_TRAY_ID');
      setActiveTrayId(id);
    }
    if (tray) setRound(tray.round);
  }, [tray]);

  const incrementRound = async () => {
    setRound((prevState) => prevState + 1);

    const selectedKey = 'round';

    const selectedUpdate = {
      tray,
      update: {
        [selectedKey]: round + 1
      }
    };

    await putData(`/api/trays/${tray._id}`, selectedUpdate).then((res) =>
      setTray(res)
    );
  };

  console.log('ROUND: ', round);

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
