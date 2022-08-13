import Slot from '../slot/Slot';
import styles from './Row.module.css';

const Row = ({ active, tech }) => {
  // console.log(active, tech);

  const slots = [];

  for (let i = 0; i < tech.length; i++) {
    slots.push(i);
  }

  const findTile = (position, tiles) => {
    // console.log(position);
    // console.log(tiles);
    return tiles.find((tile) => tile.position === position);
  };

  return (
    <ul className={styles.Row}>
      {tech &&
        slots.map((slot) => (
          <Slot
            key={slot}
            active={active}
            // tile={tech.tiles[(slot + 1) * 2] && tech.tiles[(slot + 1) * 2]}
            tile={findTile(slot + 1, tech.tiles) || tech.tiles[slot]}
          />
        ))}
    </ul>
  );
};

export default Row;
