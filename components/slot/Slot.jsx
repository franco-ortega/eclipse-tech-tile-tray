import Tile from '../tile/Tile';
import styles from './Slot.module.css';

const Slot = ({ active, category, color, tile }) => {
  return (
    <li className={styles.Slot}>
      {!active && tile ? (
        <Tile active={active} category={category} color={color} tile={tile} />
      ) : active && tile.selected ? (
        <Tile active={active} category={category} color={color} tile={tile} />
      ) : (
        tile.position && (
          <div data-slot='empty'>
            {tile.cost.max} <span>{tile.cost.min}</span>
          </div>
        )
      )}
    </li>
  );
};

export default Slot;
