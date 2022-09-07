import { useEffect } from 'react';
import { useTrayContext } from '../../context/trayContext';
import Tray from '../tray/Tray';
import NextRoundButton from '../buttons/NextRoundButton';
import EndGameButton from '../buttons/EndGameButton';
import styles from './Play.module.css';
import Loading from '../loading/Loading';

const Play = ({ active, data }) => {
  const { tray, setTray, loading, setLoading } = useTrayContext();

  useEffect(() => {
    if (data) {
      setTray(data);
      setLoading(false);
    }
  }, []);

  if (loading) return <Loading />;

  return (
    <div className={styles.Play}>
      <h2>Play Game</h2>
      {tray && (
        <>
          <h3>{tray.name}</h3>
          <h4>Round {tray.round}</h4>
          <Tray active={active} name={tray.name} rows={tray.rows} />
        </>
      )}
      <div data-buttons='next-and-end'>
        <NextRoundButton />
        <EndGameButton />
      </div>
    </div>
  );
};

export default Play;
