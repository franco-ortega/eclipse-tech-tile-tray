import { useEffect, useState } from 'react';
import { useTrayContext } from '../../context/trayContext';
import { getData } from '../../services/request';
import { verifyTrayId } from '../../utils/verifyTrayId';
import StartRoundButton from '../buttons/StartRoundButton';
import Tray from '../tray/Tray';
import styles from './SelectTiles.module.css';

const SelectTiles = ({ active, data }) => {
  const { activeTrayId, setActiveTrayId, tray, setTray } = useTrayContext();

  useEffect(async () => {
    const id = verifyTrayId(activeTrayId);

    if (!activeTrayId.length) setActiveTrayId(id);

    // await getData(`/api/trays/?id=${id}`).then((res) => setTray(res));
    setTray(data);
  }, []);

  return (
    <div className={styles.SelectTiles}>
      <h3>{tray && tray.name}</h3>
      <p>Click on tiles to add them to your tray.</p>
      {tray && <Tray active={active} name={tray.name} rows={tray.rows} />}
      <div data-buttons='start'>
        <StartRoundButton />
      </div>
    </div>
  );
};

export default SelectTiles;
