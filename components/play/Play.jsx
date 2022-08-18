import { useEffect } from 'react';
import { useTrayContext } from '../../context/trayContext';
import { getData } from '../../services/request';
import { verifyTrayId } from '../../utils/verifyTrayId';
import Tray from '../tray/Tray';
import styles from './Play.module.css';

const Play = ({ active }) => {
  const { tray, setTray, activeTrayId, setActiveTrayId } = useTrayContext();

  useEffect(async () => {
    const id = verifyTrayId(activeTrayId);

    if (!activeTrayId.length) setActiveTrayId(id);

    await getData(`/api/trays/?id=${id}`).then((res) => setTray(res));
  }, []);

  return (
    <div className={styles.Play}>
      <h2>Play Game</h2>
      <h3>{tray && tray.name}</h3>
      <p>Click on a tile to purchase it.</p>
      {tray && <Tray active={active} name={tray.name} rows={tray.rows} />}
    </div>
  );
};

export default Play;
