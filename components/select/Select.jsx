import { useEffect, useState } from 'react';
import { useTrayContext } from '../../context/trayContext';
import { getData } from '../../services/request';
import { getLocalStorage } from '../../utils/localStorage';
const { NEXT_PUBLIC_API_URL } = process.env;
import Tray from '../tray/Tray';
import styles from './Select.module.css';

const Select = () => {
  const [tray, setTray] = useState(null);
  const { activeTrayId, setActiveTrayId } = useTrayContext();

  useEffect(async () => {
    const id = activeTrayId.length
      ? activeTrayId
      : getLocalStorage('ACTIVE_TRAY_ID');

    if (!activeTrayId.length) setActiveTrayId(id);

    await getData(`/api/trays/?id=${id}`).then((res) => setTray(res));
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
