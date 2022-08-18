import { useEffect, useState } from 'react';
import { useTrayContext } from '../../context/trayContext';
import { getData } from '../../services/request';
import { verifyTrayId } from '../../utils/verifyTrayId';
import Tray from '../tray/Tray';
import styles from './Select.module.css';

const Select = ({ active }) => {
  const { tray, setTray } = useTrayContext();
  const { activeTrayId, setActiveTrayId } = useTrayContext();

  useEffect(async () => {
    const id = verifyTrayId(activeTrayId);

    if (!activeTrayId.length) setActiveTrayId(id);

    await getData(`/api/trays/?id=${id}`).then((res) => setTray(res));
  }, []);

  return (
    <div className={styles.Select}>
      <h3>{tray && tray.name}</h3>
      <p>Click on tiles to add them to your tray.</p>
      {tray && <Tray active={active} name={tray.name} rows={tray.rows} />}
    </div>
  );
};

export default Select;
