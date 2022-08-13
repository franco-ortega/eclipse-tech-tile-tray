import { useEffect, useState } from 'react';
import { useTrayContext } from '../../context/trayContext';
import trayData from '../../data/tray.json';
const { NEXT_PUBLIC_API_URL } = process.env;
import Tray from '../tray/Tray';
import styles from './Select.module.css';

const Select = () => {
  const [game, setGame] = useState(null);
  const { activeTray } = useTrayContext();
  console.log(activeTray);

  useEffect(async () => {
    await fetch(`${NEXT_PUBLIC_API_URL}/api/trays/?id=${activeTray}`)
      .then((res) => res.json())
      .then((res) => setGame(res));
  }, []);

  return (
    <div className={styles.Select}>
      <h3>Click on tiles to add them to your tray.</h3>
      {game && <Tray active={false} name={game.name} rows={game.rows} />}
    </div>
  );
};

export default Select;
