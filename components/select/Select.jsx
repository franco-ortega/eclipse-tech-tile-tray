import { useEffect, useState } from 'react';
import { useTrayContext } from '../../context/trayContext';
const { NEXT_PUBLIC_API_URL } = process.env;
import Tray from '../tray/Tray';
import styles from './Select.module.css';

const Select = () => {
  const [tray, setTray] = useState(null);
  const { activeTrayId } = useTrayContext();
  console.log(activeTrayId);

  useEffect(async () => {
    await fetch(`${NEXT_PUBLIC_API_URL}/api/trays/?id=${activeTrayId}`)
      .then((res) => res.json())
      .then((res) => setTray(res));
  }, []);

  return (
    <div className={styles.Select}>
      <h3>{tray && tray.name}</h3>
      <p>Click on tiles to add them to your tray.</p>
      {tray && <Tray active={false} name={tray.name} rows={tray.rows} />}
    </div>
  );
};

export default Select;
