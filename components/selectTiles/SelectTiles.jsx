import { useEffect } from 'react';
import { useTrayContext } from '../../context/trayContext';
import Tray from '../tray/Tray';
import StartButton from '../buttons/StartButton';
import styles from './SelectTiles.module.css';
import Loading from '../loading/Loading';

const SelectTiles = ({ active, data }) => {
  const { tray, setTray, loading, setLoading } = useTrayContext();

  useEffect(() => {
    if (data) {
      setTray(data);
      setLoading(false);
    }
  }, []);

  if (loading) return <Loading />;

  return (
    <div className={styles.SelectTiles}>
      <h3>{tray && tray.name}</h3>
      <h4>{tray && `Select tiles for Round ${tray.round}`}</h4>
      <p>Click on tiles to add them to your tray.</p>
      {tray && <Tray active={active} name={tray.name} rows={tray.rows} />}
      <div data-buttons='start'>
        <StartButton />
      </div>
    </div>
  );
};

export default SelectTiles;
