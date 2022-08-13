import Tile from '../tile/Tile';
import styles from './Slot.module.css';

const Slot = ({ active, tile }) => {
  return (
    <li className={styles.Slot}>{!active && tile && <Tile tile={tile} />}</li>
  );
};

export default Slot;
