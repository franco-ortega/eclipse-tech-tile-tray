import { useEffect } from 'react';
import { useTrayContext } from '../../context/trayContext';
import Tray from '../tray/Tray';
import NextRoundButton from '../buttons/NextRoundButton';
import EndGameButton from '../buttons/EndGameButton';
import styles from './Play.module.css';

const Play = ({ active, data }) => {
  const { tray, setTray } = useTrayContext();

  useEffect(async () => {
    await setTray(data);
  }, []);

  return (
    <div className={styles.Play}>
      <h2>Play Game</h2>
      <h3>{tray && tray.name}</h3>
      <p>Click on a tile to purchase it.</p>
      {tray && <Tray active={active} name={tray.name} rows={tray.rows} />}
      <div data-buttons='next-and-end'>
        <NextRoundButton />
        <EndGameButton />
      </div>
    </div>
  );
};

export default Play;
