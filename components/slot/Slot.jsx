import Tile from '../tile/Tile';
import styles from './Slot.module.css';

const Slot = ({ active, category, color, tile, setTray }) => {
  return (
    <li className={styles.Slot}>
      {!active && tile && (
        <Tile
          active={active}
          category={category}
          color={color}
          tile={tile}
          setTray={setTray}
        />
      )}
    </li>
  );
};

export default Slot;
