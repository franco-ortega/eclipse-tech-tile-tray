import Tile from '../tile/Tile';
import styles from './Slot.module.css';

const Slot = ({ active, color, tile }) => {
  return (
    <li className={styles.Slot}>
      {!active && tile && <Tile active={active} color={color} tile={tile} />}
    </li>
  );
};

export default Slot;
