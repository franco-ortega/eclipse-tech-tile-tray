import { useEffect } from 'react';
import { useTrayContext } from '../../context/trayContext';
import Tray from '../tray/Tray';
import StartRoundButton from '../buttons/StartRoundButton';
import styles from './SelectTiles.module.css';

const SelectTiles = ({ active, data }) => {
  const { tray, setTray } = useTrayContext();

  useEffect(async () => {
    setTray(data);
  }, []);

  return (
    <div className={styles.SelectTiles}>
      <h3>{tray && tray.name}</h3>
      <p>Click on tiles to add them to your tray.</p>
      {tray && <Tray active={active} name={tray.name} rows={tray.rows} />}
      <div data-buttons='start'>
        <StartRoundButton id={data._id} />
      </div>
    </div>
  );
};

export default SelectTiles;
