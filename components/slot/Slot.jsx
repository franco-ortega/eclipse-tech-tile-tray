import Tile from '../tile/Tile';
import styles from './Slot.module.css';

const Slot = ({ active, category, color, tile }) => {
  return (
    <li className={styles.Slot}>
      {!active && tile ? (
        <Tile active={active} category={category} color={color} tile={tile} />
      ) : active && tile.selected - tile.used ? (
        <Tile active={active} category={category} color={color} tile={tile} />
      ) : null}
    </li>
  );
};

export default Slot;
