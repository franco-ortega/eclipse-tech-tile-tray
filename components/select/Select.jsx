import { useTrayContext } from '../../context/trayContext';
import trayData from '../../data/tray.json';
import Tray from '../tray/Tray';
import styles from './Select.module.css';

const Select = () => {
  const { activeTray } = useTrayContext();
  console.log(activeTray);

  return (
    <div className={styles.Select}>
      <h3>Click on tiles to add them to your tray.</h3>
      <Tray active={false} name={trayData.name} rows={trayData.rows} />
    </div>
  );
};

export default Select;
